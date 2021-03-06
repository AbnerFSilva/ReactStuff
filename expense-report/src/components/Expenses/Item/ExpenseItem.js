import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Date/ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
