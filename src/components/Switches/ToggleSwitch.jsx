import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ToggleSwitch = ({ theme, setTheme }) => (
  <form className="flex items-center ">
    <div className="flex items-center">
      <SunIcon
        className="text-white text-[15px] leading-none pr-[15px]"
        htmlFor="theme"
        height={20}
      >
        Light
      </SunIcon>
      <Switch.Root
        className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-black/70   data-[state=checked]:bg-black outline-none cursor-default"
        id="theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Switch.Thumb
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
        />
      </Switch.Root>
      <MoonIcon
        className="text-white text-[15px] leading-none pl-[15px]"
        htmlFor="theme"
        height={20}
      >
        Dark
      </MoonIcon>
    </div>
  </form>
);

export default ToggleSwitch;
