import React from "react";
import { assets, cities } from "../assets/assets";
const HotelReg = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70 px-4">
      <form className="flex rounded-xl overflow-hidden bg-white">
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 rounded-xl hidden md:block"
        />
        <div className="relative bg-white p-5 w-full">
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />
          <p className="text-2xl font-semibold mt-6">Register Your hotel</p>

          {/* 호텔이름 */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel name
            </label>
            <input
              type="text"
              name=""
              id="name"
              required
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            />
          </div>
          {/* 전화번호 */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Phone
            </label>
            <input
              type="tel"
              name=""
              id="contact"
              required
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            />
          </div>
          {/* 주소 */}
          <div className="w-full mt-4">
            <label htmlFor="adress" className="font-medium text-gray-500">
              adress
            </label>
            <input
              type="tel"
              name=""
              id="adress"
              required
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            />
          </div>

          {/* 도시 드롭다운 */}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-500"></label>
            <select
              name=""
              id="city"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 transigion-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
