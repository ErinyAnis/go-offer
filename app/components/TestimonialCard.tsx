import Image from "next/image";
import { IoStar } from "react-icons/io5";

const TestimonialCard = () => {
  return (
    <div className="relative lg:min-h-[60vh]">
      <div className="lg:absolute right-0">
        <Image
          src={"/images/testimonials/Ellipse.webp"}
          alt="shape"
          loading="lazy"
          width={350}
          height={350}
          className="w-auto h-[412px] hidden lg:block image"
        />

        <div className="lg:absolute right-24 lg:right-16 top-0">
          <Image
            src={"/images/testimonials/test-profile.webp"}
            alt="user"
            loading="lazy"
            width={600}
            height={600}
            className="w-auto h-auto max-lg:max-w-md lg:min-w-[500px] max-lg:hidden image"
          />
          <div className="lg:absolute max-w-fit w-72 lg:w-60 right-0 lg:-right-16 top-5 lg:top-12 p-5 rounded-md bg-[#262254] text-white text-sm max-lg:ml-auto max-lg:mb-4">
            Customer and member reviews on Coupons and exclusive gooffer
          </div>

          {/* left-sec */}
          <div className="lg:absolute left-0 lg:-left-40 max-lg:top-32 lg:bottom-0">
            <div>
              {/* review */}
              <div className="md:w-[80%] max-lg:m-auto lg:max-w-fit lg:w-80 shadow-card-shadow p-5 lg:p-7 rounded-md bg-white text-black">
                <h3 className="mb-2.5 text-sm lg:text-lg font-medium">
                  ahmed ali mohsen
                </h3>
                <span className="text-[#505050]">طالب ثانوي</span>
                <p className="mt-2.5 lg:mt-7 text-base lg:text-xl">
                  This is the best coupons website i have ever seen !
                </p>
              </div>

              {/* stars */}
              <div className="bg-white max-lg:mx-auto w-fit px-5 py-2.5 rounded-md my-10 shadow-card-shadow flex gap-1">
                <IoStar className="text-amber-400" />
                <IoStar className="text-amber-400" />
                <IoStar className="text-amber-400" />
                <IoStar className="text-gray-300" />
                <IoStar className="text-gray-300" />
              </div>
            </div>

            <div className="absolute top-14 left-0 lg:-top-14 -z-10">
              <Image
                src={"/images/testimonials/Quotes.webp"}
                alt="Quotes"
                loading="lazy"
                width={200}
                height={200}
                className="w-auto h-auto max-lg:w-14 max-lg:h-14 object-contain"
              />
            </div>

            <div className="absolute bottom-10 lg:bottom-20 left-0 lg:-left-24 flex items-center gap-1 max-lg:text-xs">
              <div>
                <Image
                  src={"/images/testimonials/likeIcon.svg"}
                  alt="like-icon"
                  loading="lazy"
                  width={30}
                  height={30}
                  className="max-lg:w-6"
                />
              </div>
              <span className="text-[#505050] font-bold tracking-widest">
                Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
