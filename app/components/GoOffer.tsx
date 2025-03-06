import Image from "next/image";
import Container from "./Container";
import MainTitle from "./ui/MainTitle";
import LoginBtn from "./ui/LoginBtn";

const GoOffer = () => {
  return (
    <section className="sec-padding">
      <Container>
        {/* top */}
        <div className="text-center flex flex-col gap-5">
          <Image
            src={"/images/go-offer/Go_Offer.webp"}
            alt="go offer"
            width={70}
            height={70}
            className="m-auto"
            loading="lazy"
          />
          <MainTitle text="What is the Go Offer platform?" />
        </div>

        {/* content */}
        <div className="grid lg:grid-cols-2 mt-10 lg:mt-14 gap-5 items-center">
          <div>
            <p className="max-md:text-center text-base text-[#2F3441]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              sapiente saepe provident consequatur alias illo magnam a
              repellendus sunt temporibus. Consequuntur consectetur autem
              reprehenderit doloremque minima voluptatum laborum ullam
              doloribus.
            </p>
            <h3 className="text-lg lg:text-2xl my-4">Why us?</h3>
            <ul className="main-color text-sm space-y-4 font-medium">
              <li className="flex gap-3 items-center">
                <div>
                  <span className="bg-[#FFEBF1] w-8 h-8 rounded-full inline-block"></span>
                </div>
                <p>
                  All discounted items are here, you can choose what category of
                  items are being discounted and claim the coupon.
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <div>
                  <span className="bg-[#FFEBF1] w-8 h-8 rounded-full inline-block"></span>
                </div>
                <p>Marsa MatrohMarsa MatrohMarsa Matroh</p>
              </li>
              <li className="flex gap-3 items-center">
                <div>
                  <span className="bg-[#FFEBF1] w-8 h-8 rounded-full inline-block"></span>
                </div>
                <p>Marsa Matroh 2Marsa Matroh 2Marsa Matroh 2</p>
              </li>
              <li className="flex gap-3 items-center">
                <div>
                  <span className="bg-[#FFEBF1] w-8 h-8 rounded-full inline-block"></span>
                </div>
                <p>Marsa MatrohMarsa MatrohMarsa Matroh</p>
              </li>
            </ul>
            <div className="mt-5 lg:mt-10">
              <LoginBtn />
            </div>
          </div>
          {/* image */}
          <Image src={"/images/go-offer/Go_far.webp"} alt="go offer" width={400} height={400} loading="lazy" className="m-auto h-auto lg:h-[80%] lg:w-full object-contain" />
        </div>
      </Container>
    </section>
  );
};

export default GoOffer;
