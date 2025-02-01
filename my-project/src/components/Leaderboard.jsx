const Leaderboard = () => {
    const tokens = [
      {
        chain: 'ETH', // Chain icon or abbreviation
        symbol: 'WIF',
        womScore: 75, // Sentiment score (0-100)
        marketCap: '$500M',
        age: 24, // Age in hours
        volume: '$1.2M',
        makerCount: 120,
        liquidity: '$10M',
      },
      {
        chain: 'SOL',
        symbol: 'FWOG',
        womScore: 45,
        marketCap: '$300M',
        age: 48,
        volume: '$800K',
        makerCount: 90,
        liquidity: '$7M',
      },
      {
        chain: 'BNB',
        symbol: 'GOAT',
        womScore: 60,
        marketCap: '$200M',
        age: 72,
        volume: '$500K',
        makerCount: 75,
        liquidity: '$5M',
      },
      {
        chain: 'ETH',
        symbol: 'MUMU',
        womScore: 85,
        marketCap: '$150M',
        age: 12,
        volume: '$300K',
        makerCount: 50,
        liquidity: '$3M',
      },
    ];
  
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="py-2">Chain</th>
                <th className="py-2">Token</th>
                <th className="py-2">WOM Score (Last 1 Hour)</th>
                <th className="py-2">Market Cap</th>
                <th className="py-2">Age (Hours)</th>
                <th className="py-2">Volume (USD)</th>
                <th className="py-2">Makers Count</th>
                <th className="py-2">Liquidity (USD)</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
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