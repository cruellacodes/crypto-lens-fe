import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TokenInfo from './components/TokenInfo';
import TweetActivityChart from './components/TweetActivityChart';
import Leaderboard from './components/Leaderboard';
import TweetScatterChart from './components/TweetScatterChart';

const App = () => {
  const [selectedToken, setSelectedToken] = useState({
    symbol: 'WOM Coin',
    price: '$0.50',
    marketCap: '$100M',
    womScore: 85,
    age: 24,
    volume: '$1.2M',
    makerCount: 120,
    liquidity: '$10M',
  });

  // Function to handle token selection
  const handleTokenSelect = (token) => {
    setSelectedToken(token);
  };

  return (
    // Outer div covers full width with a black background.
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Inner container centers your content and provides horizontal padding */}
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <SearchBar onTokenSelect={handleTokenSelect} />

        {/* Token Info and Tweet Activity Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Token Info */}
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <TokenInfo token={selectedToken} />
          </div>

          {/* Tweet Activity Chart */}
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <TweetActivityChart token={selectedToken} />
          </div>
        </div>

        {/* Leaderboard */}
        <Leaderboard onTokenSelect={handleTokenSelect} />

        {/* Tweet Scatter Chart */}
        <TweetScatterChart />
      </div>
    </div>
  );
};

export default App;
