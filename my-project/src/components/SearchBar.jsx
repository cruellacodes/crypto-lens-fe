import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Fetch token data based on the query
    console.log('Searching for:', query);
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter token symbol..."
        className="bg-black text-green-400 border border-green-400 p-2 rounded-l focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-green-400 text-black p-2 rounded-r hover:bg-green-500 transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;