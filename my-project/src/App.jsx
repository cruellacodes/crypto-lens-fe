import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TokenInfo from './components/TokenInfo';
import PriceChart from './components/PriceChart';
import Leaderboard from './components/Leaderboard';
import TweetScatterChart from './components/TweetScatterChart';

const App = () => {
  const [selectedToken, setSelectedToken] = useState({
    name: 'WOM Coin',
    price: '$0.50',
    marketCap: '$100M',
    sentiment: 'Positive',
    priceChange: '+1.2%',
  });

  // Function to handle token selection
  const handleTokenSelect = (token) => {
    setSelectedToken(token);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar onTokenSelect={handleTokenSelect} />

      {/* Token Info and Price Chart (Smaller Blocks) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Token Info */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <TokenInfo token={selectedToken} />
        </div>

        {/* Price Chart */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <PriceChart token={selectedToken} />
        </div>
      </div>

      {/* Leaderboard */}
      <Leaderboard onTokenSelect={handleTokenSelect} />

      {/* Tweet Scatter Chart */}
      <TweetScatterChart />
    </div>
  );
};

export default App;