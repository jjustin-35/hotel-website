import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../constants/styles/global.scss";
import "../constants/styles/common.scss";
import "../style/all.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import AuthWrapper from "@/libs/authWrapper";
import ReduxProvider from "@/libs/reduxProvider";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] });

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
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>
          <AuthWrapper>
            {children}
            <Footer />
          </AuthWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
