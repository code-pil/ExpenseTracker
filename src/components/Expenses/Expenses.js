import React, { useState } from "react";
import Card from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import "./Expenses.css";
import { ExpensesChart } from "./ExpensesChart";
import { ExpesesList } from "./ExpesesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const selectHandler = (year) => {
    setSelectedYear(year);
  };

  const selectedExpenses = props.items.filter(
    (ele) => ele.date.getFullYear().toString() === selectedYear
  );

  return (
      <Card className="expenses">
        <ExpenseFilter select={selectedYear} onSelect={selectHandler} />
        <ExpensesChart data={selectedExpenses}/>
        <ExpesesList item={selectedExpenses} year={selectedYear}/>
      </Card>
  );
};

export default Expenses;
