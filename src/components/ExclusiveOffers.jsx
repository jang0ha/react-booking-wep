import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";
import OffersCards from "./OffersCards";
const ExclusiveOffers = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full ">
        <Title
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
          align="left"
        />
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View all Offers
          <img
            src={assets.arrowIcon}
            alt=""
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((offer) => (
          <li key={offer._id} className="flex-1">
            <OffersCards offer={offer} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExclusiveOffers;
