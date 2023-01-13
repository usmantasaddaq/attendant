import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./styles.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Availablity from "./Availablity";
import Data from "./Data";
import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Setting() {
  const [value, setValue] = React.useState(0);
  const [inputText, setInputText] = useState("");
  const [edit, setEdit] = useState(false);

  const editHandler = () => {
    setEdit(true);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const sort = filteredData.sort((a, b) => (a.name > b.name ? 1 : -1));
  const getTable = () => {
    return (
      <tbody>
        <tr>
          <td
            style={{
              minWidth: "153px",
              justifyContent: "center",
            }}
          >
            Name
          </td>
          <td
            style={{
              minWidth: "153px",
              justifyContent: "center",
            }}
          >
            Date of Joining
          </td>
          <td
            style={{
              minWidth: "153px",
              justifyContent: "center",
            }}
          >
            Edit
          </td>
          <td
            style={{
              minWidth: "153px",
              justifyContent: "center",
            }}
          >
            Delete
          </td>
        </tr>
      </tbody>
    );
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{
              color: " #1976d257",
              fontSize: "larger",
              fontFamily: " monospace",
              fontWeight: "800",
              paddingRight: "20px",
            }}
            label="List of Employee`s"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              color: " #1976d257",
              fontSize: "larger",
              fontFamily: " monospace",
              fontWeight: "800",
              paddingRight: "20px",
            }}
            label="Employee Form "
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      {edit ? (
        <Form />
      ) : (
        <TabPanel value={value} index={0}>
          <div
            className="SearchBoxStyle"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <h1>List of Employee`s</h1>
            </div>
            <div style={{ paddingLeft: "75px" }}>
              <TextField
                style={{ height: "22px" }}
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
          </div>

          <table>
            {getTable()}
            {sort.map((item, i) => (
              <tr key={i}>
                <td
                  style={{
                    minWidth: "153px",
                    justifyContent: "center",
                  }}
                >
                  {item.name}
                </td>
                <td
                  style={{
                    minWidth: "153px",
                    justifyContent: "center",
                  }}
                >
                  {item.date}
                </td>
                <td
                  style={{
                    minWidth: "153px",
                    justifyContent: "center",
                  }}
                >
                  <Button onClick={editHandler}>
                    <EditIcon />
                  </Button>
                </td>
                <td
                  style={{
                    minWidth: "153px",
                    justifyContent: "center",
                  }}
                >
                  <Button>
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </table>
        </TabPanel>
      )}

      <TabPanel value={value} index={1}>
        <Form />
      </TabPanel>
    </Box>
  );
}

export default Setting;
