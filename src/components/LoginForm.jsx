import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateCredentials } from "../hooks/useValidation";
import { toast } from "sonner";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setsignin] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateCredentials(username, password)) {
      setsignin(true);
      setTimeout(() => {
        navigate("/dashboard");
        localStorage.setItem("loggedin", true);
      }, 3000);
    } else {
      toast("Invalid Email/Password");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("loggedin") === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="flex flex-col justify-center px-20 rounded-lg pt-14 pb-28 bg-slate-600"
    >
      <h1 className="text-5xl font-bold text-center text-white ">Login</h1>
      <label className="mt-4 text-xl font-semibold text-white">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        required
        className="py-2 text-center rounded-md placeholder:p-4 focus:bg-purple-200 focus:outline-none"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="Enter username"
      />
      <label className="mt-4 text-xl font-semibold text-white">Password</label>
      <input
        type="password"
        name="password"
        className="py-2 text-center rounded-md placeholder:p-2 focus:bg-purple-200 focus:outline-none"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <input
        type="submit"
        value={signin ? "Signing In..." : "Sign In"}
        className="px-8 py-3 mt-4 font-semibold text-black bg-white rounded-md text-md"
      />
    </form>
  );
};

export default LoginForm;
