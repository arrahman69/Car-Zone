import React from "react";

const Service = () => {
  return (
    <div className="our-service lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
      <div className="our-service-content mb-20 text-center text-white">
        <p className="uppercase text-large tracking-[6px] bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
          - Our Premium Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 bricolage-font">
          Experience Timeless Luxury
        </h2>
      </div>

      <div className="our-service-wrapper grid w-full gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {/* Card 1 */}
        <div className="relative group rounded-2xl p-10 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#333] hover:border-pink-500 transition-all duration-500 shadow-lg hover:shadow-pink-500 overflow-hidden">
          <h5 className="text-3xl font-bold mb-4 text-white bricolage-font group-hover:text-pink-600 transition">
            Luxury Car Rentals
          </h5>
          <p className="text-gray-400 text-lg leading-relaxed">
            Rent iconic cars like Ferrari, Lamborghini, or Rolls-Royce for your
            events, business, or lifestyle.
          </p>
          <span className="absolute bottom-5 right-6 text-6xl font-extrabold text-[#fa8703]/15">
            01
          </span>
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-pink-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></div>
        </div>

        {/* Card 2 */}
        <div className="relative group rounded-2xl p-10 bg-[#1b1b1b] backdrop-blur-md border border-[#444] hover:border-pink-500 transition duration-500 shadow-lg hover:shadow-pink-500">
          <h5 className="text-3xl font-bold mb-4 text-white bricolage-font group-hover:text-pink-600 transition">
            Car Maintenance & Care
          </h5>
          <p className="text-gray-400 text-lg leading-relaxed">
            Professional servicing, detailing, performance check.
          </p>
          <span className="absolute bottom-5 right-6 text-6xl font-extrabold text-[#fa8703]/15">
            02
          </span>
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-pink-500 blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-[#fa8703]/10 blur-2xl"></div>
        </div>

        {/* Card 3 */}
        <div className="relative group rounded-2xl p-10 bg-[#1a1a1a] border-2 border-transparent hover:border-pink-500 transition-all duration-700 overflow-hidden">
          <h5 className="text-3xl font-bold mb-4 text-white bricolage-font group-hover:text-pink-600 transition">
            Authentic Car Resale
          </h5>
          <p className="text-gray-400 text-lg leading-relaxed">
            Buy & sell luxury cars with guaranteed authenticity and premium
            valuation.
          </p>
          <span className="absolute bottom-5 right-6 text-6xl font-extrabold text-[#fa8703]/15">
            03
          </span>
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-pink-500 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
