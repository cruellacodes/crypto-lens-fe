import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">Crypto Sentiment Dashboard</h1>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">View: Full</button>
        <button className="bg-gray-700 px-4 py-2 rounded">List: Default</button>
        <button className="bg-gray-700 px-4 py-2 rounded">Total Sentiment</button>
      </div>
    </nav>
  );
};

export default Navbar;
