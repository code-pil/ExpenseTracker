import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpenses.css";

export const NewExpenses = (props) => {
  const saveDataHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expense);  
  };

  return (
    <div className="new-expense">
        <ExpenseForm saveData={saveDataHandler}/>
    </div>
  );
};
