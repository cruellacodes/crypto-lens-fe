import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const TweetActivityChart = ({ token }) => {
  // State to hold the aggregated tweet volume data
  const [volumeData, setVolumeData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Calculate the timestamp for 24 hours ago from now
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  useEffect(() => {
    // Fetch tweets from your backend endpoint
    fetch('/api/tweets')
      .then((res) => res.json())
      .then((tweets) => {
        // Filter tweets to only include those from the last 24 hours
        const tweetsLast24 = tweets.filter(
          (tweet) => new Date(tweet.createdAt) >= twentyFourHoursAgo
        );

        // Create an array for tweet volume for each of the last 24 hours
        const volumeArray = new Array(24).fill(0);
        tweetsLast24.forEach((tweet) => {
          const tweetTime = new Date(tweet.createdAt);
          const diffMs = tweetTime - twentyFourHoursAgo; // difference in milliseconds
          const hourIndex = Math.floor(diffMs / (60 * 60 * 1000)); // determine the hour slot (0-23)
          if (hourIndex >= 0 && hourIndex < 24) {
            volumeArray[hourIndex]++;
          }
        });

        // Map the aggregated data into the format required for a scatter chart
        const volumePoints = volumeArray.map((count, index) => ({
          x: index, // hour offset from twentyFourHoursAgo
          y: count, // number of tweets during that hour
        }));

        setVolumeData(volumePoints);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching tweets:', error);
        setLoading(false);
      });
  }, [twentyFourHoursAgo]);

  // Chart data with only the tweet volume dataset
  const data = {
    datasets: [
      {
        label: 'Tweet Volume',
        data: volumeData,
        backgroundColor: 'rgb(75, 192, 192)', // Teal color for tweet volume points
      },
    ],
  };

  // Chart options with custom styling and x-axis labels (formatted as HH:00)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#00ff00', // Terminal-style green text
        },
      },
      title: {
        display: true,
        text: `Tweet Activity Scatter for ${token.symbol}`,
        color: '#00ff00',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (HH:00)',
          color: '#00ff00',
        },
        grid: {
          color: '#333', // Dark grid lines
        },
        ticks: {
          color: '#00ff00',
          // Convert the hour offset into a time label
          callback: function (value) {
            const time = new Date(twentyFourHoursAgo.getTime() + value * 60 * 60 * 1000);
            const hours = time.getHours().toString().padStart(2, '0');
            return `${hours}:00`;
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Tweet Volume',
          color: '#00ff00',
        },
        grid: {
          color: '#333',
        },
        ticks: {
          color: '#00ff00',
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">
        Tweet Activity Scatter Chart (Last 24 Hours)
      </h2>
      {loading ? (
        <p className="text-green-400">Loading...</p>
      ) : (
        <Scatter data={data} options={options} height={100} />
      )}
    </div>
  );
};

export default TweetActivityChart;
