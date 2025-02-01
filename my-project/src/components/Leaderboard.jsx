const Leaderboard = () => {
    const tokens = [
      { name: 'WIF', marketCap: '$500M', sentiment: 'Positive' },
      { name: 'FWOG', marketCap: '$300M', sentiment: 'Neutral' },
      { name: 'GOAT', marketCap: '$200M', sentiment: 'Negative' },
    ];
  
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
        <div className="space-y-2">
          {tokens.map((token, index) => (
            <div key={index} className="flex justify-between">
              <p>{token.name}</p>
              <p>{token.marketCap}</p>
              <p>{token.sentiment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Leaderboard;