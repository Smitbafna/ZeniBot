'use client';
import React, { useMemo, useEffect, useState } from "react";
import {
  WalletProvider,
  ConnectionProvider,
  useWallet
} from "@solana/wallet-adapter-react";

import {
  WalletModalProvider,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";

import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";



const WalletUI = () => {
  const { publicKey, connected } = useWallet();
  const [shortAddress, setShortAddress] = useState("");

  useEffect(() => {
    if (connected && publicKey) {
      const shortened = `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`;
      setShortAddress(shortened);
    } else {
      setShortAddress("");
    }
  }, [connected, publicKey]);

  return (
    <div className="p-4">
      
      <WalletMultiButton />
     
    </div>
  );
};

const PhantomWalletConnect = () => {
  const endpoint = "https://api.mainnet-beta.solana.com";
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletUI />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default PhantomWalletConnect;

