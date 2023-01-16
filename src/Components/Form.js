import React from "react";
import TextField from "@mui/material/TextField";
import "./styles.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
function Form({setEdit}) {
  const SubmitHandler = () => {
    setEdit(false);
    if (TextField === "") {
      alert("your field is empty");
    } else {
      alert("your form is Sumit successfully");
    }
  };
  return (
    <>
      <h1>Employee`s Form:</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="FirstName" />
        <TextField id="outlined-basic" label="LastName" />
        <TextField id="outlined-basic" label="Email" type="email" />
        <TextField id="outlined-basic" label="Role" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ paddingRight: "17px" }}>
            <InputLabel id="demo-customized-select-label">
              Department
            </InputLabel>

            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Admin Department</MenuItem>
              <MenuItem value={20}>Accounts Department</MenuItem>
              <MenuItem value={30}>Sales Department</MenuItem>
            </Select>
          </div>
          <div style={{ paddingRight: "17px" }}>
            {" "}
            <InputLabel id="demo-customized-select-label">
              Minimum Working Hours
            </InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>8 Hours</MenuItem>
              <MenuItem value={20}>9 Hours</MenuItem>
              <MenuItem value={30}>10 Hours</MenuItem>
            </Select>
          </div>
          <div
            style={{
              paddingRight: "17px",
              paddingTop: "22px",
              cursor: "pointer",
            }}
          >
            <TextField
              id="outlined-basic"
              type="time"
              label="StartTime"
              style={{ width: "225px" }}
            ></TextField>{" "}
          </div>
          <div
            style={{
              paddingRight: "17px",
              paddingTop: "22px",
              cursor: "pointer",
            }}
          >
            <TextField
              id="outlined-basic"
              type="time"
              label="EndTime"
              style={{ width: "225px" }}
            ></TextField>{" "}
          </div>
        </div>
        <div className="button-container">
          <input type="submit" onClick={SubmitHandler} />
        </div>
      </Box>
    </>
  );
}

export default Form;
