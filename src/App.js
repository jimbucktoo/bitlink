import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import LinkInput from "./components/LinkInput";
import Table from "./components/Table";
import bgImage from "./assets/svgs/background-image.png";
import bitly from "./assets/svgs/bitly.svg";
import _ from "lodash";
import "dotenv";

function App() {
  const initialState = { data: [], longUrl: "initial" };
  const [state, setState] = useState(initialState);

  var obj = {};

  async function shortenLink(url, obj) {
    var results = await fetch("https://api-ssl.bitly.com/v4/shorten", {
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
    obj.results = results;
    retrieveData(results.link.replace(/(^\w+:|^)\/\//, ""), obj);
  }

  async function retrieveData(url, obj) {
    var headers = {
      Authorization: "Bearer " + process.env.REACT_APP_DEV_BEARER_TOKEN,
    };
    var fetchUrl = "https://api-ssl.bitly.com/v4/bitlinks/" + url;
    var info = await fetch(fetchUrl, { headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        return jsonResponse;
      });
    obj.info = info;
    getClicks(url, obj);
  }

  async function getClicks(url, obj) {
    var headers = {
      Authorization: "Bearer " + process.env.REACT_APP_DEV_BEARER_TOKEN,
    };
    var fetchUrl = "https://api-ssl.bitly.com/v4/bitlinks/" + url + "/clicks";
    var clicks = await fetch(fetchUrl, { headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        return jsonResponse.link_clicks.length;
      });
    obj.clicks = clicks;
    setState({ data: [...state.data, obj] });
  }

  const link = _.debounce((longUrl) => {
    shortenLink(state.longUrl, obj);
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
          <img className="bitly-logo" alt="logo" src={bitly} />
          <h1 className="maintitle">
            <b>SHORTEN. SHARE. MEASURE.</b>
          </h1>
          <h6 className="subtitle">
            Bitly helps businesses shine by transforming their links into
            powerful tools for marketers and customer support teams.
          </h6>
          <h6 className="subtitle">
            Join Bitly, the world's leading link management platform.
          </h6>
          <LinkInput onInputLinkSubmit={link} state={state} />
          <Table state={state} />
        </div>
      </div>
    </div>
  );
}
export default App;
