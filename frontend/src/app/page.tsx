import App from "./src/app";
import "./page.css"; // adjust path if needed
import  {AnimatedPinDemo}  from "@/components/ui/AnimatedDemo";
import FeaturesSectionDemo from '@/components/features-section-demo-2';
import HeroSectionOne from '@/components/hero-section-demo-1'
export default function HomePage() {
  return (
    <App>
      <HeroSectionOne/>
     
      <main className="hero-section">
  <h1 className="hero-title">Key Features</h1>
  <p className="hero-subtitle">
    Discover what makes ZeniBot your ultimate AI-powered DeFi wallet assistant — from smart swaps to portfolio tracking across chains.
  </p>
</main>
<div className="demo-shift-up">
        <AnimatedPinDemo />
      </div>
      <div className="demo-shift-up2">
        <FeaturesSectionDemo />
      </div>
      
    </App>
  );
}
