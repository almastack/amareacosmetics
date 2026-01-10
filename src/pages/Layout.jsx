import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-neutral-50 font-serif">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
