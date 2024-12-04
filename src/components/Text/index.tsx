import React from 'react'
import Image from 'next/image'
// import Solo1 from '../../../public/imageWebsite.
import Slider from '@/components/Slider/index'

const Text = () => {
  return (
    <>
      <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10'>
<h1 className=' text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.775rem] text-customBlue font-extrabold m-auto md:w-[95%]'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneurs Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
<p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] text-[19px] sm:text-[1.2rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify" style={{ letterSpacing: '0.1rem' }}>
  The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverse, thus paving the way for the first billion-dollar valued solopreneurs businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
</p>


<div className="px-5 py-10 flex flex-col md:flex-row gap-6">
  <div
    className="w-full sm:w-[100%] md:w-[450px] h-auto sm:h-auto md:h-[300px] rounded-lg overflow-hidden"
    style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 1)" }}
  >
    <Image
      src="/imageWebsite.jpg"
      alt="Description of the image"
      layout="responsive"
      width={450}
      height={300}
      className="object-cover"
    />
  </div>
  <div
    className="w-full sm:w-[100%] md:w-[450px] h-auto sm:h-auto md:h-[300px] rounded-lg overflow-hidden"
    style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 1)" }}
  >
    <Image
      src="/imageWebsite2.jpg"
      alt="Description of the image"
      layout="responsive"
      width={450}
      height={300}
      className="object-cover"
    />
  </div>
  <div
    className="w-full sm:w-[100%] md:w-[450px] h-auto sm:h-auto md:h-[300px] rounded-lg overflow-hidden"
    style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 5)" }}
  >
    <Image
      src="/imageWebsite3.jpg"
      alt="Description of the image"
      layout="responsive"
      width={450}
      height={300}
      className="object-cover"
    />
  </div>
</div>

<Slider/>
</div>
    </>
  )
}

export default Text
