import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const TweetScatterChart = () => {
  const [selectedToken, setSelectedToken] = useState('WIF');

  const tokens = ['WIF', 'FWOG', 'GOAT'];

  const series = tokens.map((token) => ({
    name: token,
    data: [
      { x: new Date('2023-10-01').getTime(), y: 50 },
      { x: new Date('2023-10-02').getTime(), y: 70 },
    ],
  }));

  const filteredSeries = series.filter((s) => s.name === selectedToken);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Tweet Activity Over Time</h2>
      <div className="flex justify-between items-center mb-4">
        <label className="text-sm">Filter by token:</label>
        <select
          value={selectedToken}
          onChange={(e) => setSelectedToken(e.target.value)}
          className="bg-black text-green-400 p-2 rounded"
        >
          {tokens.map((token) => (
            <option key={token} value={token}>
              {token}
            </option>
          ))}
        </select>
      </div>
      <Chart
        options={{
          chart: { type: 'scatter', zoom: { enabled: true } },
          xaxis: { type: 'datetime', title: { text: 'Time' } },
          yaxis: { title: { text: 'Sentiment Score' } },
        }}
        series={filteredSeries}
        type="scatter"
        height={400}
      />
    </div>
  );
};

export default TweetScatterChart;