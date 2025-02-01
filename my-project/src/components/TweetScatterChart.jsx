import React from 'react';
import Chart from 'react-apexcharts';

const TweetScatterChart = () => {
  // Example data for the scatter chart (replace with real data from your backend)
  const series = [
    {
      name: 'WIF',
      data: [
        {
          x: new Date('2023-10-01').getTime(),
          y: 50,
          image: 'https://via.placeholder.com/40', // User profile image
          tweet: 'WIF is going to the moon! 🚀', // Example tweet
        },
        {
          x: new Date('2023-10-02').getTime(),
          y: 70,
          image: 'https://via.placeholder.com/40',
          tweet: 'Just bought more WIF! 💎',
        },
      ],
    },
    {
      name: 'FWOG',
      data: [
        {
          x: new Date('2023-10-01').getTime(),
          y: 30,
          image: 'https://via.placeholder.com/40',
          tweet: 'FWOG is underrated. 🐸',
        },
        {
          x: new Date('2023-10-02').getTime(),
          y: 60,
          image: 'https://via.placeholder.com/40',
          tweet: 'Holding FWOG for the long term. 🚀',
        },
      ],
    },
  ];

  const options = {
    chart: {
      type: 'scatter',
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      type: 'datetime',
      title: {
        text: 'Time',
      },
    },
    yaxis: {
      title: {
        text: 'Sentiment Score',
      },
    },
    markers: {
      size: 0, // Hide default markers
    },
    tooltip: {
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        const data = w.globals.series[seriesIndex].data[dataPointIndex];
        return `
          <div class="bg-gray-900 p-2 rounded-lg shadow-lg">
            <div class="flex items-center">
              <img src="${data.image}" alt="Profile" class="w-6 h-6 rounded-full" />
              <span class="ml-2">${data.tweet}</span>
            </div>
          </div>
        `;
      },
    },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Tweet Activity Over Time</h2>
      <Chart
        options={options}
        series={series}
        type="scatter"
        height={400}
      />
    </div>
  );
};

export default TweetScatterChart;