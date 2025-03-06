"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { brands } from "../data/brands";
import BrandCard from "./BrandCard";
import Link from "next/link";

const BrandsSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1.5,
      //   },
      // },
    ],
  };

  return (
    <div className="slider-container brand">
      <Slider {...settings}>
        {brands.map((brand, index) => {
          return <BrandCard key={index} {...brand} />;
        })}
      </Slider>
      <div className="text-center mt-10">
        <Link href={"/"} className="main-color main-transition  underline decoration-violet-300 hover:decoration-violet-600">See All</Link>
      </div>
    </div>
  );
};

export default BrandsSlider;
