const fetch = require("node-fetch");
const dotenv = require("dotenv");
const CryptoJS = require("crypto-js");

dotenv.config({ path: '../.env' });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getHeaders(timestamp, method, requestPath, queryString = "", body = "") {
  const apiKey = process.env.OKX_API_KEY;
  const secretKey = process.env.OKX_SECRET_KEY;
  const apiPassphrase = process.env.OKX_API_PASSPHRASE;
  const projectId = process.env.OKX_PROJECT_ID;

  if (!apiKey || !secretKey || !apiPassphrase || !projectId) {
    throw new Error("Missing required environment variables");
  }

  const stringToSign = timestamp + method + requestPath + queryString + body;

  return {
    "Content-Type": "application/json",
    "OK-ACCESS-KEY": apiKey,
    "OK-ACCESS-SIGN": CryptoJS.enc.Base64.stringify(
      CryptoJS.HmacSHA256(stringToSign, secretKey)
    ),
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": apiPassphrase,
    "OK-ACCESS-PROJECT": projectId,
  };
}

async function testBalance(retries = 5, backoff = 1000) {
  const method = "POST";
  const requestPath = "/api/v5/dex/balance/token-balances-by-address";

  const bodyObj = {
    address: "0x382bb369d343125bfb2117af9c149795c6c65c50",
    tokenContractAddresses: [
      {
        chainIndex: "66",
        tokenContractAddress: ""
      }
    ]
  };

  const body = JSON.stringify(bodyObj);

  for (let attempt = 1; attempt <= retries; attempt++) {
    const timestamp = new Date().toISOString();
    const headers = getHeaders(timestamp, method, requestPath, "", body);

    try {
      const response = await fetch(`https://web3.okx.com${requestPath}`, {
        method,
        headers,
        body,
      });

      if (response.status === 429) {
        // Rate limited - wait and retry
        console.warn(`Rate limited on attempt ${attempt}, retrying after ${backoff} ms...`);
        await sleep(backoff);
        backoff *= 2; // exponential backoff
        continue;
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("Response:", JSON.stringify(data, null, 2));
      return data;  // success, return data and exit
    } catch (err) {
      if (attempt === retries) {
        throw err; // no more retries, throw error
      }
      console.warn(`Attempt ${attempt} failed: ${err.message}. Retrying in ${backoff} ms...`);
      await sleep(backoff);
      backoff *= 2;
    }
  }
}

// Example: run your function
testBalance().catch(console.error);
