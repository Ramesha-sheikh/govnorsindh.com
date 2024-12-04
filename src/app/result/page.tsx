"use client";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

function Apply() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1
        style={poppins.style}
        className="my-8 text-center text-lg font-bold text-main print:hidden md:text-3xl m"
      >
        Grand Entrance Exam Result
      </h1>
      <form
       className="-top-10 mb-20 z-10 mx-4 my-10 mt-20 w-full max-w-2xl rounded px-4 py-8 text-black shadow-lg sm:mt-10 md:mx-10 md:px-6"
      >
        <div className="mb-4">
          <label  className="block text-xl mb-2 font-medium text-gray-700">
            Registration Number *
          </label>
          <input
            type="tel"
            id="regNo"
            placeholder="Registration number"
            required
            className="mt-1 w-full flex h-12  flex-shrink-0 items-center justify-center rounded-l border border-gray-400  bg-gray-100 p-3 text-gray-400 xs:w-[10%] md:text-xl"
          />
        </div>
 
        <div className="mb-4">
          <label  className="block text-xl mb-2 font-medium text-gray-700">
            CNIC or B-Form Number *
          </label>
          <input
            type="tel"
            id="cnic"
            placeholder="CNIC or B-Form number"
            required
            className="mt-1 w-full flex h-12  flex-shrink-0 items-center justify-center rounded-l border border-gray-400  bg-gray-100 p-3 text-gray-400 xs:w-[10%] md:text-xl"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            style={poppins.style}
            className="mt-5 w-full bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed sm:w-52 sm:py-4 sm:text-base"
          >
            GET RESULT
          </button>
        </div>
      </form>
    </main>
  );
}

export default Apply;
