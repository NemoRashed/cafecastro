import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#182E28] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Café Delight</h3>
            <p className="text-sm">Brewing happiness since 2010</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-secondary transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Café Delight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
