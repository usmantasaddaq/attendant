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
import { useState } from "react";

import "./styles.css";

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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const availableHandlr = () => {
    setState(true);
  };
  const drawerWidth = 280;
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
              Admin DashBoard{" "}
            </h1>
            <Toolbar />
            <Divider />
            <List>
              <h3 style={{ paddingLeft: "30px", color: "lightblue" }}>
                Widgets' Description
              </h3>{" "}
              <hr></hr>
              <ListItem disablePadding>
                <ListItemButton
                  style={{
                    justifyContent: "center",
                    fonSize: "25px",
                    fontWeight: "bold",
                    color: "lightblue",
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
                  }}
                >
                  <ListItemIcon style={{ color: "skyblue" }}>
                    Overall Stats
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>{" "}
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
                  }}
                  label="Available Employee List"
                  {...a11yProps(0)}
                />
                <Tab
                  style={{
                    color: " #1976d257",
                    fontSize: "larger",
                    fontFamily: " monospace",
                    fontWeight: "800",
                  }}
                  label="On leave "
                  {...a11yProps(1)}
                />
                <Tab
                  style={{
                    color: " #1976d257",
                    fontSize: "larger",
                    fontFamily: " monospace",
                    fontWeight: "800",
                  }}
                  label="Globle Search"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              item1
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </div>
      )}
    </div>
  );
}
