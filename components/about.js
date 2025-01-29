import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* About Section with Wave Shape */}
      <section className="relative py-16 bg-gray-50">
        {/* Top Wave */}
        {/* <div className="absolute top-0 left-0 right-0 -mt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#182e28"
              fillOpacity="1"
              d="M0,96L48,101.3C96,107,192,117,288,138.7C384,160,480,192,576,197.3C672,203,768,181,864,160C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,101.3L1440,106.7V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div> */}

        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-5">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed mb-12">
            Founded in 2010, Café Serenity has been a haven for coffee
            enthusiasts and food lovers alike. We pride ourselves on sourcing
            the finest beans from sustainable farms and crafting each cup with
            passion and precision. Our warm atmosphere and dedication to quality
            have made us a beloved destination in the heart of the city.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Opening Hours",
                desc: "MON – THURS: 10:00 AM – 10:00 PM\nFRI – SAT: 10:00 AM – 11:00 PM\nSUNDAY: 10:00 AM – 10:00 PM",
              },
              {
                icon: MapPin,
                title: "Address",
                desc: "Nørrebrogade 209,\n2200 Copenhagen N",
              },
              {
                icon: Phone,
                title: "Contact",
                desc: "Tel. 35 85 35 85\npost@cafecastro.dk\nCVR: 43453181",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white backdrop-blur-sm animate-bounce transform hover:scale-105 transition-all duration-300 shadow-[5px_5px_10px_0px_rgba(34,197,94,0.5)]
"
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <item.icon size={32} className="mb-4 text-[#b99154] mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave
        <div className="absolute bottom-0 left-0 right-0 -mb-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#182e28"
              fillOpacity="1"
              d="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,261.3C672,266,768,245,864,224C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </section>
    </div>
  );
}
