import React from "react";

import classic from "../../assets/classic.png";
import supe from "../../assets/supe.png";
import sports from "../../assets/sports.png";

import luxury from "../../assets/luxury.png";

const WatchCategoris = () => {
  return (
    <div className="watch-categories lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
      <div className="watch-categories-content text-center mb-10 lg:mb-14">
        <p className="uppercase text-sm tracking-[5px] mb-2 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent transition">
          - Cars Categories
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white bricolage-font">
          Explore Exclusive Car Collections
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { title: "Luxury Car", count: "40+ Models", img: luxury },
          { title: "Sports Car", count: "70+ Models", img: sports },
          { title: "Classic Car", count: "100+ Models", img: classic },
          { title: "Super Car", count: "60+ Models", img: supe },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e1e23] to-[#2a2a32] p-6 cursor-pointer transform transition duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_0_25px_rgba(250,135,3,0.6)]"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-56 mb-6">
              <img
                src={item.img}
                alt={item.title}
                className="object-contain w-[80%] h-[80%] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-2"
              />
            </div>
            {/* Text */}
            <div className="text-center">
              <h4 className="text-white text-2xl font-semibold bricolage-font mb-1 group-hover:text-pink-600 transition-colors duration-500">
                {item.title}
              </h4>
              <span className="text-gray-400 text-sm tracking-wide">
                {item.count}
              </span>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-pink-600  transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchCategoris;
