import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const max = Math.max(...props.data.map((item) => item.value));

  return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar
          bar={item.value}
          maxValue={max}
          label={item.label}
          key={item.label}
        />
      ))}
    </div>
  );
}

export default Chart;
