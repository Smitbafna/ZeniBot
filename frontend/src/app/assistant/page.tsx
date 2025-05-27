"use client";
import { useState } from "react";
import App from "../src/app";
import "./page.css";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the momentum on SOL and ETH?",
    "Any buy/sell signals for my tokens?",
    "Should I stake or LP my idle SOL?",
    "How to rebalance my portfolio?",
    "Any risky tokens in my portfolio?",
    "What's the current gas fee trend?",
    "Good time to move assets cross-chain?",
    "Swap opportunities to maximize profits?",
  ];

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = input.toLowerCase();

    let reply = "";

    if (query.includes("momentum") || query.includes("sol") || query.includes("eth")) {
      reply =
        "According to recent data, SOL shows a bullish MACD crossover with RSI at 58 — moderate upward momentum. ETH has an RSI near 72, signaling possible overbought conditions. SOL's DEX pool volume increased 12% in 24h, supporting the trend.";
    } else if (query.includes("buy") || query.includes("sell") || query.includes("signal")) {
      reply =
        "USDC has a bearish MACD crossover with RSI below 40 — consider selling or tightening stop-loss. SRM shows bullish MACD crossover and RSI above 50 — a buy opportunity. Adjust positions accordingly.";
    } else if (query.includes("stake") || query.includes("lp") || query.includes("idle sol")) {
      reply =
        "Your SOL is 80% idle. The SOL-USDC LP pool APR is 15% (up by 2%). Gas fees on Solana are low (~0.0005 SOL). Staking or providing liquidity now optimizes yields.";
    } else if (query.includes("rebalance") || query.includes("portfolio")) {
      reply =
        "70% of your portfolio is volatile with RSI above 65. Consider diversifying 20% into stablecoins like USDT or USDC. Shift 10% to tokens with rising MACD such as RAY and SRM for better returns.";
    } else if (query.includes("risky") || query.includes("liquidity") || query.includes("token xyz")) {
      reply =
        "Token XYZ has low liquidity (<$50k volume) and narrowing Bollinger Bands — high volatility expected. Token ABC has stable liquidity and RSI around 50, indicating stability.";
    } else if (query.includes("gas fee") || query.includes("gas prices")) {
      reply =
        "Ethereum gas fees average 35 gwei (down 15%), good time for swaps. Solana fees remain very low at ~0.0005 SOL per tx, ideal for frequent transactions.";
    } else if (query.includes("cross-chain") || query.includes("bridge") || query.includes("move assets")) {
      reply =
        "Bridging USDC from Ethereum to Solana saves ~0.8% in swap fees. Solana stablecoin LPs offer 3% higher APR currently. Bridging now optimizes yield and fees.";
    } else if (query.includes("swap") || query.includes("profit")) {
      reply =
        "Swapping USDT to USDC via OKX DEX yields 1.5% better rates after gas. MACD and RSI support entering a position now. Execute swap during low gas fee windows for max profit.";
    }

    setResponse(reply);
  };

  // Simple helper: if response contains code, wrap with <pre><code>
  const isCodeResponse = response.includes("function") || response.includes("()") || response.includes("{");

  return (
    <App>
      <div className="zenibot-input-section">
        <h2 className="zenibot-input-heading">Ask ZeniBot Anything</h2>

        {response && (
          <div className="zenibot-response">
            <h3>ZeniBot says:</h3>
            {isCodeResponse ? (
              <pre className="zenibot-code-block">
                <code>{response}</code>
              </pre>
            ) : (
              <p className="zenibot-text-response">{response}</p>
            )}
          </div>
        )}

        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </App>
  );
}
