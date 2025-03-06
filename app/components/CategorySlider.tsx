"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { categories } from "../data/cartegories";
import CategoryCard from "./CategoryCard";

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {categories.map((category, index) => {
          return <CategoryCard key={index} {...category} />;
        })}
      </Slider>
    </div>
  );
};

export default CategorySlider;
