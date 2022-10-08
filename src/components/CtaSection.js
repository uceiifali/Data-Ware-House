import React from "react";
// data
import { ctaData } from "../data";
//icons
import { BsArrowRight } from "react-icons/bs";
const CtaSection = () => {
  //dest
  const { btnText1, btnText2, subtitle, title } = ctaData;
  return (
    <section className="my-[75px] xl:my-[150px] border-t-2" date-aos="fade-up">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <div className="py-12 xl:py-24 text-center xl:text-left">
            <h2 className="h2 mb-5" date-aos="fade-up" data-aos-delay="300">
              {title}
            </h2>
            <p className="lead" date-aos="fade-up">
              {subtitle}
            </p>
          </div>
          {/* buttons */}
          <div className="flex flex-col xl:flex-row gap-y-4 gap-x-[30px]">
            <button
              className="btn btn-secondary"
              date-aos="fade-up"
              data-aos-delay="300"
            >
              {btnText1}
            </button>
            <button
              className="btn btn-quaternary flex items-center gap-x-[20px] group"
              date-aos="fade-up"
              data-aos-delay="400"
            >
              {btnText2}
              <BsArrowRight className="text-2xl text-accent-primary transition group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
