import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expense.css";
function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenseSummary.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
