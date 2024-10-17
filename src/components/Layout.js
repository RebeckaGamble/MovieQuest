import React from "react";
import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen h-auto">
      <Navbar />
      <main className="flex-1 bg-[#0d253f]/85 pt-[60px]">
        <div className="max-w-[90rem] mx-auto w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
