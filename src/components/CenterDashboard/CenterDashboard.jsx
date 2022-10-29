import React from "react";
import Cards from "../cards/Cards";
import BasicTable from "../Table/Table";

const CenterDashboard = () => {
  return (
    <div className="CenterDashboard">
      <h1>Dashboard</h1>
      <Cards />
      <h3>Recent Orders</h3>

      <BasicTable />
    </div>
  );
};

export default CenterDashboard;
