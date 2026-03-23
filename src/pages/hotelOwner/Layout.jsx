import React from "react";
import NavBar from "../../components/HotelOwner/Navbar";
import SideBar from "../../components/HotelOwner/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <section className="flex flex-col h-screen">
      <NavBar></NavBar>
      <div className="flex h-full">
        <SideBar />
        <div className="flex-1 p-4 pt-10 md:px-10 h-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
