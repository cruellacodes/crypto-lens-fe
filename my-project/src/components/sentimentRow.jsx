import React from "react";

const SentimentRow = ({ token, sentiment24h, sentiment7d, sentiment30d, traders, marketCap }) => {
  return (
    <tr className="border-b border-gray-700">
      <td className="p-2">{token}</td>
      <td className={`p-2 ${sentiment24h >= 70 ? "text-green-400" : "text-red-400"}`}>{sentiment24h}</td>
      <td className={`p-2 ${sentiment7d >= 70 ? "text-green-400" : "text-red-400"}`}>{sentiment7d}</td>
      <td className={`p-2 ${sentiment30d >= 70 ? "text-green-400" : "text-red-400"}`}>{sentiment30d}</td>
      <td className="p-2">{traders}</td>
      <td className="p-2">{marketCap}</td>
    </tr>
  );
};

export default SentimentRow;
