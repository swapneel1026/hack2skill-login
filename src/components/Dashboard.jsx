import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WeatherComponent from "./Weather";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("loggedin") === "false" ||
      localStorage.getItem("loggedin") === null
    ) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>{localStorage.getItem("loggedin") !== "false" && <WeatherComponent />}</>
  );
};

export default Dashboard;
