import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState } from "react";
import Data from "./Data";
import "./styles.css";
import Availablity from "./Availablity";
import OverallStats from "./OverallStats";
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [state, setState] = useState(false);
  const [stats, setstats] = useState(false);
  const [inputText, setInputText] = useState("");
  const [active, setActive] = useState(false);
  const [actives, setActives] = useState(false);

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
  const availableHandlr = () => {
    setState(true);
    setstats(false);
    setActive(true);
    setActives(false);
  };
  const OverallStat = () => {
    setstats(true);
    setState(false);
    setActives(true);
    setActive(false);
  };

  const drawerWidth = 280;
  //Sort by Name
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
            Date
          </td>
          <td
            style={{
              minWidth: "153px",
              justifyContent: "center",
            }}
          >
            TimeIn
          </td>
          <td
            style={{
              minWidth: "153px",
              justifyContent: "center",
            }}
          >
            TimeOut
          </td>
        </tr>
      </tbody>
    );
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <h1 style={{ paddingLeft: "30px", color: "lightblue" }}>
              Admin DashBoard
            </h1>
            <Toolbar />
            <Divider />
            <List>
              <h3 style={{ paddingLeft: "30px", color: "lightblue" }}>
                Widgets' Description
              </h3>
              <hr></hr>
              <ListItem disablePadding>
                <ListItemButton
                  style={{
                    justifyContent: "center",
                    fonSize: "25px",
                    fontWeight: "bold",
                    color: "lightblue",
                    backgroundColor: active ? "	#F0F0F0" : "white",
                  }}
                  onClick={availableHandlr}
                >
                  <ListItemIcon style={{ color: "skyblue" }}>
                    Availibility
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <hr></hr>
              <ListItem disablePadding>
                <ListItemButton
                  style={{
                    justifyContent: "center",
                    fonSize: "25px",
                    fontWeight: "bold",
                    backgroundColor: actives ? "#F0F0F0" : "white",
                  }}
                  onClick={OverallStat}
                >
                  <ListItemIcon style={{ color: "skyblue" }}>
                    Overall Stats
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <hr></hr>
              <ListItem disablePadding>
                <ListItemButton
                  style={{
                    justifyContent: "center",
                    fonSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  <ListItemIcon style={{ color: "skyblue" }}>
                    Settings
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                style={{
                  justifyContent: "center",
                  fonSize: "25px",
                  fontWeight: "bold",
                }}
              ></ListItemButton>
            </ListItem>
          </Drawer>
        </Box>
      </div>

      {state && (
        <div className="containerDashboard">
          {stats && <OverallStats />}
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
                  label="Employee`s On leave "
                  {...a11yProps(1)}
                />
                <Tab
                  style={{
                    color: " #1976d257",
                    fontSize: "larger",
                    fontFamily: " monospace",
                    fontWeight: "800",
                  }}
                  label="Available Employee`s"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
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
                  <Availablity item={item} i={i} />
                ))}
              </table>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div>
                <h1>Employee`s On Leave</h1>
                <table>
                  {getTable()}
                  {sort.map((item, i) =>
                    item.onLeave ? <Availablity item={item} i={i} /> : ""
                  )}
                </table>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div>
                <h1>Available Employee`s</h1>
                <table>
                  {getTable()}
                  {sort.map((item, i) =>
                    !item.onLeave ? <Availablity item={item} i={i} /> : ""
                  )}
                </table>
              </div>
            </TabPanel>
          </Box>
        </div>
      )}
      {stats && (
        <div className="containerDashboard">
          <OverallStats />
        </div>
      )}
    </div>
  );
}
