import React from "react";
import UserAttendance from "./UserAttendance";
import Admin from "./Admin";
function AuthRoote({ storage }) {
  console.log(storage.role, "dataget");

  const usrData = () => {
    if (storage.role === "user") {
      return <UserAttendance />;
    } else if (storage.role === "admin") {
      return <Admin />;
    }
  };

  return <>{usrData()}</>;
}

export default AuthRoote;
