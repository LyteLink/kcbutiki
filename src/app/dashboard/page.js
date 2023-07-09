/* eslint-disable @next/next/no-img-element */
import Watermark from "@/components/common/Watermark";
import { links } from "@/data/links";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Watermark />
      <img
        src="/images/logo.jpg"
        alt="Logo"
        className="w-40 h-40 mx-auto my-6"
      />
      <h1 className="text-center text-3xl font-semibold">
        WELCOME TO KIIRA COLLEGE BUTIKI E-SYSTEM
      </h1>
      <div className="flex-center-center">
        <div className="mt-4 text-green-500 border-2 border-green-500 w-fit p-3 shadow-sm shadow-green-500/50">
          System Modules
        </div>
      </div>
      <div className="mt-5 flex-center-center gap-4 flex-wrap">
        {links.map(({ id, title, icon, url }) => {
          return (
            <Link
              href={url}
              key={id}
              className="flex-align-center gap-x-3 bg-white shadow-lg p-3 border rounded-lg"
            >
              {icon}
              <span>{title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
