import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h2 style={{ color: "white" }} className="expenses-list__fallback">
        No Expenses Found!
      </h2>
    );
  }

  return (
    <>
      <ul className="expenses-list">
        {props.items.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </>
  );
}

export default ExpensesList;
