'use client'
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { UserDetailContext } from "./_context/userDetailContext";
import { useState } from "react";
const inter = Outfit({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [userDetail, setUserDetail] = useState();
  return (
    <ClerkProvider>
 
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </UserDetailContext.Provider>
     
    </ClerkProvider>
  );
}
