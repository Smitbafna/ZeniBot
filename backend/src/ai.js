"use strict";
exports.__esModule = true;
var solana_agent_kit_1 = require("solana-agent-kit"); // or import createLangchainTools if using langchain
var plugin_token_1 = require("@solana-agent-kit/plugin-token");
var plugin_nft_1 = require("@solana-agent-kit/plugin-nft");
var plugin_defi_1 = require("@solana-agent-kit/plugin-defi");
var plugin_misc_1 = require("@solana-agent-kit/plugin-misc");
var plugin_blinks_1 = require("@solana-agent-kit/plugin-blinks");
var keyPair = Keypair.fromSecretKey(bs58.decode("YOUR_SECRET_KEY"));
var wallet = new solana_agent_kit_1.KeypairWallet(keyPair);
// Initialize with private key and optional RPC URL
var agent = new solana_agent_kit_1.SolanaAgentKit(wallet, "YOUR_RPC_URL", {
    OPENAI_API_KEY: "YOUR_OPENAI_API_KEY"
}) // Add the plugins you would like to uJnqkqjse
    .use(plugin_token_1["default"])
    .use(plugin_nft_1["default"])
    .use(plugin_defi_1["default"])
    .use(plugin_misc_1["default"])
    .use(plugin_blinks_1["default"]);
// Create LangChain tools
var tools = (0, solana_agent_kit_1.createVercelAITools)(agent, agent.actions);
bb;
