// src/routes/quote.ts
import express from "express";
import { getHeaders } from "./src/utils/shared";

const router = express.Router();

async function getQuote(params: any) {
  const timestamp = new Date().toISOString();
  const requestPath = "/api/v5/dex/aggregator/quote";
  const queryString = "?" + new URLSearchParams(params).toString();

  const headers = getHeaders(timestamp, "GET", requestPath, queryString);

  const response = await fetch(`https://www.okx.com${requestPath}${queryString}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`OKX request failed: ${response.statusText}`);
  }

  return await response.json();
}

router.get("/quote", async (req, res) => {
  try {
    const params = {
      chainId: "501",
      amount: "10000000000",
      fromTokenAddress: "So11111111111111111111111111111111111111112",
      toTokenAddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      slippage: "0.1",
    };

    const quote = await getQuote(params);
    res.json(quote);
  } catch (error: any) {
    console.error("Failed to get quote:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
