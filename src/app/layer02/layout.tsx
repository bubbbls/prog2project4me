import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});




export default function LayoutPage02({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable}`}>
        <div className="w-full">Second Layout YEAH!</div>
        {children}
        <Link href="http://10.56.136.202:3000/">
          <button className="btn btn-secondary">2nd Page</button>
        </Link>
      </body>
    </html>
  );
}
