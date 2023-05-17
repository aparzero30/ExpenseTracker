import "./expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import { useState } from "react";

function Expense(props) {
  const [title, setTitle] = useState(props.expenseInfo.title);

  const buttonClick = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseInfo.date} />
      <div className="description">
        <h2>{title}</h2>
        <div className="price">${props.expenseInfo.amount}</div>
      </div>
      <button onClick={buttonClick} className="edit">
        EDIT
      </button>
    </Card>
  );
}

export default Expense;
