import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDateHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.floor(Math.random().toString()),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDateHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
