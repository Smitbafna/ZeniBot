'use client';

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

function ThemeSwitch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setChecked(theme === 'dark');
  }, [theme]);

  if (!mounted) return null;

  const toggleTheme = (checked: boolean) => {
    setChecked(checked);
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={toggleTheme}
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export default ThemeSwitch;
