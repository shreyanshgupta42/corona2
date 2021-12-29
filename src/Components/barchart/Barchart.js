import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  // ResponsiveContainer,
} from 'recharts';

const Barchart = ({ data, render }) => {
  console.log(render);
  var color;
  if (render === 1) {
    color = '#ff3049';
  } else if (render === 2) {
    color = 'green';
  } else if (render === 3) {
    color = 'grey';
  }
  return (
    <div>
      {/* <ResponsiveContainer width="40%" height={300}> */}
        <BarChart
          width={400}
          height={300}
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
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default Barchart;
