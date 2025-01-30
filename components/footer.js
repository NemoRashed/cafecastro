import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@/images/logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#182E28] text-white py-7">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center border-2 border-gray-500 p-6 rounded-lg space-y-6 md:space-y-0 animate-fadeIn">
          <div className="text-center md:text-left">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src={Logo}
                width={100}
                height={100}
                alt="Company Logo"
                className="w-36 mx-auto md:mx-0"
              />
            </Link>
            <p className="text-sm mt-2">
              Café Castro has existed since 1998 at <br /> the same address – in
              the heart of Nørrebro.
            </p>
          </div>

          {/* Middle Menu List Row */}
          <div className="text-center md:text-left">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              {[
                { href: "/", label: "Home" },
                { href: "/About", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/News", label: "News" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-secondary transition-all duration-300 ease-in-out"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {[
              { href: "#", icon: <Facebook className="w-6 h-6" /> },
              { href: "#", icon: <Instagram className="w-6 h-6" /> },
              { href: "#", icon: <Twitter className="w-6 h-6" /> },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:text-secondary transition-transform duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm border-t-2 border-gray-500 pt-6">
        <p>
          &copy; {new Date().getFullYear()} Café Castro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
