import ExpenseForm from "./ExpenseForm";
import "./newexpense.css";
import Card from "../ui/Card";

const NewExpense = (props) => {
  const saveExpenseHandleer = (inputExpenseData) => {
    const expenseData = { ...inputExpenseData, id: Math.random().toString() };

    props.onAddExpense(expenseData);
  };

  return (
    <Card className="newExpense">
      <ExpenseForm onSaveExpense={saveExpenseHandleer} />
    </Card>
  );
};
export default NewExpense;
