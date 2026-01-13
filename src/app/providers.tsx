"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { readonly children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
    >
      {children}
    </ThemeProvider>
  );
}
