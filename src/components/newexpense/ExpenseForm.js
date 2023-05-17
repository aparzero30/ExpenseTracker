import { useState } from "react";
import "./expenseform.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChange = (event) => {
    setInputTitle(event.target.value);
    console.log(inputTitle);
  };
  const amountChange = (event) => {
    setInputAmount(event.target.value);
    console.log(inputAmount);
  };
  const dateChange = (event) => {
    setInputDate(event.target.value);
    console.log(inputDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveExpense(expenseData);
    setInputAmount("");
    setInputDate("");
    setInputTitle("");

    // console.log(expenseData);
  };
  const [viewForm, showViewForm] = useState(false);

  const hideForm = () => {
    showViewForm(false);
  };
  const showForm = () => {
    showViewForm(true);
  };

  if (viewForm) {
    return (
      <form className="expense-form" onSubmit={submitHandler}>
        <div className="expense-control">
          <label>Title</label>
          <input type="text" onChange={titleChange} value={inputTitle} />
        </div>
        <div className="expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChange}
            value={inputAmount}
          />
        </div>
        <div className="expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChange}
            value={inputDate}
          />
        </div>
        <div className="expense-action">
          <button type="submit" className="add">
            ADD
          </button>
        </div>
        <div className="expense-action">
          <button type="cancel" onClick={hideForm} className="cancel">
            CANCEL
          </button>
        </div>
      </form>
    );
  }
  return (
    <div className="new-expense-button">
      <button onClick={showForm}>NEW EXPENSE</button>
    </div>
  );
};
export default ExpenseForm;
