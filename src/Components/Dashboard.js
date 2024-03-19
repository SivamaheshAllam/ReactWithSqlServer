import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getEmployees } from "../Api/ApiServices";

function Dashboard() {
  let location = useLocation();
  console.log("state", location);

  let fetchEmpData = async () => {
    await getEmployees();
  };
  useEffect(() => {
    fetchEmpData();
  });
  return <div>Dashboard</div>;
}

export default Dashboard;
