import React, { useState } from "react";
import ExpenseItem from "../Expenses/Item/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
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
        {filteredExpenses.length === 0 ? (
          <p>No Records found.</p>
        ) : (
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Expenses;
