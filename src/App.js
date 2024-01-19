import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster} from 'sonner';


function App() {
  return (
    <>
      <Toaster dir="auto"  position="top-right" theme="system"/>
    <div className="flex items-center justify-center h-screen bg-[#0047AB]/[80%] ">
      <Navbar />
      <Outlet />
    </div>
    </>
  );
}

export default App;
