import React from "react";
import Navbar from "./components/Navbar";
import { useLocation, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import Footer from "./components/Footer";
import RoomDetail from "./pages/RoomDetail";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<AllRooms />}></Route>
          <Route path="/rooms/:id" element={<RoomDetail />}></Route>
          <Route path="/my-bookings" element={<MyBookings />}></Route>
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
