import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <div className="hero w-[100%] h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidsPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        speed={1500}
        className="hero-swiper w-full h-full"
      >
        <SwiperSlide>
          <div className="hero-slide hero-slide1 w-full h-full flex items-center px-[12%]">
            <div className="hero-content text-white lg:w-[60%]">
              <span className="bricolage-font text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-gradient-to-r from-pink-500 to-purple-500 transition-all  px-2 py-1 rounded-sm">
                - Luxury Car
              </span>
              <h1 className="bricolage-font text-3xl sm:text-5xl md:text-6xl xl:text-7xl xll:text-8xl font-medium hero-title my-3">
                Feel the Elegance, Wear the Time
              </h1>
              <p className="my-2 text-lg lg:text-2xl bricolage-font hero-subtitle text-gray-300">
                You can own any of our Premium & Luxury Cars.
              </p>
              <p className="my-5 xl:my-7 lg:w-[60%] hero-pera text-gray-300">
                Car Zone makes luxury vehicles accessible, stylish, and
                powerful. Choose from a wide range of models to match your
                lifestyle and personality.
              </p>
              <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                <button className="default-btn bg-gradient-to-r from-pink-500 to-red-500 transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transform hover:-translate-y-1 cursor-pointer">
                  View More <i className="bi bi-arrow-up-right"></i>
                </button>
                <Link to="/Cars">
                  <button className="default-btn border  py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transition-all hover:bg-pink-600 hover:border-transparent transform hover:-translate-y-1 cursor-pointer">
                    Shop Now <i className="bi bi-arrow-up-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide hero-slide2 w-full h-full flex items-center px-[12%]">
            <div className="hero-content text-white lg:w-[60%]">
              <span className="bricolage-font text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-gradient-to-r from-pink-500 to-purple-500  px-2 py-1 rounded-sm">
                - Sports car
              </span>
              <h1 className="bricolage-font text-3xl sm:text-5xl md:text-6xl xl:text-7xl xll:text-8xl font-medium hero-title my-3">
                Define Your Style, Anytime, Anywhere
              </h1>
              <p className="my-2 text-lg lg:text-2xl bricolage-font hero-subtitle text-gray-300">
                You can explore any of our Sports Cars.
              </p>
              <p className="my-5 xl:my-7 lg:w-[60%] hero-pera text-gray-300">
                Experience premium vehicles with elegance, performance, and
                durability—perfect for daily drives, business trips, or special
                occasions.
              </p>
              <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                <button className="default-btn bg-gradient-to-r from-pink-500 to-red-500 transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transform hover:-translate-y-1 cursor-pointer">
                  View More <i className="bi bi-arrow-up-right"></i>
                </button>
                <Link to="/Cars">
                  <button className="default-btn border  py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transition-all hover:bg-pink-600 hover:border-transparent transform hover:-translate-y-1 cursor-pointer">
                    Shop Now <i className="bi bi-arrow-up-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide hero-slide3 w-full h-full flex items-center px-[12%]">
            <div className="hero-content text-white lg:w-[60%]">
              <span className="bricolage-font text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-gradient-to-r from-pink-500 to-purple-500 transition-all  px-2 py-1 rounded-sm">
                - Super Car
              </span>
              <h1 className="bricolage-font text-3xl sm:text-5xl md:text-6xl xl:text-7xl xll:text-8xl font-medium hero-title my-3">
                Elegance on Time, Wherever You Go
              </h1>
              <p className="my-2 text-lg lg:text-2xl bricolage-font hero-subtitle text-gray-300">
                You can own any of our Super Cars.
              </p>
              <p className="my-5 xl:my-7 lg:w-[60%] hero-pera text-gray-300">
                Drive elite supercars with style, power, and unmatched
                engineering—ideal for your daily journey, professional meetings,
                or special moments.
              </p>
              <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                <button className="default-btn bg-gradient-to-r from-pink-500 to-red-500 transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transform hover:-translate-y-1 cursor-pointer">
                  View More <i className="bi bi-arrow-up-right"></i>
                </button>
                <Link to="/Cars">
                  <button className="default-btn border  py-3 px-5 lg:px-7 lg:py-5 bricolage-font rounded-full transition-all hover:bg-pink-600 hover:border-transparent transform hover:-translate-y-1 cursor-pointer">
                    Shop Now <i className="bi bi-arrow-up-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
