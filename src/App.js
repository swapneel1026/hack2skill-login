import './App.css';
import LoginForm from './components/LoginForm';
import {Outlet} from 'react-router-dom'

function App() {
  
  return (
    <div className="bg-purple-500 h-screen flex items-center justify-center ">
    <Outlet/>
    </div>
  );
}

export default App;
