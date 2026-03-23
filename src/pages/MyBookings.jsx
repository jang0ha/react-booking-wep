import React, { useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";
const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <section className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle=" Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        align="left"
      />

      <table className="w-full mt-20">
        <thead className="w-full">
          <tr className="hidden lg:grid lg:grid-cols-[3fr_2fr_1fr] w-full border-b lg:border-gray-300 font-medium text-base py-3">
            <th className="">Hotels</th>
            <th className="">Date & Timings</th>
            <th className="">Payment</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr
              key={booking._id}
              className="border-b border-gray-300 grid lg:grid-cols-[3fr_2fr_1fr] w-full"
            >
              {/* 호텔 */}
              <td className="px-2 py-4 flex lg:flex-row flex-col">
                <img
                  src={booking.room.images[0]}
                  alt="hotel-img"
                  className="min-md:w-44 rounded shadow object-cover"
                />
                <div className="lg:pl-4">
                  <p>{booking.hotel.name}</p>
                  <span className="font-inter text-sm">
                    {booking.room.roomType}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <img src={assets.locationIcon} alt="locationo-icon" />
                    <span>{booking.hotel.address}</span>
                  </div>
                </div>
              </td>
              {/* 날짜 */}
              <td className="px-2 py-4">
                <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
                  <div>Check-in</div>
                  <div className="text-gray-500 text-sm">
                    {new Date(booking.checkInDate).toDateString()}
                  </div>
                </div>
                <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
                  <div>Check-out</div>
                  <div className="text-gray-500 text-sm">
                    {new Date(booking.checkOutDate).toDateString()}
                  </div>
                </div>
              </td>
              {/* 결제상태 */}
              <td className="px-2 py-4 text-center lg:border-0 border-t border-gray-300">
                <div className="flex col itmes-start justify-center lg:pt-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}
                    ></div>
                    <p
                      className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}
                    >
                      {booking.isPaid ? "Paid" : "UnPaid"}
                    </p>
                  </div>
                </div>
                {!booking.isPaid && (
                  <button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer mx-auto">
                    Pay Now
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyBookings;
