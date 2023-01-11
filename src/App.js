import "./App.css";
import Login from "./Components/LogIn";
import { Routes, Route } from "react-router-dom";
import ShowDetail from "./Components/ShowDetail";
import Admin from './Components/Admin';
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} />  */}
        <Route path="/" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
