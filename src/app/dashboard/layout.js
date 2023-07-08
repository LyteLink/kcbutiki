import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-16-auto">
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <main class="min-h-screen px-4 pt-10 pb-6 lg:px-6">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
