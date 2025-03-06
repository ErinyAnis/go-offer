"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BlogCard from "./BlogCard";
import { blogs } from "../data/blogs";

const BlogsSlider = () => {
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
    <div className="slider-container mt-10">
      <Slider {...settings}>
        {blogs.map((blog, index) => {
          return <BlogCard key={index} {...blog} />;
        })}
      </Slider>
    </div>
  );
};

export default BlogsSlider;
