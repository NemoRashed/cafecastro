"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dcard";
import Link from "next/link";
import Pic4 from "@/images/PIC4.jpg";
import Pic2 from "@/images/pic2.jpg";
import Pic3 from "@/images/pic3.jpg";

export default function News() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 mb-2">
          Latest news from us
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-4">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              We show all the European championship matches on the big screen
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4 ">
              <Image
                src={Pic4}
                height="100"
                width="100"
                className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Will 2024 be the new 1992? We'll be watching as the Danish men's
                national team (and all the other European countries) kick it on
                the grass in Germany. Hopefully we'll take home the gold this
                year! 😀
              </CardItem>
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Read more
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              We show all the European championship matches on the big screen
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={Pic4}
                height="800"
                width="1000"
                className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Will 2024 be the new 1992? We'll be watching as the Danish men's
                national team (and all the other European countries) kick it on
                the grass in Germany. Hopefully we'll take home the gold this
                year! 😀
              </CardItem>
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Read more
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              We show all the European championship matches on the big screen
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={Pic4}
                height="800"
                width="1000"
                className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Will 2024 be the new 1992? We'll be watching as the Danish men's
                national team (and all the other European countries) kick it on
                the grass in Germany. Hopefully we'll take home the gold this
                year! 😀
              </CardItem>
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Read more
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
