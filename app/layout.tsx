import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../constants/styles/global.scss";
import "../constants/styles/common.scss";
import "bootstrap-icons/font/bootstrap-icons.css"

import ReduxProvider from "@/libs/reduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "享樂酒店",
  description: "享樂酒店訂房網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
