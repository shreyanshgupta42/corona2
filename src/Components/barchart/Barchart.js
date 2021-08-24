import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const Barchart = ({ data,render }) => {
  console.log(render)
  var color;
  if(render===1){
    color='#ff3049'
  }else if(render===2){
    color='green'
  }else if(render===3){
    color='grey'
  }
  return (
    <div>
      <BarChart
        width={500}
        height={350}
        data={data ? data : []}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="val" fill={color} />
      </BarChart>
    </div>
  );
};

export default Barchart;
