import Expense from "./Expense";
import "./expenselist.css";

const ExpensesList = (props) => {
  console.log(props.items);
  //   let expenseContent = <p className="display-empty">Empty</p>;

  if (props.items.length === 0) {
    return <h1>No expense Found</h1>;
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <Expense expenseInfo={expense} key={expense.id} />
      ))}
    </ul>
  );
};
export default ExpensesList;
