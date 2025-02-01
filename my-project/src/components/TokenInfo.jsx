const TokenInfo = ({ token }) => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">Token Info</h2>
        <div className="space-y-1">
          <p><span className="font-semibold">Name:</span> {token.name}</p>
          <p><span className="font-semibold">Price:</span> {token.price}</p>
          <p><span className="font-semibold">Market Cap:</span> {token.marketCap}</p>
          <p><span className="font-semibold">Sentiment:</span> {token.sentiment}</p>
          <p><span className="font-semibold">Price Change:</span> {token.priceChange}</p>
        </div>
      </div>
    );
  };
  
  export default TokenInfo;