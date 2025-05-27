import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  IconChartBar,
  IconExchange,
  IconGasStation,
  IconArrowsExchange,
  IconBrain,
} from "@tabler/icons-react"; 
import { IconBellRinging } from "@tabler/icons-react";


export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Track Portfolio Across Chains",
      description:
        "Get a unified view of your assets on Solana, Ethereum, and beyond.",
      icon: <IconChartBar />,
    },
    {
      title: "AI-Powered Swap Recommendations",
      description:
        "Let ZeniBot suggest optimized trades across DEXs, with fee insights.",
      icon: <IconExchange />,
    },
    {
      title: "Real-Time Gas Insights",
      description:
        "Know when and where to execute low-fee transactions across chains.",
      icon: <IconGasStation />,
    },
    {
      title: "Cross-Chain Optimization",
      description:
        "Move assets between chains where yield or swap rates are better.",
      icon: <IconArrowsExchange />,
    },
    {
      title: "Natural Language Interface",
      description:
        "Ask ZeniBot in plain English. Get clear, actionable answers instantly.",
      icon: <IconBrain />,
    },
    {
      title: "Proactive Alerts & Recommendations",
      description:
        "ZeniBot monitors your wallet and market trends to notify you of opportunities, risks, and portfolio actions—before you even ask.",
      icon: <IconBellRinging />,
    },
    
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 py-10 max-w-4xl mx-auto">

      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 2) && "lg:border-l dark:border-neutral-800",
        index < 2 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
