"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { CompulsoryData } from "@/data/main/compulsory";
import { Tracks } from "@/data/main/tracks";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const navLinks = [
  { title: "home", link: "/", id: "1" },
  { title: "apply", link: "/apply", id: "2" },
  { title: "jobs", link: "/jobs", id: "3" },
  { title: "result", link: "/result", id: "4" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 w-full bg-[#044e83] h-full backdrop-blur-3xl print:hidden ">
        <div className="m-auto flex h-16 w-[95%] items-center justify-around md:h-20 lg:w-[90%] xl:w-[1300px]">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo"
              width={90}
              height={113}
              loading="lazy"
              decoding="async"
              className=" mt-16 mx-6 w-[70px] sm:w-[80px] right-5 top-5 md:w-[90px]"
              style={{ color: "transparent" }}
            />
          </Link>
          <h1 className="text_shadow hidden text-[10px] font-extrabold text-[#b9d8f3] lg:block xl=lg-:text-xl xl:text-xl">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <h1 className="text_shadow text-[1.125rem] sm:m-0 sm:text-nowrap font-extrabold text-[#b9d8f3] lg:hidden">
            Tuition Free Program{" "} 
          </h1>

          <div className="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10">
            {navLinks.map((item) => (
              <Link href={item.link} key={item.id}>
                <div className="capitalize">{item.title}</div>
              </Link>
            ))}
            <div
              className="relative cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className="flex items-center capitalize">
                Courses
                <IoIosArrowDown className="pl-2 size-5" />
              </div>
              {showMenu && (
                <div className="my absolute right-0 mt-2  w-48 rounded-lg bg-white text-black">
                  <div className="shadow-2xl bg-zinc-50 p-7 h-[300px] sm:h-auto overflow-y-auto">
                    <h1 className="text-left pl-2 text-xl font-bold text-gray-900 pb-3">
                      Core Courses
                    </h1>
                    {CompulsoryData.map((val) => (
                      <Link href={`/compulsory/${val.id}`} key={val.id}>
                        <div className="py-1 px-2 font-normal text-gray-600 hover:text-main">
                          {val.text}
                        </div>
                      </Link>
                    ))}
                    <h1 className="mt-5 pl-2 text-xl font-bold text-gray-900 pb-3 border-t border-zinc-300 pt-5">
                      Advanced Courses
                    </h1>
                    {Tracks.map((val) => (
                      <Link href={`/track/${val.id}`} key={val.id}>
                        <div className="py-1 px-2 font-normal text-gray-600 hover:text-main">
                          {val.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="block sm:hidden">
            <FiMenu
              size={24}
              className="text-white"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 z-40 h-full w-full bg-main print:hidden ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="absolute right-5 top-5">
          <RxCross1
            className="text-white"
            size={25}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white">
          {navLinks.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              onClick={() => setOpen(false)} // Close menu on link click
            >
              <div className="border-b border-[#1468a5] py-5 capitalize">
                {item.title}
              </div>
            </Link>
          ))}
          <div
            className={`py-5 ${
              !showMenu && "border-b"
            } border-[#146895]`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="flex items-center justify-between">
              Courses
              <IoIosArrowDown size={16} />
            </div>

            <div
              className={`overflow-auto rounded-xl bg-white ${
                showMenu ? "h-auto " : "h-0 overflow-hidden"
              }`}
            >
              <h1 className="mt-3 px-2 text-left text-lg font-bold text-zinc-800">
                Core Courses
              </h1>

              {CompulsoryData.map((val, index) => (
                <Link
                  onClick={() => {
                    setOpen(false);
                    setShowMenu(false); // Close both menus on link click
                  }}
                  key={index}
                  href={`/compulsory/${val.id}`}
                >
                  <div className="py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main">
                    {val.text}
                  </div>
                </Link>
              ))}

              <h1 className="mt-3 px-2 text-left text-lg font-bold text-zinc-800 border-t border-zinc-300 pt-5">
                Advanced Courses
              </h1>

              {Tracks.map((val, index) => (
                <Link
                  onClick={() => {
                    setOpen(false);
                    setShowMenu(false); // Close both menus on link click
                  }}
                  key={index}
                  href={`/tracks/${val.id}`}
                >
                  <div className="py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main">
                    {val.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
