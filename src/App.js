import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
  return (
    <>
      <Expenses items={expenses} />
    </>
  );
}

export default App;
