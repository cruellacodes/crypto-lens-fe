const TokenInfo = () => {
    // Example token data (replace with real data from your backend)
    const tokenData = {
      name: 'WIF',
      price: '$2.50',
      marketCap: '$500M',
      holders: '211,803',
      sentiment: 'Positive',
    };
  
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Token Info</h2>
        <div className="space-y-2">
          <p><span className="font-semibold">Name:</span> {tokenData.name}</p>
          <p><span className="font-semibold">Price:</span> {tokenData.price}</p>
          <p><span className="font-semibold">Market Cap:</span> {tokenData.marketCap}</p>
          <p><span className="font-semibold">Holders:</span> {tokenData.holders}</p>
          <p><span className="font-semibold">Sentiment:</span> {tokenData.sentiment}</p>
        </div>
      </div>
    );
  };
  
  export default TokenInfo;