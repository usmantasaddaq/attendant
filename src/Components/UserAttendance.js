import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import moment from "moment/moment";
import Data from "./Data";

function UserAttendance() {
  const [modl, ShowModl] = useState(false); 
  const [disable, setDisable] = useState(false);
  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [inputText, setInputText] = useState("");
  const [showTimeIN, setshowTimeIN] = useState("");
  const [showTimeOut, setshowTimeOut] = useState("");

  const ShowModelHandler = () => {
    ShowModl(true);
  };

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = Data.people.filter((el) => {
    //if no input the return the original
    if (inputText === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(inputText);
    }
  });
  const disableHandler = () => {
    setDisable(true);
  };

  const TimeInHandlr = () => {
    let current_time = moment().format(" h:mm A");
    console.log(current_time, "current_time");
    setshowTimeIN(current_time);
    setDisable1(true);
  };
  const TimeOutHandlr = () => {
    let current_time = moment().format(" h:mm A");
    setshowTimeOut(current_time);
    setDisable2(true);
  };
  return (
    <div className="app">
      <div className="login-form">
        <div>
          <Stack direction="row" spacing={2}>
            {!modl && (
              <>
                <Avatar alt="Remy Sharp" src="pic.jpg" />
                <p
                  align="center"
                  style={{
                    position: "absolute",
                    marginTop: "-19px",
                    paddingLeft: "45px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "skyblue",
                  }}
                >
                  {" "}
                  {showTimeIN}
                </p>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  onClick={TimeInHandlr}
                  disabled={disable1}
                >
                  TimeIN
                </Button>
                <p
                  align="center"
                  style={{
                    position: "absolute",
                    paddingLeft: "150px",
                    marginTop: "-19px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "skyblue",
                  }}
                >
                  {" "}
                  {showTimeOut}
                </p>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  onClick={TimeOutHandlr}
                  disabled={disable2}
                >
                  TimeOut
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={disableHandler}
                  disabled={disable}
                >
                  Apply Leave
                </Button>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  onClick={ShowModelHandler}
                >
                  Model
                </Button>
              </>
            )}

            {modl && (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "120%",
                  }}
                >
                  <div className="SearchBoxStyle">
                    <TextField
                      label="Search.."
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton>
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onChange={inputHandler}
                    />
                  </div>
                  <div>
                    <h1>Table Data</h1>
                    <table>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>Date</td>
                          <td>TimeIn</td>
                          <td>TimeOut</td>
                        </tr>
                        {filteredData.map((item, i) => (
                          <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.timeIn}</td>
                            <td>{item.timeOut}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default UserAttendance;
