import React, { useState } from 'react';

const Leaderboard = ({ onTokenSelect }) => {
  const [sortBy, setSortBy] = useState('womScore'); // Default sorting by WOM score

  const tokens = [
    {
      chain: 'ETH',
      symbol: 'WIF',
      womScore: 95,
      marketCap: '$500M',
      age: 24,
      volume: '$1.2M',
      makerCount: 120,
      liquidity: '$10M',
    },
    {
      chain: 'SOL',
      symbol: 'FWOG',
      womScore: 85,
      marketCap: '$300M',
      age: 48,
      volume: '$800K',
      makerCount: 90,
      liquidity: '$7M',
    },
    {
      chain: 'BNB',
      symbol: 'GOAT',
      womScore: 75,
      marketCap: '$200M',
      age: 72,
      volume: '$500K',
      makerCount: 75,
      liquidity: '$5M',
    },
  ];

  // Sort tokens based on the selected option
  const sortedTokens = [...tokens].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="flex justify-between items-center mb-4">
        <label className="text-sm">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-black text-green-400 p-2 rounded"
        >
          <option value="womScore">WOM Score</option>
          <option value="marketCap">Market Cap</option>
          <option value="volume">Volume</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-2">Chain</th>
              <th className="py-2">Token</th>
              <th className="py-2">WOM Score</th>
              <th className="py-2">Market Cap</th>
              <th className="py-2">Age (Hours)</th>
              <th className="py-2">Volume (USD)</th>
              <th className="py-2">Maker Count</th>
              <th className="py-2">Liquidity (USD)</th>
            </tr>
          </thead>
          <tbody>
            {sortedTokens.map((token, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => onTokenSelect(token)}
              >
                {/* Chain (Icon only) */}
                <td className="py-2">
                  <img
                    src={`https://cryptologos.cc/logos/${token.chain.toLowerCase()}-${token.chain.toLowerCase()}-logo.png`}
                    alt={token.chain}
                    className="w-6 h-6"
                  />
                </td>

                {/* Token (Symbol) */}
                <td className="py-2 font-semibold">{token.symbol}</td>

                {/* WOM Score (Progress Bar) */}
                <td className="py-2">
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${token.womScore}%`,
                          backgroundColor:
                            token.womScore >= 70
                              ? '#10B981' // Green for high score
                              : token.womScore >= 40
                              ? '#FBBF24' // Yellow for medium score
                              : '#EF4444', // Red for low score
                        }}
                      ></div>
                    </div>
                    <span className="ml-2">{token.womScore}%</span>
                  </div>
                </td>

                {/* Market Cap */}
                <td className="py-2">{token.marketCap}</td>

                {/* Age (Hours) */}
                <td className="py-2">{token.age}h</td>

                {/* Volume (USD) */}
                <td className="py-2">{token.volume}</td>

                {/* Maker Count */}
                <td className="py-2">{token.makerCount}</td>

                {/* Liquidity (USD) */}
                <td className="py-2">{token.liquidity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;