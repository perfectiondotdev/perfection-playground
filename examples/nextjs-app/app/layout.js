import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perfection",
  description: "Perfection Example for Next.js - App router",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

//Turn caching off when on preview
const dynamicType = process.env.NEXT_PUBLIC_PERFECTION_PREVIEW == "true" ? "force-dynamic" : "auto";
export const dynamic = dynamicType;
export const revalidate = 10;

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" dir="ltr">
      <body className={inter.className} data-pf='{"pageId": "homepage", "providerId":"generic-provider","entryId": "homepage"}'>
        <Header />
        {children}
      </body>
    </html>
  );
}
