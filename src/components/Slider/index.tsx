'use client'

import Image from 'next/image';
import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from '../../../public/slideShow1.jpg'
import Image3 from '../../../public/slideShow2.jpg'
import Image2 from '../../../public/slideShow3.jpg'
import Image4 from '../../../public/slideShow4.jpg'
import Image5 from '../../../public/slideShow5.jpg'
import Image6 from '../../../public/slideShow6.jpg'
import Image7 from '../../../public/slideShow7.jpg'
import Image8 from '../../../public/slideShow8.jpg'

export default class ImagesCaurosel extends Component {
    render() {
        const data = [
            {
                img: Image1,
                title: 'Students learning Web3 basics',
                text: 'Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th,'
            },
            {
                img: Image2,
                title: 'First meeting with the President.',
                text: 'First official PIAIC meeting on November 1st, 2018. '
            },
            {
                img: Image3,
                title: 'President launching the PIAIC website.',
                text: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. '
            },
            {
                img: Image4,
                title: 'President launching the PIAIC website.',
                text: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. '
            },
            {
                img: Image5,
                title: 'President launching the PIAIC website.',
                text: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. '
            },
            {
                img: Image6,
                title: 'President launching the PIAIC website.',
                text: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. '
            },
            {
                img: Image7,
                title: 'President launching the PIAIC website.',
                text: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. '
            },
            {
                img: Image8,
                title: 'President launching the PIAIC website.',
                text: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. '
            },
        ];

        const settings = {
            dots: true,  // Dots enabled by default
            dotsClass: 'slick-dots line-indicator',
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,  // Tablets and larger screens: Show dots
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 640, // For smaller screens (mobile), hide dots
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,  // Dots hidden for small and extra-small screens
                    }
                }
            ],
            customPaging: (i: number) => (
                <div className='-mt-2 text-xs opacity-0'>{i}</div>
            ),
        };

        return (
            <div className='mt-10 w-full'>
                <Slider {...settings} className='w-full'>
                    {
                        data.map((val, index) => {
                            return (
                                <div className='px-3 xl-lg:px-1 group mb-2 md:mb-5  relative overflow-hidden cursor-pointer outline-none' key={index}>
                                    <div className='relative bg-slate-900 rounded-lg overflow-hidden'>
                                        <Image src={val.img} className='w-full h-[300px]  md:h-[600px] object-cover' alt={val.title} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}
