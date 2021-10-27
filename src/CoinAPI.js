import React, { useState, useEffect } from "react";
import logo from './assets/img/phone_two.png';
import './App.css';
const axios = require("axios");

function CoinAPI() {
    const [coinbaseBtcResponse, setCoinbaseBtcResponse] = useState();
    const [coinbaseEthResponse, setCoinbaseEthResponse] = useState();
    
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
                $ {coinbaseBtcResponse?.data?.data?.amount} {coinbaseBtcResponse?.data?.data?.currency}	
                </div>
                
                <div class="x">
                {/* {coinbaseEthResponse?.data?.data?.base} */}
                <svg class="block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <b> Ethereum </b>
                $ {coinbaseEthResponse?.data?.data?.amount} {coinbaseEthResponse?.data?.data?.currency}
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