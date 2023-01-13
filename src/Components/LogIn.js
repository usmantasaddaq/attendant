import React, { useState } from "react";
import AuthRoote from "./AuthRoote";
import "./styles.css";
import LogIn from "./LogIn";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [storage, setStorage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [iserror, setIsError] = useState(false);
  const [admin, setAdmin] = useState(false);
  const AdminlogInHandler = () => {
    setAdmin(true);
  };


  // User Login info
  const database = [
    {
      userid: "user1",
      pincode: "pass1",
      IsFlogIn: true,
      role: "user",
    },
    {
      userid: "user2",
      pincode: "pass2",
      IsFlogIn: false,
      role: "admin",
    },
  ];

  const errors = {
    uname: "invalid userid",
    pass: "invalid pincode",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.userid === uname.value);

    setStorage(userData);
    // Compare user info
    if (userData) {
      if (userData.pincode !== pass.value) {
        // Invalid pincode
        setErrorMessages({ name: "pass", message: errors.pass });
        setIsError(true);
      } else {
        setIsSubmitted(true);
      }
    } else {
      // userid not found
      setErrorMessages({ name: "uname", message: errors.uname });
      setIsError(true);
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="app">
      <div className="login-form">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label style={{ fontWeight: "bold", fontSize: "18px" }}>
                Employee ID
              </label>
              <input
                type="text"
                name="uname"
                required
                style={{ height: "2.75em" }}
              />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label style={{ fontWeight: "bold", fontSize: "18px" }}>
                PIN Code
              </label>
              <input
                type="password"
                name="pass"
                required
                style={{ height: "2.75em" }}
              />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" style={{ height: "2.75em", width: "7em" }} />
            </div>
            {iserror && (
              <>
                <p style={{ color: "red" }}>
                  You Enter Invalid Employeeid/Pincode:
                  <a href="#" onClick={AdminlogInHandler}>
                    http://Admin/logIn
                  </a>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!admin && (
        <>{isSubmitted ? <AuthRoote storage={storage} /> : renderForm}</>
      )}
      {admin && <LogIn />}
    </>
  );
}

export default App;
