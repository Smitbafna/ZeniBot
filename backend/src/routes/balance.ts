import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { getHeaders } from "../utils/shared"; // your getHeaders with body fix

dotenv.config({ path: '../../.env' });

const router = express.Router();

interface TokenQuery {
  tokenContractAddress: string;
}

interface TokenContractQuery {
  chainIndex: string; // e.g., "501" for Solana
  tokenContractAddress: string;
}

async function fetchTokenBalances(
  address: string,
  tokens: TokenQuery[]
): Promise<any> {
  const timestamp = new Date().toISOString();
  const method = "POST";
  const requestPath = "/api/v5/dex/balance/token-balances";
  const queryString = ""; // no query params

  const tokenContractAddresses: TokenContractQuery[] = tokens.map((t) => ({
    chainIndex: "501", // Solana chain ID - change as needed
    tokenContractAddress: t.tokenContractAddress,
  }));

  const bodyObj = {
    address,
    tokenContractAddresses,
    excludeRiskToken: "0", // or "1"
  };

  const body = JSON.stringify(bodyObj);

  // Important: pass body string to getHeaders for signing
  const headers = getHeaders(timestamp, method, requestPath, queryString, body);

  const response = await fetch(`https://web3.okx.com${requestPath}`, {
    method,
    headers,
    body,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OKX request failed: ${response.status} - ${errorBody}`);
  }

  return await response.json();
}

router.post(
  "/get-token-balances",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { address, tokens } = req.body as {
        address: string;
        tokens: TokenQuery[];
      };

      if (!address || !Array.isArray(tokens)) {
        res.status(400).json({ error: "Invalid request payload." });
        return;
      }

      const balances = await fetchTokenBalances(address, tokens);
      res.json(balances);
    } catch (error: any) {
      console.error("Balance error:", error.message || error);
      res.status(500).json({
        error: "Failed to fetch token balances",
        details: error.message,
      });
    }
  }
);

export default router;
