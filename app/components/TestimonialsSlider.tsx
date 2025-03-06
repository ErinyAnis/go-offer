"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container w-full">
      <Slider
        {...settings}
        className="w-full mx-auto overflow-visible"
      >
        <TestimonialCard />

        <TestimonialCard />
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
