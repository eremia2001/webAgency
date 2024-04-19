import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RifatIT Web Development | Professionelles Webdesign in Halle (Saale)",
  description: "In Halle (Saale) und darüber hinaus bekannt, bietet RifatIT Web Development erstklassige Webseiten, die Ihre Marke stärken und Ihren Umsatz steigern. Beginnen Sie heute Ihre Reise zu einer besseren Website mit uns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
