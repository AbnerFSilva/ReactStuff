import React, { useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import "./Expense.css";
function Expenses(props) {
  const [filterOption, setFilterOption] = useState("2020");

  const filterExpensesHandler = (filterOption) => {
    setFilterOption(filterOption);
  };

  const filteredExpenses = props.expenseSummary.filter((expense) => {
    return expense.date.getFullYear().toString() === filterOption;
  });
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onFilterChange={filterExpensesHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default Expenses;
