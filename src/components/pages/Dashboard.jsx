import React from "react";

import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="container">
        <Navbar/>
        <div className="contents"> <h1>Container</h1></div>
      </div>
    </div>
  );
};

export default Dashboard;
