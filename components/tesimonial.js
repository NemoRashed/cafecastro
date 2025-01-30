"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/tesimo";

export default function tesimonial() {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 ">
          Testimonial
        </h1>
      </div>
      <div className="h-[20rem]  rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Dejlig hyggelig café, som er svært at finde på Nørrebro og indre by. Med lækkert mad, speciel deres burger! Prisen er god, og personalet har altid humøret i top, hvilket er svært at finde nu om dage. Helt klart et af mine favorit steder, specielt om sommeren med deres store udendørs areal, som er perfekt til at nyde solen på.",
    name: "Sofia L.",
    title: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Genbesøg på den ny opbyggede Cafe Castro. Fik den lækreste pasta Casto Time. Waow hvor lækker og fyldig godt med kød. God stor portion. 1 glas Andeluna hvidvin. Også meget smag.",
    name: "Anonymous",
    title: "",
    rating: 4,
  },
  {
    quote:
      "Hyggelig atmosfære, venligt personale og fantastisk mad! Vi kommer helt sikkert igen. Kan varmt anbefales.",
    name: "Mikkel T.",
    title: "TripAdvisor Review",
    rating: 5,
  },
  {
    quote:
      "Super god service og lækker mad. Især deres brunch er fantastisk – gode råvarer og en hyggelig stemning.",
    name: "Emilie R.",
    title: "Facebook Review",
    rating: 3,
  },
  {
    quote:
      "Jeg har været her flere gange, og maden skuffer aldrig! Godt udvalg og fair priser. Perfekt til en afslappet aften med venner.",
    name: "Jonas B.",
    title: "Google Review",
    rating: 5,
  },
];
