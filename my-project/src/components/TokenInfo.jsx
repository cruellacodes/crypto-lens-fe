const TokenInfo = ({ token }) => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">Token Info</h2>
        <div className="space-y-1">
          <p><span className="font-semibold">Name:</span> {token.symbol}</p>
          <p><span className="font-semibold">Price:</span> $0.50</p>
          <p><span className="font-semibold">Market Cap:</span> {token.marketCap}</p>
          <p><span className="font-semibold">WOM Score:</span>
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
          </p>
        </div>
      </div>
    );
  };
  
  export default TokenInfo;