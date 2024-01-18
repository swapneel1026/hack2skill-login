import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("loggedin") === "false" ||
      localStorage.getItem("loggedin") === null
    ) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <button onClick={() => localStorage.setItem("loggedin", false)}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
