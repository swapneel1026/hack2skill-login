import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster} from 'sonner';
import { useState } from "react";
import ThemeContext from "./context/themContext";


function App() {
  const [theme,setTheme]=useState('light')
  return (
    <>
    <ThemeContext.Provider value={theme}>
      <Toaster dir="auto"  position="top-right" theme={theme}/>
         <div className={`flex items-center justify-center h-screen ${theme==="light"?" bg-[#0047AB]/[80%]":"bg-black"} transition-colors duration-500 `}>
      <Navbar setTheme={setTheme} theme={theme}/>
      <Outlet />
    </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
