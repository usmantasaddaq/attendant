import React from "react";
import { Route, Routes } from "react-router-dom";
import ShowDetail from "./ShowDetail";
function AuthRoote({ database }) {
  return (
    <>
      {database[0].role === "user" ? (
        <Routes>
          <Route path="/" element={<ShowDetail />} />
        </Routes>
      ) : (
        "Show admin detail"
      )}
    </>
  );
}

export default AuthRoote;
