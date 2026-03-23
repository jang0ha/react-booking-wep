import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Star from "../components/Star";
const RoomList = ({ room }) => {
  return (
    <Link
      to={"/rooms/" + room._id}
      className="flex flex-col md:flex-row items-start py-10 gap-6  
			cursor-pointer"
      onClick={() => scrollTo(0, 0)}
    >
      <img
        src={room.images[0]}
        alt="hotel-img"
        title="View RoomDetails"
        className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover"
      />
      <div className="md:w-2/2 flex flex-col gap-2">
        <p className="text-gray-500">{room.hotel.city}</p>
        <p className="text-gray-800 text-3xl font-playfair cursor-pointer">
          {room.hotel.name}
        </p>
        <div className="flex items-center">
          <Star rating={room.rating} />
          <p className="ml-2">200+ review</p>
        </div>
        <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
          <img src={assets.locationIcon} alt="locaion-icon" />
          <span>{room.hotel.address}</span>
        </div>
        <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
          {room.amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
            >
              {amenity}
            </div>
          ))}
        </div>
        <div class="text-xl font-medium text-gray-700">
          <span>$</span>
          {room.pricePerNight} /night
        </div>
      </div>
    </Link>
  );
};

export default RoomList;
