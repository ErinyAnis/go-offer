import Link from "next/link";
import { footerLinks } from "../data/footer";
import Container from "./Container";
import Image from "next/image";
import { FaApple, FaFacebookSquare, FaGooglePlay } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

const social = [
  FaFacebookSquare,
  FaSquareXTwitter,
  RiInstagramFill,
  AiFillTikTok,
  IoLogoYoutube,
];

const Footer = () => {
  return (
    <footer className="section-padding border-t-2 border-[#A33670]">
      <Container className="my-10">
        <Image
          src={"/images/go-offer/Go_Offer.webp"}
          alt="go offer"
          width={72}
          height={72}
          className="m-auto"
          loading="lazy"
        />

        <div className="mt-5 lg:flex gap-10">
          {/* links */}
          <div className="grid grid-cols-3 gap-5 flex-1">
            {footerLinks.map((link) => {
              return (
                <div key={link.mainTitle}>
                  <h3 className="font-semibold mb-3 lg:mb-5">{link.mainTitle}</h3>
                  <ul className="space-y-6">
                    {link.link.map((subLink) => {
                      return (
                        <li
                          key={subLink}
                          className="text-sm main-color flex items-center"
                        >
                          <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 lg:mr-3 inline-block"></span>
                          <Link
                            href={"/"}
                            className="font-semibold relative group"
                          >
                            <span className="absolute w-0 h-0.5 bottom-0 bg-amber-400 main-transition group-hover:w-12"></span>
                            {subLink}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* social */}
          <div className="max-lg:mt-7">
            <h3 className="font-semibold mb-3 lg:mb-5">Social media and App</h3>
            <div className="flex items-center gap-4">
              {social.map((SocialLink, idx) => {
                return (
                  <Link key={idx} href={"/"}>
                    <SocialLink size={30} />
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 mt-5">
              <Link
                href={"/"}
                className="bg-black rounded-md py-0.5 px-3 pb-1 text-white w-fit"
              >
                <div className="flex gap-2 items-center">
                  <FaApple size={30} />
                  <div className="flex-1">
                    <span className="text-[10px] text-gray-300">
                      Download on the
                    </span>
                    <div className="-mt-1.5">App Store</div>
                  </div>
                </div>
              </Link>

              <Link
                href={"/"}
                className="bg-black rounded-md py-0.5 px-3 pb-1 text-white w-fit"
              >
                <div className="flex gap-2 items-center">
                  <FaGooglePlay size={24} />
                  <div className="flex-1">
                    <span className="text-[10px] text-gray-300">Get it on</span>
                    <div className="-mt-1.5">Google Play</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-18 text-sm">
          <hr className="text-gray-300 pt-4" />
          <div className="flex max-lg:flex-col lg:items-center gap-3 lg:gap-4 lg:justify-between">
            <div className="main-color underline flex lg:items-center gap-4">
              <Link href={"/"}>Terms and Conditions</Link>
              <Link href={"/"}>Privacy Policy</Link>
            </div>
            <p className="font-semibold text-xs">
              © Copyright 2025 Gooffer.net | Developed By e-RAMO For Digital
              Solutions.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
