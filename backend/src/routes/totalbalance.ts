import fetch from "node-fetch";
import dotenv from "dotenv";
import CryptoJS from "crypto-js";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, '../../.env') });


function getHeaders(timestamp: string, method: string, requestPath: string, queryString = "") {
  const apiKey = process.env.OKX_API_KEY!;
  const secretKey = process.env.OKX_SECRET_KEY!;
  const apiPassphrase = process.env.OKX_API_PASSPHRASE!;
  const projectId = process.env.OKX_PROJECT_ID!;
  
  
  if (!apiKey || !secretKey || !apiPassphrase || !projectId) {
    throw new Error("Missing required environment variables");
  }

  const stringToSign = timestamp + method + requestPath + queryString;

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

async function getTotalValue(address: string, chains = "", assetType = "0", excludeRiskToken = true) {
  const method = "GET";
  const requestPath = "/api/v5/dex/balance/total-value";

  const queryParams = new URLSearchParams({
    accountId: address, // Use the address as accountId
    ...(chains && { chains }),
    assetType,
    excludeRiskToken: excludeRiskToken.toString(),
  }).toString();
  

  const timestamp = new Date().toISOString();
  const headers = getHeaders(timestamp, method, requestPath, `?${queryParams}`);

  const url = `https://web3.okx.com${requestPath}?${queryParams}`;
  const response = await fetch(url, { method, headers });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  console.log("Total Value Response:", JSON.stringify(data, null, 2));
  return data;
}

// Example usage
const solanaAddress = process.env.SOLANA_WALLET_ADDRESS;

if (!solanaAddress) {
  console.error("Missing SOLANA_ACCOUNT_ADDRESS in environment variables.");
  process.exit(1);
}

console.log("Using Solana address:", solanaAddress);


getTotalValue(solanaAddress).catch(console.error);

