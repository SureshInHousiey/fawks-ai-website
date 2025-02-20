import { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { ThemeProvider } from "./components/theme-provider";

const DynamicHeader = dynamic(() => import("./components/Header"), { ssr: true });
const DynamicFooter = dynamic(() => import("./components/Footer"), { ssr: true });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: 'FawksAI: Turning Conversations into Growth',
  description: 'Empower your business with AI-driven conversations that drive engagement, sales, and customer satisfaction.'
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="bg-white dark:bg-[#0B162C] text-[#0B162C] dark:text-white transition-colors duration-300">
            <DynamicHeader />
            {children}
            <DynamicFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}