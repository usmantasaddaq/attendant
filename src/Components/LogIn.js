import React, { useState } from "react";
import AuthRoote from "./AuthRoote";
import "./styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [iserror, setIsError] = useState(false);
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
      IsFlogIn: true,
      role: "Admin",
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
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label style={{ fontWeight: "bold", fontSize: "18px" }}>
            Employee ID
          </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label style={{ fontWeight: "bold", fontSize: "18px" }}>
            PIN Code{" "}
          </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        {iserror && (
          <>
            <p style={{ color: "red" }}>
              You Enter Invalid Employeeid/Pincode:
              <a href="#">http://Admin/logIn</a>
            </p>
          </>
        )}
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? (
          <div>
            <AuthRoote database={database} />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default App;
