import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateCredentials } from "../hooks/useValidation";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateCredentials(username, password)) {
      navigate("/dashboard");
      localStorage.setItem("loggedin", true);
    } else {
      alert("Invalid Pass");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("loggedin") === "true") {
      navigate("/dashboard");
    }
  }, []);

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="flex flex-col h-1/2 rounded-lg p-20 bg-slate-600"
    >
      <h1 className=" text-3xl font-bold text-white text-center">Login</h1>
      <label className="text-xl text-white font-semibold mt-4">Username</label>
      <input
        type="text"
        name="username"
        required
        className="rounded-md"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <label className="text-xl text-white font-semibold mt-4">Password</label>
      <input
        type="password"
        name="password"
        className="rounded-md"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="submit"
        value="Submit"
        className="bg-white px-8 py-3 rounded-md mt-4 text-black font-semibold text-md"
      />
    </form>
  );
};

export default LoginForm;
