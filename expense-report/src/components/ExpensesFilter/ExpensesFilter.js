import React, { useState } from "react";
import "./ExpensesFilter.css";
function ExpenseFilter(props) {
  const [, setFilterOption] = useState("");

  const filterChangeHandler = (event) => {
    event.preventDefault();
    setFilterOption(event.target.value);
    props.onFilterChange(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
