import Image from "next/image";

const BrandCard = ({ ...brand }) => {
  return (
    <div className="text-center p-6 xl:py-7 2xl:px-12 rounded-lg bg-white mr-5 text-black main-transition hover:shadow-md cursor-pointer">
      <div className="m-auto mb-2">
        <Image
          src={brand.image}
          alt={brand.title}
          width={200}
          height={200}
          loading="lazy"
          className="object-cover w-[80px] h-[80px] m-auto"
        />
      </div>

      <h3 className="font-bold main-color text-base lg:text-lg">
        {brand.title}
      </h3>
    </div>
  );
};

export default BrandCard;
