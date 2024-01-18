import React from "react";
import { useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const navigate = useNavigate();
  let loggedin = localStorage.getItem("loggedin");

  return (
    <nav className="absolute top-0 left-0 flex items-center justify-between w-full gap-2 px-2 py-4 bg-black/40">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_65EDxELFlXkdai2jVSD_9UOt1Ewo6CpFUMKgeXR7yQ&s"
        alt="logo"
        height={40}
        width={40}
      />
      <section className="flex gap-10">
        {loggedin === "true" || null ? (
          <button
            className="px-4 py-2 bg-white border rounded-xl"
            onClick={() => {
              localStorage.setItem("loggedin", false);
              localStorage.removeItem("username");
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-white border rounded-xl"
            onClick={() => {
              document.getElementById("username").focus();
            }}
          >
            Login
          </button>
        )}

        <button>theme</button>
        {loggedin === "true" && <MenuItems />}
      </section>
    </nav>
  );
};

export default Navbar;
