import Image from "next/image";
import Container from "./Container";
import { MdOutlineSearch } from "react-icons/md";
import MainButton from "./ui/MainButton";

const LandingSec = () => {
  return (
    <div className="sec-padding">
      <Container className="">
        <div className="bg-red-800 min-h-[50vh] rounded-xl pt-14 p-8 lg:p-14 relative">
          <div className="mx-auto text-center">
            <div className="text-center mx-auto flex flex-col gap-y-5 text-white">
              <Image
                src={"/images/jarir_Bookstore_Logo 1.webp"}
                alt="jarir"
                width={150}
                height={150}
                className="text-center m-auto"
              />
              <h1 className="font-bold text-2xl lg:text-[40px]">
                Jarir Coupons Display
              </h1>
              <p className="text-base lg:text-lg">
                Coupons with discounts of up to 35% on <br /> selected products
                at Jarir Bookstore.
              </p>
              <button className="hero-btn main-color bg-white rounded-xl w-fit py-2.5 px-10 m-auto cursor-pointer text-sm md:text-base xl:text-lg font-semibold main-transition hover:bg-transparent border-2 border-transparent hover:border-white">
                Discover Now
              </button>
            </div>
          </div>

          <div className="absolute w-[100%] left-0 -bottom-8">
            <div className="bg-white min-w-fit py-2.5 px-4 rounded-md shadow-md w-[90%] md:w-[80%] lg:w-[70%] m-auto flex md:gap-3 items-center justify-between">
              <div className="flex md:gap-2 items-center">
                <MdOutlineSearch size={24} className="main-color" />
                <input
                  type="text"
                  placeholder="Search for stores here..."
                  className="focus:outline-none text-sm md:text-base"
                />
              </div>
              <MainButton>Search</MainButton>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="absolute top-10">
              <Image
                src={"/images/design-4.webp"}
                alt="design-1"
                width={150}
                height={150}
              />
            </div>
            <div className="absolute top-10 right-10">
              <Image
                src={"/images/design-2.webp"}
                alt="design-1"
                width={150}
                height={150}
              />
            </div>
            <div className="absolute -bottom-14 right-0">
              <Image
                src={"/images/design-1.webp"}
                alt="design-1"
                width={150}
                height={150}
              />
            </div>
            <div className="absolute -bottom-14 left-0">
              <Image
                src={"/images/design-3.webp"}
                alt="design-1"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingSec;
