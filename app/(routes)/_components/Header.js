import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, MenuSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header({ toggleSideBar }) {
  const { user } = useUser();
  return (
    <div className="p-5 flex justify-between md:justify-end shadow-sm bg-white items-center">
      <Menu
        className="md:hidden h-7 w-7
         text-slate-500 cursor-pointer"
        onClick={() => toggleSideBar()}
      />
      {!user ? (
        <Link href="/sign-up">
          <button
            className="bg-blue-400 rounded-md p-2 px-3 text-white
       hover:bg-blue-600 shadow-sm"
          >
            Get Started
          </button>
        </Link>
      ) : (
        <UserButton />
      )}
    </div>
  );
}

export default Header;
