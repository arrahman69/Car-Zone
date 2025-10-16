{
  /* Watch Testimonials */
}
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WatchTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "MD Amdad Islam",
      role: "Super car  User",
      img: "https://avatars.githubusercontent.com/u/195456266?v=4",
      review:
        "Best budget smartwatch I have ever bought. GPS and calling features make it feel premium.",
      rating: 5,
    },
    {
      id: 2,
      name: "Zahidul Islam Mahim",
      role: "luxury user",
      img: "https://avatars.githubusercontent.com/u/92626624?v=4",
      review:
        "Best budget smartwatch I have ever bought. GPS and calling features make it feel premium.",
      rating: 5,
    },
    {
      id: 3,
      name: "LITAN MOLLA",
      role: "Car Lover",
      img: "https://avatars.githubusercontent.com/u/185999515?v=4",
      review:
        "Best budget smartwatch I have ever bought. GPS and calling features make it feel premium.",
      rating: 4,
    },
    {
      id: 4,
      name: "Md  ᴀʙᴅᴜʀ ʀᴀʜᴍᴀɴ",
      role: "Daily User",
      img: "https://avatars.githubusercontent.com/u/220227887?v=4",
      review:
        "Best budget smartwatch I have ever bought. GPS and calling features make it feel premium.",
      rating: 5,
    },
    {
      id: 5,
      name: "Shihad Hasan",
      role: "Traveler",
      img: "https://avatars.githubusercontent.com/u/174646838?v=4",
      review:
        "Best budget smartwatch I have ever bought. GPS and calling features make it feel premium.",
      rating: 4,
    },
  ];

  return (
    <div className="watch-testimonials lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
      {/* Title */}
      <div className="text-center mb-20 text-white">
        <p className="uppercase tracking-[5px] text-large bg-gradient-to-r from-purple-500 to-red-600 bg-clip-text text-transparent transition mb-2">
          - Cars Reviews
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 bricolage-font">
          What Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent transition bricolage-font">
            Customers Say
          </span>
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="rounded-[30px] bg-gradient-to-br from-[#1e1f22] to-[#121212] text-left p-8 shadow-md flex flex-col justify-between h-full border border-gray-700 hover:border-pink-400 transition">
              {/* Quote + Stars */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent transition mr-4 fa-solid fa-quote-left"></span>
                <div className="flex space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-pink-400 to-red-700 bg-clip-text text-transparent transitiontext-xl fa-solid fa-star"
                    ></span>
                  ))}
                </div>
              </div>

              {/* Review */}
              <div className="text-white text-lg mb-6 bricolage-font leading-relaxed">
                {t.review}
              </div>

              {/* User */}
              <div className="flex items-center mt-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-pink-700"
                />
                <div>
                  <p className="bricolage-font text-xl bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent transition">
                    {t.name}
                  </p>
                  <p className="text-[#999] text-sm bricolage-font">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WatchTestimonials;
