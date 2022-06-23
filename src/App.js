import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENS = [
  {
    title: "Personal Expenses",
    amount: 100,
    date: new Date(2022, 6, 21),
  },
  {
    title: "Car Expenses",
    amount: 200,
    date: new Date(2022, 4, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENS);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
