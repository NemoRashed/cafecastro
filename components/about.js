"use client";

import React from "react";
import Image from "next/image";
import Pic1 from "@/images/pic1.jpg";
import Pic2 from "@/images/pic2.jpg";
import Pic3 from "@/images/pic3.jpg";

export default function About() {
  return (
    <div>
      <section className="relative py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-5">
            About us
          </h2>
          <p className="text-lg leading-relaxed  mb-10 md:mb-20">
            Café Castro has existed since 1998 at the same address – in the
            heart of Nørrebro. For a period between 2020-2023, Café Castro was
            closed due to a major renovation. In March 2023, we finally opened
            our doors and were able to welcome everyone to our completely
            renovated café. Today, we still reflect the old Café Castro's floor
            plan - but with new luxurious and atmospheric settings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
            {[Pic1, Pic2, Pic3].map((image, index) => (
              <div
                key={index}
                className="relative w-full h-64 rounded-xl overflow-hidden transition-transform duration-500 ease-out transform rotate-12 hover:rotate-0"
              >
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
