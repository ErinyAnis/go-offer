import Link from "next/link";
import Container from "./Container";
import NationalDaySlider from "./NationalDaySlider";

const NationalDay = () => {
  return (
    <section className="national-day sec-padding mt-12 text-white">
      <Container>
        <div>
          <h2 className="font-semibold text-lg lg:text-2xl text-center">
            Exclusive Offers and Coupons for the 94th National Day
          </h2>
          <div className="mt-8 lg:mt-16 mb-5">
            <h3 className="font-bold text-base lg:text-xl">
              Offers and Coupons
            </h3>
          </div>
          <NationalDaySlider />
          <div className="mt-5 text-center">
            <Link href={"/"} className="underline decoration-green-300/30 hover:decoration-white main-transition">See all</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NationalDay;
