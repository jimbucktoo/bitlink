import React from "react";
import "../styles/App.css";

function LinkInput(props) {
  function HandleSubmit(event) {
    props.onInputLinkSubmit(props.state.longUrl);
  }

  function OnInputChange(longUrl) {
    props.state.longUrl = longUrl;
  }

  return (
    <div className="uiLinkInput LinkInput">
      <div className="uiInput input-group input-group-lg">
        <input
          type="text"
          className="ellipsis uiInputBox form-control form-group"
          placeholder="Paste a link to shorten it"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          onChange={(event) => OnInputChange(event.target.value)}
        ></input>
        <div className="input-group-append">
          <button
            className="btn uiButton"
            onClick={HandleSubmit}
            type="submit"
            id="inputGroupFileAddon04"
          >
            SHORTEN
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkInput;
