import React from "react";
import {
  Coffee,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Visit us at our location or reach out
              through any of our contact channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-10">
            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8 transition-all duration-300 hover:shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff]">
              <div className="space-y-8">
                {/* Contact Details */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Coffee className="text-emerald-600" />
                    Visit Our Coffee House
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: MapPin,
                        text: "Nørrebrogade 209, 2200 Copenhagen N",
                        subtext: "Main Location",
                      },
                      {
                        icon: Phone,
                        text: "35 85 35 85",
                        subtext: "Mon-Fri 10am-10pm",
                      },
                      {
                        icon: Mail,
                        text: "post@cafecastro.dk",
                        subtext: "Email us anytime",
                      },
                      {
                        icon: Clock,
                        text: "Mon-Thurs: 10am - 10pm",
                        subtext: "Fri-Sat: 10am - 11pm | Sun: 10am - 10pm",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="p-2 bg-white rounded-lg shadow-md">
                          <item.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">
                            {item.text}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {item.subtext}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Instagram, label: "Instagram" },
                      { icon: Facebook, label: "Facebook" },
                      { icon: Twitter, label: "Twitter" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors duration-300 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6 text-gray-600 group-hover:text-emerald-600" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8 transition-all duration-300 hover:shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff]">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MapPin className="text-emerald-600" />
                Find Us On The Map
              </h2>
              <div className="rounded-xl overflow-hidden shadow-inner bg-gray-50 p-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.558385096879!2d12.545598315927048!3d55.69802998053095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465252f1b8f9f8b9%3A0x1f8e8b8f8f8f8f8f!2sN%C3%B8rrebrogade%20209%2C%202200%20K%C3%B8benhavn%20N%2C%20Denmark!5e0!3m2!1sen!2sdk!4v1629794729599!5m2!1sen!2sdk"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
