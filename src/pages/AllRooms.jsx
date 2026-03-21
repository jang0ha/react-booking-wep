import Reactm, { useState } from "react";
import Title from "../components/Title";
import RoomList from "../components/RoomList";
import { roomsDummyData } from "../assets/assets";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
        name=""
        id=""
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
        name=""
        id=""
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const roomTypes = ["Double Bed", "Single Bed", "Luxury Room", "Family Suite"];
  const priceRages = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  const handleRoomTypeChange = (checked, label) => {
    setSelectedRoomTypes((prev) =>
      checked ? [...prev, label] : prev.filter((v) => v !== label),
    );
  };

  const handlePriceRangeChange = (checked, label) => {
    setSelectedPriceRanges((prev) =>
      checked ? [...prev, label] : prev.filter((v) => v !== label),
    );
  };

  const filteredRooms = roomsDummyData
    .filter((room) => {
      const matchesRoomType =
        selectedRoomTypes.length === 0 ||
        selectedRoomTypes.includes(room.roomType);

      const matchesPrice =
        selectedPriceRanges.length === 0 ||
        selectedPriceRanges.some((range) => {
          const [min, max] = range.replace("$ ", "").split(" to ").map(Number);
          return room.pricePerNight >= min && room.pricePerNight <= max;
        });

      return matchesRoomType && matchesPrice;
    })
    .sort((a, b) => {
      if (selectedSort === "Price Low to High")
        return a.pricePerNight - b.pricePerNight;
      if (selectedSort === "Price High to Low")
        return b.pricePerNight - a.pricePerNight;
      if (selectedSort === "Newest First")
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      return 0;
    });

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <article>
        <Title
          title="Hotel Rooms"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
          align="left"
        />
        <ul>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <li
                key={room.id}
                className="border-b border-gray-100 last:border-0"
              >
                <RoomList room={room} />
              </li>
            ))
          ) : (
            <div className="flex items-center justify-between p-10">
              결과가 없습니다.
            </div>
          )}
        </ul>
      </article>

      {/* 필터 */}

      <div
        className={`md:sticky top-20 mb-10 bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:mt-16 ${openFilters && "border-b"}`}
      >
        <div className="flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 false">
          <p>Filters</p>
          <button
            type="button"
            className="text-xs cursor-pointer"
            onClick={() => {
              if (window.innerWidth >= 1024) {
                setSelectedRoomTypes([]);
                setSelectedPriceRanges([]);
                setSelectedSort("");
              } else {
                setOpenFilters(!openFilters);
              }
            }}
          >
            <span className="lg:hidden"> {openFilters ? "HIDE" : "SHOW"}</span>
            <span className="hidden lg:block">CLEAR</span>
          </button>
        </div>

        <div
          className={`h-0 lg:h-auto overflow-hidden transition-all duration-700 ${openFilters ? "h-auto" : "h-0 lg:h-auto"}`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox
                key={index}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onChange={handleRoomTypeChange}
              />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRages.map((range, index) => (
              <CheckBox
                key={index}
                label={`$ ${range}`}
                selected={selectedPriceRanges.includes(`$ ${range}`)}
                onChange={handlePriceRangeChange}
              />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort by</p>
            {sortOptions.map((options, index) => (
              <RadioButton
                key={index}
                label={options}
                selected={selectedSort === options}
                onChange={(_, label) => setSelectedSort(label)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllRooms;
