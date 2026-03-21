import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const RoomList = ({ room }) => {
  const Star = ({ filled }) => (
    <svg
      className="w-4 h-4 text-yellow-400"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"
      />
    </svg>
  );
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col md:flex-row items-start py-10 gap-6  cursor-pointer"
      onClick={() => {
        (navigate(`/rooms/${room._id}`), scrollTo(0, 0));
      }}
    >
      <img
        src={room.images[0]}
        alt="hotel-img"
        title="View RoomDetails"
        className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover"
      />
      <div className="md:w-1/2 flex flex-col gap-2">
        <p className="text-gray-500">{room.hotel.city}</p>
        <p className="text-gray-800 text-3xl font-playfair cursor-pointer">
          {room.hotel.name}
        </p>
        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star key={index} filled={room.rating > index} />
            ))}
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
    </div>
  );
};

export default RoomList;
