import React from "react";
import TableItem from "./TableItem";
import "../styles/App.css";

function Table(props) {
  return (
    <div className="uiTable Table">
      <div className="table-list list-group">
        <TableItem state={props.state} />
      </div>
    </div>
  );
}

export default Table;
