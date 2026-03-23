import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null });
  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wifi": false,
      "Free Breakfast ": false,
      "Room Service ": false,
      "Mountain View ": false,
      "Pool Access": false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleAmenityChange = (amenity) => {
    setInputs({
      ...inputs,
      amenities: {
        ...inputs.amenities,
        [amenity]: !inputs.amenities[amenity],
      },
    });
  };
  return (
    <section>
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience."
      />

      <form action="">
        {/* 이미지 업로드 영역 */}

        <h3 className="text-gray-800 mt-10">Images</h3>
        <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
          {Object.keys(images).map((key) => (
            <label htmlFor={`roomImages${key}`} key={key}>
              <img
                className="max-h-13 cursor-pointer opacity-80"
                src={
                  images[key]
                    ? URL.createObjectURL(images[key])
                    : assets.uploadArea
                }
                alt="images"
              />
              <input
                type="file"
                accept="image/*"
                id={`roomImages${key}`}
                hidden
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
              />
            </label>
          ))}
        </div>

        <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
          {/* 룸타입 */}
          <div className="flex-1 max-w-48">
            <h3 className="text-gray-800 mt-4">Room Type</h3>
            <select
              name="roomType"
              id=""
              className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
              onChange={handleInputChange}
              value={inputs.roomType}
            >
              <option value="">Select Room Type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
          {/* 가격 */}
          <div>
            <h3 className="mt-4 text-gray-800">
              Price<span className="text-xs">/night</span>
            </h3>
            <input
              placeholder="0"
              className="border border-gray-300 mt-1 rounded p-2 w-24"
              type="number"
              name="pricePerNight"
              onChange={handleInputChange}
              value={inputs.pricePerNight}
            ></input>
          </div>
        </div>
        {/* 애머니티 */}
        <h3 className="text-gray-800 mt-4">Amenities</h3>
        <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
          {Object.keys(inputs.amenities).map((amenity) => (
            <label key={amenity} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={inputs.amenities[amenity]}
                onChange={() => handleAmenityChange(amenity)}
              />
              {amenity}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Room
        </button>
      </form>
    </section>
  );
};

export default AddRoom;
