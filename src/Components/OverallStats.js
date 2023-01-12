import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState } from "react";
import Data from "./Data";
function Availablity() {
  const [inputText, setInputText] = useState("");

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

  //Sort by Name
  const sort = filteredData.sort((a, b) => (a.name > b.name ? 1 : -1));

  const tabledata = () => {
    return (
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
          {" "}
          T.W.Hours
        </td>
        <td
          style={{
            minWidth: "153px",
            justifyContent: "center",
          }}
        >
          {" "}
          Avg.W.Hours
        </td>
        <td
          style={{
            minWidth: "153px",
            justifyContent: "center",
          }}
        >
          A.W.Hours
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div
        className="SearchBoxStyle"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div>
          <h1>Available Employee`s</h1>
        </div>
        <div style={{ paddingLeft: "75px" }}>
          {" "}
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
      <div>
        <table>
          {tabledata()}
          {sort.map((item, i) => (
            <>
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
                  {item.totalH}
                </td>
                <td
                  style={{
                    minWidth: "153px",
                    justifyContent: "center",
                  }}
                >
                  {item.averageH}
                </td>
                <td
                  style={{
                    minWidth: "153px",
                    justifyContent: "center",
                  }}
                >
                  {item.availableH}
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Availablity;
