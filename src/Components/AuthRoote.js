import React from "react";
import { Route, Routes } from "react-router-dom";
import ShowDetail from "./ShowDetail";
import Admin from './Admin'
function AuthRoote({ database }) {
  return (
    <>
      {database[0].role === "user" ? (
        <Routes>
          <Route path="/" element={<ShowDetail />} />
        </Routes>
      ) : (""
        // <Routes>
        // <Route path="/" element={<Admin/>} />
        // </Routes>
      )}
    </>
  );
}

export default AuthRoote;
