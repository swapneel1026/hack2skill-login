import React, { useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { useUser } from "../hooks/useUser";

const MenuItems = () => {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  let currentUser = localStorage.getItem("username");
  const { username, city, name } = useUser(currentUser);
  return (
    <div
      role="button"
      onClick={(e) => {
        e.stopPropagation();
        setShowLogoutMenu(!showLogoutMenu);
      }}
    >
      <Avatar.Root className="bg-black inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <Avatar.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src=""
          alt="Colm Tuite"
        />
        <Avatar.Fallback
          className="text-violet11 uppercase leading-1 flex h-full w-full items-center justify-center bg-white text-[29px] font-medium"
          delayMs={600}
        >
          {username?.slice(0, 1)}
        </Avatar.Fallback>
      </Avatar.Root>
      {
        <ul
          className={`absolute mt-6 text-black bg-white right-[2%] transition-opacity duration-500 rounded-md shadow-xl ease-in ${
            showLogoutMenu ? "opacity-100 visible " : "opacity-0 invisible"
          }  `}
        >
          <li className="px-4 py-2 border-b border-gray-300">
            <button>
              <span className="font-bold">Username: </span>
              {username}
            </button>
          </li>
          <li className="px-4 py-2 border-b border-gray-300">
            <span className="font-bold">Name: </span>
            {name}
          </li>
          <li className="px-4 py-2 border-b border-gray-300">
            <span className="font-bold">City: </span>
            {city}
          </li>
        </ul>
      }
    </div>
  );
};

export default MenuItems;
