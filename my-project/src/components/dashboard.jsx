import React from "react";
import Navbar from "./navbar";
import SentimentTable from "./sentimentTable";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="p-6">
        <SentimentTable />
      </div>
    </div>
  );
};

export default Dashboard;
