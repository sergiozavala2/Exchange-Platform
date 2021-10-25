import React, { useState, useEffect } from "react";
import logo from "./assets/img/hero_iphone.png";
import "./App.css";
const axios = require("axios");

function CoinAPI() {
  const [coinApiBtcResponse, setCoinApiBtcResponse] = useState();
  const [coinApiEthResponse, setCoinApiEthResponse] = useState();
  const [coinbaseBtcResponse, setCoinbaseBtcResponse] = useState();
  const [coinbaseEthResponse, setCoinbaseEthResponse] = useState();

  useEffect(() => {
    //BTC from CoinAPI
    axios
      .get("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
        headers: {
          Authorization: `F45B9A2B-A2B8-48D8-95FE-9943A80B19BF`,
        },
      })
      .then(function (response) {
        // handle success
        setCoinApiBtcResponse(response);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }, []);

  useEffect(() => {
    // ETH from Coin API
    axios
      .get("https://rest.coinapi.io/v1/exchangerate/ETH/USD", {
        headers: {
          Authorization: `F45B9A2B-A2B8-48D8-95FE-9943A80B19BF`,
        },
      })
      .then(function (response) {
        // handle success
        setCoinApiEthResponse(response);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // BTC from Coinbase
    axios
      .get("https://api.coinbase.com/v2/prices/BTC-USD/buy", {})
      .then(function (response) {
        // handle success
        setCoinbaseBtcResponse(response);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // ETH from Coinbase
    axios
      .get("https://api.coinbase.com/v2/prices/ETH-USD/buy", {})
      .then(function (response) {
        // handle success
        setCoinbaseEthResponse(response);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
console.log({coinbaseBtcResponse})
  return (
    <div class="container w-container">
      <div class="cointainer w-container">
        <div class="columns w-row">
          <div class="column-8 w-col w-col-6">
            <h1 class="display-heading-3"> CoinMarket</h1>
            <p class="paragrah-large">
              Should you buy or sell from CoinMarketCap{" "}
            </p>
            <p class="paragrah-large">BTC values from Coinbase API</p>
            <div class="paragrah-large">
              {coinbaseBtcResponse?.data?.data?.amount}
            </div>
            <div class="paragrah-large">
              {coinbaseBtcResponse?.data?.data?.currency}
            </div>
            <div class="paragrah-large">
              {coinbaseBtcResponse?.data?.data?.base}
            </div>
            <p class="paragrah-large">ETH values from Coinbase API</p>
            <div class="paragrah-large">
              {coinbaseEthResponse?.data?.data?.amount}
            </div>
            <div class="paragrah-large">
              {coinbaseEthResponse?.data?.data?.currency}
            </div>
            <div class="paragrah-large">
              {coinbaseEthResponse?.data?.data?.base}
            </div>
          </div>

          <div className="column w-col w-col-6">
            {/* <header className="App-header-Eth-Logo"> */}
            <img src={logo} className="App-logo" alt="logo" />
            {/* </header> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinAPI;