import React from "react";
import "./Chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = props => {

    const MAX = Math.max(...props.datapoints.map(dp => dp.value));

  return (
    <div className="chart">
      {props.datapoints.map((datapoints) => (
        <ChartBar
          label={datapoints.label}
          key={datapoints.label}
          value={datapoints.value}
          max={MAX}
        />
      ))}
    </div>
  );
};
