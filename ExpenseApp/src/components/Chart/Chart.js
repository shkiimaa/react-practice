import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  console.log(props);
  const dataPointValue = props.dataPoints.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar key={data.id} value={data.value} maxValue={totalMaximum} label={data.label} />
      ))}
    </div>
  );
};

export default Chart;
