import ExpenseItem from "../Expenses/Item/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expense.css";
function Expenses(props) {
  const filterExpensesHandler = (filterOption) => {
    console.log("filter in expense js", filterOption);
  };
  return (
    <div>
      <div>
        <ExpensesFilter onFilterChange={filterExpensesHandler} />
      </div>
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
    </div>
  );
}

export default Expenses;
