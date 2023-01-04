"use client"

import { GlobalStyles } from "@/assets/style/global"
import { MainContextProvider } from "@/context/MenuContext";
import StyledComponentsRegistry from '@/assets/style/registery';
import { Inter } from '@next/font/google'
import Header from "@/components/Header";

const inter = Inter({
  subsets: ['latin'],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContextProvider>
      <html lang="en">
        <GlobalStyles />
        <Header />
        <body className={inter.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </MainContextProvider>

  );
}