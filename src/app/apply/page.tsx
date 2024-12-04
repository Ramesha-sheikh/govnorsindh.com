import Link from 'next/link';
import React from 'react';
import { FaFacebookF } from "react-icons/fa";

const SocialMediaSubscription = () => {
  return (
    <main className="mb-20 flex flex-col items-center justify-center">
      <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
        <h2
          className="text-center text-3xl text-main xs:text-3xl"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
          }}
        >
          Before continuing to the application, please subscribe on these social media platforms.
        </h2>

        <div className="mt-5 flex gap-3 md:text-sm">
          <Link
            href={"https://www.facebook.com/TeamKTessori"}
            target="_blank"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2] text-white"
          >
            <FaFacebookF className="h-5 w-5" />
          </Link>
        </div>

        <div className="group w-full xs:w-52">
          <div className="popover rounded-lg bg-white px-4 py-2 text-center text-sm text-red-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
            <p>Click the icon above first.</p>
          </div>
          <button
            disabled
            className="w-full xs:w-52 bg-main py-4 xs:py-3 mx-auto text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontStyle: 'normal',
            }}
          >
            CONTINUE
          </button>
        </div>

        <p className="text-center">
          Already applied?{' '}
          <a className="text-blue-400 underline" href="/admit-card">
            Get Admit Card
          </a>
        </p>
      </div>

      <div className="fa-flip-horizontal w-[90%] lg:w-[800px] !justify-center mx-auto !flex-wrap flex gap-4 items-center">
        {/* Step 1 */}
        <div className="flex items-center gap-2">
          <h1 className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-900 text-main">
            1
          </h1>
          <Link href="#" className="text-blue-900 hover:underline">
            Facebook
          </Link>
          <hr className='bg-gray-300 w-10 h-1 '/>
        </div>

        {/* Step 2 */}
        <div className="flex items-center gap-2">
          <h1 className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-main">
            2
          </h1>
          <Link href="#" className="text-blue-900 hover:underline">
            YouTube
          </Link>
          <hr className='bg-gray-300 w-10 h-1 '/>
        </div>

        {/* Step 3 */}
        <div className="flex items-center gap-2">
          <h1 className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-main">
            3
          </h1>
          <Link href="#" className="text-blue-900 hover:underline">
            Twitter
          </Link>
          <hr className='bg-gray-300 w-10 h-1 '/>
        </div>

        {/* Step 4 */}
        <div className="flex items-center gap-2">
          <h1 className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-main">
            4
          </h1>
          <Link href="#" className="text-blue-900 hover:underline">
            Instagram
          </Link>
          <hr className='bg-gray-300 w-10 h-1 '/>
        </div>

        {/* Step 5 */}
        <div className="flex items-center gap-2">
          <h1 className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-main">
            5
          </h1>
          <Link href="#" className="text-blue-900 hover:underline">
            Apply
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SocialMediaSubscription;
