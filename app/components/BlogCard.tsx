import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ ...blog }) => {
  return (
    <Link href={"/"}>
      <div className="mr-6">
        <div className="relative overflow-hidden h-48 w-full block rounded-t-md">
          <Image
            src={blog.image}
            alt={blog.title}
            width={300}
            height={300}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <span className="mt-3 inline-block text-sm text-amber-500">
          {blog.date}
        </span>
        <h3 className="truncate w-60 font-bold ">{blog.title}</h3>
        <p className="mt-3 text-sm text-gray-500">{blog.paragraph}</p>
        <div className="mt-5">
          <div className="flex items-center gap-1 text-sm main-color">
            <span>See more </span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
