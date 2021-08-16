import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import LinkInput from "./components/LinkInput";
import bgImage from "./assets/svgs/background-image.png";
import bitly from "./assets/svgs/bitly.svg";
import _ from "lodash";
import "dotenv";

function App() {
  const initialState = { data: [], longUrl: "initial" };
  const [state, setState] = useState(initialState);

  async function shortenLink(url) {
    var info = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_DEV_BEARER_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: url,
        domain: "bit.ly",
        group_guid: "Bj42igiZkUg",
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        return jsonResponse;
      });
    setState({ data: [...state.data, info] });
  }

  const link = _.debounce((longUrl) => {
    shortenLink(state.longUrl);
  }, 300);

  console.log(state);

  return (
    <div className="App">
      <div className="background">
        <div
          className="background-image"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        >
          <Navbar />
          <img className="bitly-logo" alt="logo" src={bitly} />{" "}
          <h1 className="maintitle">
            <b> SHORTEN.SHARE.MEASURE. </b>{" "}
          </h1>{" "}
          <h6 className="subtitle">
            Bitly helps businesses shine by transforming their links into
            powerful tools for marketers and customer support teams.{" "}
          </h6>{" "}
          <h6 className="subtitle">
            Join Bitly, the world 's leading link management platform.{" "}
          </h6>{" "}
          <LinkInput onInputLinkSubmit={link} state={state} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default App;
