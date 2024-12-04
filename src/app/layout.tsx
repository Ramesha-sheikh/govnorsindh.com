import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"
import { Roboto } from "next/font/google"


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Governor Initiative",
  description: "Governor Initiative for artificial Intelligence, Web 3.0 and Metaverse",
  icons:{
    icon:{url:"/logo.png",type:"image/png"}
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
      <Header/>
        <div>
        {children}
        </div>
       
        <Footer/>
      </body>
    </html>
  );
}
