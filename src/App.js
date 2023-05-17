import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newexpense/NewExpense";
import { useState } from "react";

const initialExpenses = [
  {
    id: "a1",
    title: "manga",
    amount: 123.45,
    date: new Date(2023, 0, 1),
  },
  {
    id: "a2",
    title: "games",
    amount: 231.15,
    date: new Date(2023, 1, 13),
  },
  {
    id: "a3",
    title: "shoes",
    amount: 314.25,
    date: new Date(2023, 2, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
