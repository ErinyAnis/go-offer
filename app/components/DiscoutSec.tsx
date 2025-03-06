import Link from "next/link";
import Container from "./Container";
import { CgMediaLive } from "react-icons/cg";
import { CiDiscount1 } from "react-icons/ci";

const DiscoutSec = () => {
  return (
    <section className="discount-sec mt-0 text-white sec-padding">
      <Container>
        <div className="rounded-4xl bg-img relative overflow-hidden">
          <div className="p-10 custom-bg tob-0 bottom-0 h-full left-0 w-full">
            <div className="z-10">
              <span className="flex items-center gap-2 text-base lg:text-xl">
                <CgMediaLive />
                Modern Home
              </span>
              <div className="mt-14">
                <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2.5">
                  The daily offer the brand “Modern Home”
                </h3>
                <p className="text-sm lg:text-base mb-10">Modern Home</p>
                <Link
                  href={"/"}
                  className="bg-amber-500 rounded-sm px-6 py-2.5 text-sm lg:text-base main-transition border-transparent border-2 hover:bg-transparent hover:border-amber-500"
                >
                  <CiDiscount1 className="inline-block mb-1" /> <span>Show code</span>
                </Link>
              </div>
            </div>
          </div>

          {/* disc num */}
          <div className="flex flex-col absolute right-8 top-8">
            <span className="font-bold text-3xl lg:text-5xl">50%</span>
            <span className="max-lg:text-sm">Discount</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DiscoutSec;
