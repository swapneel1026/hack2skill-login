import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateCredentials } from "../hooks/useValidation";
import { toast } from "sonner";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setsignin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    <>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-col justify-center px-10 mt-10 rounded-lg bg-white/90 md:mt-2 md:px-20 pt-14 pb-28"
      >
        <h1 className="text-5xl font-bold text-center text-[#0047AB]/[80%] ">
          Login
        </h1>
        <label className="mt-4 text-xl font-semibold text-[#0047AB]/[80%]">
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          required
          className="py-2 text-center rounded-md placeholder:p-4 focus:bg-[#0047AB]/[20%] border border-gray-300 focus:outline-none"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Enter username"
        />
        <label className="mt-4 text-xl font-semibold text-[#0047AB]/[80%]">
          Password
        </label>
        <div className="inline-flex items-center gap-2 ">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="py-2 text-center rounded-md placeholder:p-2 border border-gray-300 focus:bg-[#0047AB]/[20%] focus:outline-none"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <div className={`${password === "" ? " hidden" : "block"} `}>
            {showPassword ? (
              <EyeIcon
                className="w-5 h-5"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeSlashIcon
                className="w-5 h-5"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>

        <input
          type="submit"
          value={signin ? "Signing In..." : "Sign In"}
          className="px-8 py-3 mt-4 font-semibold text-white bg-[#0047AB]/[80%] rounded-md cursor-pointer text-md"
        />
        <input
          type="button"
          value={"Guest Login"}
          className="px-8 py-3 mt-4 font-semibold text-white rounded-md cursor-pointer bg-[#0047AB] text-md"
          onClick={() => navigate("/guestlogin")}
        />
      </form>
    </>
  );
};

export default LoginForm;
