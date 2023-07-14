"use client";

import { useUiContext } from "@/context/UiContext";
import { ACTION_TYPES } from "@/context/reducer";
import Link from "next/link";
import React from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const { isSidebarOpen, dispatch } = useUiContext();

  return (
    <div className="flex-align-center pt-4">
      <div className="gap-1 flex-center-between md:flex-align-center md:gap-3 w-full md:w-fit px-6 md:px-2">
        <Link
          href="/dashboard"
          className="p-2 lg:hidden flex-shrink-0 !opacity-100"
        >
          <h1 className="text-3xl font-bold text-green-600">KCB</h1>
        </Link>
        <div
          className="p-3 rounded-full bg-slate-200 hover:textslate-300 sm:cursor-pointer lg:hidden cursor-pointer order-1"
          onClick={() => dispatch({ type: ACTION_TYPES.openSidebar })}
        >
          <BiMenu className="text-lg" />
        </div>
      </div>
      <h1 className="text-4xl hidden md:block font-bold text-primary text-center w-full">
        KIIRA COLLEGE BUTIKI
      </h1>
    </div>
  );
};

export default Navbar;
