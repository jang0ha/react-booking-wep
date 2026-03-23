import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  roomsDummyData,
  facilityIcons,
  roomCommonData,
  userDummyData,
} from "../assets/assets";
import Star from "../components/Star";

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null); //선택된 방 정보
  const [mainImage, setMainImage] = useState(null); //메인이미지 정보

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room); //룸상태 업데이트
    room && setMainImage(room.images[0]); //해당 굼의 첫번째 이미지를 대표 이미지로 설정
  }, [id]);

  return (
    room && (
      <section className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* 룸 헤더*/}
        <article className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            <span>{room.hotel.name}</span>
            <span className="font-inter text-sm">{room.roomType}</span>
          </h1>
          <span className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% off
          </span>
        </article>
        {/* 룸 리뷰 */}
        <div className="flex items-center gap-1 mt-2">
          <Star rating={room.rating} />
          <span>200+ reviews</span>
        </div>
        {/* 룸 주소  */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="" srcset="" />
          <span>{room.hotel.address}</span>
        </div>
        {/* 룸 이미지 */}
        <article className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt=""
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((img, index) => (
                <button type="button" onClick={() => setMainImage(img)}>
                  <img
                    src={img}
                    alt="RoomImage`${index}`"
                    key={index}
                    className="w-full rounded-xl shadow-md object-cover cursor-pointer :lg:first:col-span2 :lg:first-row-span2"
                  />
                </button>
              ))}
          </div>
        </article>

        {/* 서비스 */}
        <article className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h2>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((amenity) => (
                <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                  <img src={facilityIcons[amenity]} alt={amenity} />
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          <span className="text-2xl font-medium">
            <span>$ {room.pricePerNight} / night</span>
          </span>
        </article>

        {/* 예약 폼 */}
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          {/* 체크인 */}
          <div className="">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
              id="checkIn"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              required
            />
          </div>
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500"></div>
          {/* 체크아웃 */}
          <div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input
              id="checkOut"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none sm:w-full"
              required
            />
          </div>
          <div
            className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4
          md:gap-10 text-gray-500"
          ></div>
          {/* 게스트 수 */}
          <div className="flex flex-col">
            <label htmlFor="guests">Guests</label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
              placeholder="0"
              required
            />
          </div>
          {/* 버튼 */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
          >
            <span>Check Availability</span>
          </button>
        </form>

        {/* 공통 사항 */}
        <article className="mt-25 space-y-4">
          {roomCommonData.map((comonData) => (
            <div className="flex items-start gap-2">
              <img src={comonData.icon} alt="" className="w-6.5" />
              <div className="">
                <strong className="text-base">{comonData.title}</strong>
                <p className="text-gray-500">{comonData.description}</p>
              </div>
            </div>
          ))}

          <p
            className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500
					"
          >
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.
          </p>
        </article>

        {/* 호스트 정보 */}

        <div className="">
          <div className="flex items-start gap-4">
            <img
              src={room.hotel.owner.image}
              alt="host"
              className="h-14 w-14 md:h-18 md:w-18 rounded-full"
            />
            <div>
              <b>Hosted by {userDummyData.username}</b>
              <div className="flex flex-wrap">
                <Star rating={room.rating} />
                <span>200+ reviews</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer"
          >
            Contact Now
          </button>
        </div>
      </section>
    )
  );
};

export default RoomDetail;
