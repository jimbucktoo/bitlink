import React from "react";
import "../styles/App.css";
import clickIcon from "../assets/svgs/click-icon.svg";

function TableItem(props) {
  const data = props.state.data;
  if (data.length !== 0) {
    return data.map((bitlink) => {
      return (
        <div
          key={bitlink.info.created_at}
          className="uiTableItem list-group-item list-group-item-action"
        >
          <div className="wrap underline title mb-1">
            {bitlink.info.title !== null
              ? bitlink.info.title
              : bitlink.results.long_url}
          </div>
          <small>
            <a
              className="wrap underline long-url"
              href={bitlink.results.long_url}
            >
              {bitlink.results.long_url}
            </a>
          </small>
          <div className="wrap d-flex w-100 justify-content-between">
            <a className="bitlink" href={bitlink.results.link}>
              {bitlink.results.link}
            </a>
            <div className="clicks">
              <small>{bitlink.clicks}</small>
              <img className="click-icon" src={clickIcon} alt="Clicks" />
            </div>
          </div>
        </div>
      );
    });
  } else {
    return <div></div>;
  }
}

export default TableItem;
