import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface UCard {
  imageUrl: string;
  button: ReactNode; // Allows both strings and JSX elements
}

export default function Cards({ imageUrl, button }: UCard) {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-2 p-5 w-full md:w-[300px] md:px-10 mt-10">
      <div className="w-full sm:w-1/2 md:w-1/3">
        <Link href="/blog">
          <div className="relative bg-white w-full sm:w-[270px] h-[250px] rounded-lg shadow-md shadow-gray-500 duration-300 transform hover:scale-105 transition-transform ease-in-out">
            <div className="relative w-full h-[180px]">
              <Image
                src={imageUrl}
                alt={button as string}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="absolute inset-0 flex items-center justify-center mt-40 text-black py-2 px-4 rounded-md text-sm sm:text-lg">
                {button}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}