import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense() {
  return (
    <div className="new-expense">
      <h1>New Expense</h1>
      <ExpenseForm />
    </div>
  );
}
export default NewExpense;
