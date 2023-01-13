import "./App.css";
import Login from "./Components/LogIn";
import { Routes, Route } from "react-router-dom";
import UserAttendance from "./Components/UserAttendance";
import Admin from './Components/Admin';
import AuthRoot from "react-auth-simple";
import AuthRoote from "./Components/AuthRoote";
function App() {
  return (
    <>
      <Routes>

        <Route  path="/" element={<Login />} /> 
       {/* <AuthRoot exact path="/logIn"  element={<AuthRoote/>}/>  */}
        {/* <Route path="/" element={<Admin />} /> */}
      </Routes>
    </>
  );
}

export default App;
