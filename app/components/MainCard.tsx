import { LuClock } from "react-icons/lu";
import MainButton from "./ui/MainButton";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

interface IProps {
    image: string;
    title: string;
}
const MainCard = ({image, title}:IProps) => {
  return (
    <div className="rounded-md bg-white p-5 relative mr-5 sm:mb-5">
      {/* top */}
      <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
        {/* image */}
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded-md"
        />
        <div className="flex flex-col gap-1.5 flex-1">
          <h3 className="main-color font-bold text-base lg:text-[22px] main-transition underline-offset-2 hover:underline cursor-pointer">
            {title}
          </h3>
          <p className="text-gray-500 text-sm">12% Discount</p>
          <div className="flex gap-1 items-center text-amber-500">
            <LuClock />
            <span>3 weeks ago</span>
          </div>
          <MainButton style="w-full">Show Coupon</MainButton>
        </div>
      </div>
      {/* heart-icon */}
      <button className="absolute right-5 top-5 min-w-[20px]">
        <FaRegHeart size={18} className="text-gray-600" />
      </button>

      {/* bottom */}
      <div className="pt-3">
        <div className="flex gap-2">
          <div className="border-r pr-4 border-gray-300 ">
            <button className="rounded-md px-4 py-1 bg-green-700 text-white text-sm cursor-pointer hover:bg-green-800 main-transition">
              Active
            </button>
          </div>
          <div className="flex items-center gap-2 justify-between flex-1">
            {/* rate */}
            <div className="flex items-center gap-1 text-sm">
              <IoIosStar size={18} className="text-amber-400" /> <span className="text-black">(3)</span>
            </div>
            {/* share */}
            <div>Share <IoShareSocialSharp size={20} className="inline-block ml-1" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
