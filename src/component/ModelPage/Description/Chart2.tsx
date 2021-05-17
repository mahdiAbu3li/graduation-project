import React from 'react'
import { Chart } from 'react-charts'
 
function Chart2() {
    const series = React.useMemo(
        () => ({
          type: 'bar'
        }),
        []
      )
  const data = React.useMemo(
    () => [
      {
        type: "column",
        label: 'Series 3',
        data: [[0, 1], [1, 20], [2, 40], [3, 20], [4, 70]]
      },    
    ],
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  ) 
  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px',
        color:'red',
      

      }} 
    >
      <Chart data={data} axes={axes} series={series} />
    </div>
  )
}

export default Chart2;
