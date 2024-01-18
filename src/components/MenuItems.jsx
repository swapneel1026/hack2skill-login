import React, { useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";

const MenuItems = ({ username, name, city }) => {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);

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
          className={`absolute mt-2 text-black bg-white right-[2%] transition-opacity duration-500 ease-in ${
            showLogoutMenu ? "opacity-100 visible " : "opacity-0 invisible"
          }  `}
        >
          <li className="border-b px-4 pb-2 border-gray-300">
            <button>Username:{username}</button>
          </li>
          <li className="border-b px-4 pb-2 border-gray-300">Name:{name}</li>
          <li className="border-b px-4 pb-2 border-gray-300">City:{city}</li>
        </ul>
      }
    </div>
  );
};

export default MenuItems;
