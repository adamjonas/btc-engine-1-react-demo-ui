import Image from "next/image";
import type { MenuApp } from "./data";

export const AppItem = ({ href, image, name, title }: MenuApp) => (
  <a href={href} className="py-3 px-8 gap-6 flex items-center">
    <Image
      className="rounded-xl w-11 h-11 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
      src={image}
      alt={name}
      width={88}
      height={88}
    />
    <p className="text-xs md:text-sm xl:text-base 2xl:text-lg text-left text-custom-lightGrey">
      {title}
    </p>
  </a>
);
