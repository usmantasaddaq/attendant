import React from "react";

function Aailable({ item, i }) {
  return (
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
        {item.timeIn}
      </td>
      <td
        style={{
          minWidth: "153px",
          justifyContent: "center",
        }}
      >
        {item.timeOut}
      </td>
    </tr>
  );
}

export default Aailable;
