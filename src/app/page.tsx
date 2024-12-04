import Text from '@/components/Text'
import Cards from '../components/Cards/Cards'
import Hero from '../components/Hero/Hero'
// import Advance from '@/components/Advance';
// import Compulsory from '@/components/Compulsory';
export default function Home() {
  return (
    <>
    <Hero/>
{/* <Compulsory/>
    <Advance/> */}
      <Text />
    
      <section>
        <h2 className=' m-10 lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-customBlue font-extrabold mt-10'>
          Core Courses Sequence
        </h2>
        <div className="flex flex-wrap justify-start gap-2 w-full md:flex-row flex-col">
          <Cards imageUrl="/card1.jpg" button={<span className=" text-zinc-600 font-bold">Programming Fundamentals</span>} />
          <Cards imageUrl="/card2.jpg" button={<span className=" text-zinc-600 font-bold">Web2 Using NextJS</span>} />
          <Cards imageUrl="/card3.jpg" button={<span className=" text-zinc-600 font-bold">Earn as You Learn</span>}/>
        </div>
      </section>

      <section>
        <h2 className="text-[28px] sm:text-[28px] md:text-[35px] px-7 mt-10 leading-tight font-bold text-customBlue w-full">
          Advanced Courses
        </h2>
        <div className="flex flex-wrap justify-start gap-2 w-full md:flex-row flex-col mt-5">
          <Cards imageUrl="/a1.jpg" button="Artificial Intelligence" />
          <Cards imageUrl="/a2.jpg" button="Web 3 and Metaverse" />
          <Cards imageUrl="/a4.jpg" button="Cloud-Native Computing" />
          <Cards imageUrl="/a5.jpg" button="Ambient Computing and IoT" />
          <Cards imageUrl="/a6.jpg" button="Genomics and Bioinformatics" />
          <Cards imageUrl="/a7.jpg" button="Network Programmability and Automation" />
        </div>
      </section>
    </>
  );
}
