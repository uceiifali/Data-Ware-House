import React from "react";
// data
import { testimonialsData } from "../data";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
//swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

//required  module
import { Pagination } from "swiper";
const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        //dest
        const { delay, image, message, name, web } = slide;
        //slide
        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
          >
            {/* avatar */}
            <img src={image} alt="Avatar" />
            {/* text */}
            <div>
              <div className="text-lg text-primary front-bold ">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <div className="max-w-[340px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
