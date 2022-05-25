import "./ExpenseList.css";
import ExpenseItem from "../Expenses/Item/ExpenseItem";
function ExpenseList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expense-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
}

export default ExpenseList;
