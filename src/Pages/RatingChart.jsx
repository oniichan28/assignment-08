import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const RatingChart = ({ ratings }) => {
  const data = ratings.map(r => ({
    name: r.name,
    value: r.count,
  }));

  return (
    <div className="w-full bg-[#f9f9f9] p-6 rounded-md shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Ratings</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={80} />
          <Tooltip />
          <Bar dataKey="value" fill="#ff9800" barSize={25} radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
