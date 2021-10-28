import React, { useState, useEffect } from "react";
import './App.css';
const axios = require("axios");


function Difference() {
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
        <div className="price-difference">
            <div className="k">
                <h2 class="heading-buy">{`Buy Bitcoin from: ${coinbaseBtcResponse?.data?.data?.amount > coinApiBtcResponse?.data?.rate ? 'CoinAPI' : 'Coinbase' }`}</h2>
                <h2 class="heading-buy">{`Buy Ethereum from: ${coinbaseEthResponse?.data?.data?.amount > coinApiEthResponse?.data?.rate ? 'CoinAPI' : 'Coinbase' }`}</h2>
                <h2 class="heading-sell">{`Sell Bitcoin from: ${coinbaseBtcResponse?.data?.data?.amount < coinApiBtcResponse?.data?.rate ? 'CoinAPI' : 'Coinbase' }`}</h2>
                <h2 class="heading-sell-two">{`Sell Ethereum from: ${coinbaseEthResponse?.data?.data?.amount < coinApiEthResponse?.data?.rate ? 'CoinAPI' : 'Coinbase' }`}</h2>
            </div>   
        </div>   
    );

}

export default Difference;