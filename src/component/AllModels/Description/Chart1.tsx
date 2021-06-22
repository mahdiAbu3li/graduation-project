import React from "react";
import { Chart } from "react-charts";

function Chart1() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 80],
          [1, 82],
          [2, 83],
          [3, 85],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}

export default Chart1;
