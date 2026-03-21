import React from "react";
import Navbar from "./components/Navbar";
import { useLocation, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import Footer from "./components/Footer";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
      {!isOwnerPath && <Navbar />}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<AllRooms />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
