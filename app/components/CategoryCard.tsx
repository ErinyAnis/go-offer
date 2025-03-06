import Image from "next/image";

const CategoryCard = ({ ...category }) => {
  return (
    <div className="text-center p-6 xl:py-7 2xl:px-12 rounded-lg bg-white mr-5 text-black relative">
      <div className="relative">
        <div className="m-auto w-28 h-28 bg-amber-500 rounded-full mb-6">
          <Image
            src={category.image}
            alt={category.title}
            width={200}
            height={200}
            loading="lazy"
            className="object-cover rounded-md absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[90px]"
          />
        </div>
      </div>

      <h3 className="font-bold main-color text-base lg:text-lg">{category.title}</h3>
    </div>
  );
};

export default CategoryCard;
