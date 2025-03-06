"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MainCard from "./MainCard";
import { coupons } from "../data/coupons";

interface IProps {
  allCoupons?: boolean;
}

const MostUsedCopSlider = ({ allCoupons }: IProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.1,
        },
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
    <div className={`slider-container ${allCoupons ? "allCoupons" : " "}`}>
      <Slider {...settings}>
        {coupons.map((category, index) => {
          return <MainCard key={index} {...category} />;
        })}
      </Slider>
    </div>
  );
};

export default MostUsedCopSlider;
