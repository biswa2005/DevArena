import { ThemeProvider } from "../components/theme-provider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import './globals.css';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}