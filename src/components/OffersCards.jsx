import React from "react";
import { assets } from "../assets/assets";
import { useNavigate, Link } from "react-router-dom";
const OffersCards = ({ offer }) => {
  const navigate = useNavigate();
  return (
    <div
      key={offer._id}
      className="relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${offer.image})` }}
    >
      <span className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
        <span>{offer.priceOff}</span>% OFF
      </span>
      <h3 className="text-2xl font-medium font-playfair">{offer.title}</h3>
      <p className="">{offer.description}</p>
      <p className="text-xs text-white/70 mt-3">{offer.expiryDate}</p>
      <button
        className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5"
        onClick={() => {
          (navigate(`/offers/${offer._id}`), scrollTo(0, 0));
        }}
      >
        View Offers
        <img src={assets.arrowIcon} alt="" className="invert" />
      </button>
    </div>
  );
};

export default OffersCards;
