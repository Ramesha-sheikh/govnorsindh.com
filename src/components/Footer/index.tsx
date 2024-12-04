import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { Roboto } from "next/font/google";
import Icons from "../Icons/Icons";
// Correct Roboto weight to 400
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 px-4 md:px-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Core Courses */}
        <div>
          <h3 className="text-xl font-bold mb-4">Core Courses</h3>
          <ul className="space-y-2 text-lg">
            <Link href="#">
              <li className={`${roboto.className} mb-2`}>Programming Fundamentals</li>
            </Link>
            <Link href="#">
              <li className={`${roboto.className} mb-2`}>Web2 using Next.js</li>
            </Link>
            <Link href="#">
              <li className={`${roboto.className} mb-2`}>Earn as You Learn</li>
            </Link>
          </ul>
        </div>

        {/* Advanced Courses */}
        <div>
          <h3 className="text-xl font-bold mb-4">Advanced Courses</h3>
          <ul className="space-y-2 text-lg">
            <Link href="#">
              <li className={`${roboto.className} mb-2`}>Web 3 and Metaverse</li>
            </Link>
            <Link href="#">
              <li className={`${roboto.className} mb-2`}>Cloud Native Computing</li>
            </Link>
            <Link href="#">
              <li className={`${roboto.className} mb-2`}>Artificial Intelligence (AI) and Deep Learning</li>
            </Link>
            <Link href="#">
              <li className={`${roboto.className} mb-2`}>Ambient Computing and IoT</li>
            </Link>
            <Link href="#">
              <li className={`${roboto.className} mb-2`}>Genomics and Bioinformatics</li>
            </Link>
            <Link href="#">
              <li className={`${roboto.className} mb-2`}>Network Programmability and Automation</li>
            </Link>
          </ul>
        </div>

        {/* Social Links and Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Social Links</h3>
          <div className="flex space-x-4 mb-4 flex-wrap">
           <Icons/>
          </div>
          <Link
            href="mailto:education@governorsindh.com" target="blank"
            className="text-blue-800 underline flex items-center gap-2"
          >
            <AiOutlineMail className="w-6 h-6" />
            education@governorsindh.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
