import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TokenInfo from './components/TokenInfo';
import Charts from './components/Charts';
import Leaderboard from './components/Leaderboard';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Token Info */}
        <TokenInfo />

        {/* Charts */}
        <Charts />
      </div>

      {/* Leaderboard */}
      <Leaderboard />
    </div>
  );
};

export default App;