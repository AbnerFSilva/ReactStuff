import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const saveExpenseDateHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.floor(Math.random().toString()),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <h1>New Expense</h1>
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
}
export default NewExpense;
