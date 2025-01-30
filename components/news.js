"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dcard";
import Pic4 from "@/images/PIC4.jpg";
import Pic2 from "@/images/pic2.jpg";
import Pic3 from "@/images/pic3.jpg";

const newsItems = [
  {
    image: Pic4,
    title: "European Championship Matches on the Big Screen",
    description:
      "Will 2024 be the new 1992? We'll be watching as the Danish men's national team (and all the other European countries) kick it on the grass in Germany.",
  },
  {
    image: Pic2,
    title: "New Coffee Shop Opening Soon!",
    description:
      "A brand-new café is opening downtown, offering specialty coffees and delicious pastries. Stay tuned for more details! ☕",
  },
  {
    image: Pic3,
    title: "Tech Conference 2024 Highlights",
    description:
      "The biggest tech conference of the year just wrapped up, showcasing innovations in AI, cybersecurity, and more! 💡",
  },
  {
    image: Pic3,
    title: "Tech Conference 2024 Highlights",
    description:
      "The biggest tech conference of the year just wrapped up, showcasing innovations in AI, cybersecurity, and more! 💡",
  },
];

export default function News() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-4">
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">
        Latest News from Us
      </h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full max-w-6xl"
      >
        {newsItems.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-auto rounded-xl p-4 border">
                <CardItem
                  translateZ="50"
                  className="text-lg font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height={150}
                    width={300}
                    className="h-48 w-full object-cover rounded-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                >
                  {item.description}
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-[#deae65] dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Read more
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
