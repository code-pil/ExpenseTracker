import React from "react";
import "./ExpenseFilter.css";

export const ExpenseFilter = (props) => {
  const selectHandler = (event) => {
    props.onSelect(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.select} name="year" onChange={selectHandler}>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};
