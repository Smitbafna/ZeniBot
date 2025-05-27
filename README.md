#  ZeniBot — AI-Powered Wallet Assistant

**ZeniBot** is an intelligent companion designed to help users manage their **Solana-based DeFi portfolios**. It delivers personalized insights, swap recommendations, risk alerts, and cross-chain suggestions — all optimized for **speed, usability, and privacy**.

> ⚡ Built using the OKX DEX API + OpenAI + Solana RPC for the **OKX x Solana Accelerate Hackathon**.

---

##  MVP Vision

A smart assistant that:
- Analyzes your Solana wallet
- Recommends optimized actions
- Sends proactive alerts
- Helps maximize yield and minimize risk  
All while keeping your experience seamless and private.

---

## Key Features

-  **Track Portfolio Across Chains**  
  Get a unified view of assets on Solana, Ethereum, and beyond.

- **AI-Powered Trade Recommendations**  
  Smart suggestions based on MACD, RSI, liquidity, and fee conditions.

-  **Gas & Fee Insights**  
  Know when and where to transact for minimal fees.

-  **Cross-Chain Optimization**  
  Bridge assets to better yield environments when needed.

-  **Natural Language Interface**  
  Ask questions like _"Should I stake my SOL?"_ and get intelligent answers.

-  **Proactive Risk Alerts**  
  ZeniBot monitors your wallet and markets to warn you about volatility or idle assets.

---

## 🛠️ Tech Stack

| Layer              | Tech Used                                |
|--------------------|-------------------------------------------|
| Frontend           | Next.js + Tailwind CSS                    |
| Wallet Integration | Solana Wallet Adapter (e.g., Phantom)     |
| Backend            | Fastify / Node.js                         |
| AI Logic           | OpenAI API + Custom Portfolio Engine      |
| Blockchain Data    | OKX DEX API + Solana RPC endpoints        |
| Deployment         | Vercel (CI/CD and serverless hosting)     |

---

## How ZeniBot Makes Decisions

###  Technical Indicators
- **MACD**: Detects momentum shifts (buy/sell signals).
- **RSI**: Identifies overbought (>70) or oversold (<30) assets.
- **SMA/EMA**: Crossover analysis to catch trends.
- **Bollinger Bands**: Measures volatility extremes.
- **Volume**: Confirms or weakens signal strength.

### On-Chain Metrics (via OKX API)
- **Liquidity Depth**: Low-liquidity tokens flagged as risky.
- **Daily Active Wallets**: Adoption signal.
- **Trading Volume**: Bullish momentum or bearish exit signal.
- **Bridge Activity**: Detects shifting yield opportunities across chains.

---

##  Example Suggestions

> _“MACD crossover detected on SOL with RSI at 42 — moderate momentum building.”_  
> _“High DEX volume and bullish moving average crossover on RAY — consider entering with stop-loss.”_  
> _“Your SOL allocation is 80% idle. Consider staking or deploying to LPs with rising APR.”_  
> _“Token XYZ has low liquidity and narrowing Bollinger Bands — price breakout or high risk expected.”_

---
## Architecture Overview

 
![Uploading Screenshot from 2025-05-27 20-41-38.png…]()


## Demo Screens

ZeniBot 
![Screenshot from 2025-05-27 20-43-42](https://github.com/user-attachments/assets/6c461479-5fd8-4e50-8085-e776565bac85)

ZeniBot Chat Response

---![Screenshot from 2025-05-27 20-56-30](https://github.com/user-attachments/assets/f59c2c67-ee0f-4dec-8a96-aa1140f33492)


## Running Locally

```bash
git clone https://github.com/Smitbafna/ZeniBot.git
cd frontend
npm install
npm run dev

