import React from "react";
import NavigationMenuDemo from './Navbar';
import './app.css';
import ThemeSwitch from "@/components/ui/switch";
import  PhantomWalletConnect  from "@/components/ui/WalletProvider";
export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="navbar-container">
     
        <div className="project-name">ZeniBot</div>
        <div className="menu-wrapper">
          <NavigationMenuDemo />
        </div>
        <div>
        <ThemeSwitch />
        </div>
        <div className="wallet-button-container">
  <PhantomWalletConnect />
</div>

      </div>
      {/* Render the page content below the navbar */}
      <div className="page-content">
        {children}
      </div>
    </>
  );
}

