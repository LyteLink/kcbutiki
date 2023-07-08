import Navbar from "@/components/home/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
