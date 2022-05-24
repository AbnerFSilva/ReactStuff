import Expenses from "./components/ExpenseMain/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
function App() {
  const expenses = [
    { id: "e1", title: "Rent", amount: 100, date: new Date(2020, 2, 28) },
    { id: "e2", title: "Coffee", amount: 2, date: new Date(2020, 2, 23) },
    {
      id: "e3",
      title: "Car insurance",
      amount: 100.5,
      date: new Date(2021, 1, 1),
    },
    {
      id: "e4",
      title: "Health insurance",
      amount: 120.5,
      date: new Date(2021, 2, 1),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("expense in app js", expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseSummary={expenses} />
    </div>
  );
}

export default App;
