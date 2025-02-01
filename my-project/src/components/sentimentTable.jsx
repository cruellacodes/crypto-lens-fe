import React from "react";
import SentimentRow from "./sentimentRow";

const sentimentData = [
  { token: "BTC", sentiment24h: 78, sentiment7d: 85, sentiment30d: 90, traders: 5000, marketCap: "$500B" },
  { token: "ETH", sentiment24h: 72, sentiment7d: 80, sentiment30d: 85, traders: 4000, marketCap: "$220B" },
  { token: "SOL", sentiment24h: 65, sentiment7d: 70, sentiment30d: 80, traders: 3000, marketCap: "$80B" },
  { token: "AVAX", sentiment24h: 60, sentiment7d: 67, sentiment30d: 75, traders: 2500, marketCap: "$50B" },
];

const SentimentTable = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Sentiment Scores</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="p-2">Token</th>
            <th className="p-2">24H Score</th>
            <th className="p-2">7D Score</th>
            <th className="p-2">30D Score</th>
            <th className="p-2">Traders</th>
            <th className="p-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {sentimentData.map((data, index) => (
            <SentimentRow key={index} {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SentimentTable;
