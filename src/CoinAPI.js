import React, { useState, useEffect } from "react";
import logo from './assets/img/phone_two.png';
import './App.css';
const axios = require("axios");

function CoinAPI() {
  const [coinApiBtcResponse, setCoinApiBtcResponse] = useState();
  const [coinApiEthResponse, setCoinApiEthResponse] = useState();
  const fixValue = coinApiBtcResponse?.data?.rate;
  console.log(fixValue);

  useEffect(() => {
    //BTC from CoinAPI
    axios
      .get("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
        headers: {
          Authorization: `65E045C1-5D07-4853-9A7D-E3BE9EADC6EC`,
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
          Authorization: `65E045C1-5D07-4853-9A7D-E3BE9EADC6EC`,
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
  console.log(coinApiBtcResponse?.data?.rate)
  // console.log(typeof coinApiBtcResponse?.data?.rate)
    return (
        
        <div class="v">
            <h2 class="h3">CoinAPI Exchange</h2>
            <p class="h4">The number below is the current price of <br />Bitcoin(BTC) and Ethereum(ETH) in Coinbase.</p> 
            <div class="paragraph-two">            
                <div class="w">
                <svg class="block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {/* {coinbaseBtcResponse?.data?.data?.base} */}
                <b> Bitcoin </b>      
                $ {parseFloat(coinApiBtcResponse?.data?.rate).toFixed(2)} {coinApiBtcResponse?.data?.asset_id_quote}
                </div>
                
                <div class="x">
                {/* {coinbaseEthResponse?.data?.data?.base} */}
                <svg class="block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <b> Ethereum </b>
                $ {parseFloat(coinApiEthResponse?.data?.rate).toFixed(2)} {coinApiEthResponse?.data?.asset_id_quote}
                </div>
            </div>
            <div className="y">
                <header className="App-header-Phone-Logo"> 
                <img src={logo} className="App-logo" alt="logo" />
                </header>  
            </div>
        </div>
    );
}

export default CoinAPI;