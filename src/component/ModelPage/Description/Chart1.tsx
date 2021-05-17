import React from 'react'
import { Chart } from 'react-charts'
 
function Chart1() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 10], [1, 20], [2, 40], [3, 20], [4, 70]]
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
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
}

export default Chart1;
