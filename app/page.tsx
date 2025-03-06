import MainSliderSec from "./components/MainSliderSec";
import LandingSec from "./components/LandingSec";
import CategorySlider from "./components/CategorySlider";
import CouponsSlider from "./components/CouponsSlider";
import Brands from "./components/Brands";
import GoOffer from "./components/GoOffer";
import NationalDay from "./components/NationalDay";
import ExcOffSlider from "./components/ExcOffSlider";
import MostUsedCopSlider from "./components/MostUsedCopSlider";
import Testimonials from "./components/Testimonials";
import BlogsSlider from "./components/BlogsSlider";
import DiscoutSec from "./components/DiscoutSec";

export default function Home() {
  return (
    <>
      <LandingSec />

      {/* category */}
      <MainSliderSec mainTitle="Shop by category">
        <CategorySlider />
      </MainSliderSec>

      {/* most used coupons */}
      <MainSliderSec mainTitle="Most used coupons">
        <MostUsedCopSlider />
      </MainSliderSec>

      {/* shop by brand */}
      <Brands />

      {/* goOffer */}
      <GoOffer />

      {/* Exclusive offers */}
      <MainSliderSec mainTitle="Exclusive offers">
        <ExcOffSlider />
      </MainSliderSec>

      {/* allCoupons */}
      <MainSliderSec mainTitle="All coupons" allCoupons>
        <CouponsSlider allCoupons />
      </MainSliderSec>

      {/* National Day */}
      <NationalDay />

      {/* testimonials */}
      <Testimonials />

      <MainSliderSec mainTitle="Latest Blogs">
        <p className="-mt-2 mb-3 text-sm text-gray-600">
          Stay up to date with our latest ideas.
        </p>
        <BlogsSlider />
      </MainSliderSec>

      <DiscoutSec />
    </>
  );
}
