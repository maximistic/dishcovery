import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "lenis/react";

import { ThemeProvider } from "./context/theme-provider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "DishCovery",
  description: "Created by Sri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en" suppressHydrationWarning>
        <body className={`antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ReactLenis>
  );
}
