import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perfection",
  description: "Perfection Example for Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-pf='{"pageId": "homepage"}'>
        <Header />
        {children}
      </body>
    </html>
  );
}
