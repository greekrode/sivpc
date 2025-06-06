import { Link } from "react-router-dom";
import { Piano, Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001830] border-t border-[#957C3D]/20 flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-5xl font-bold bg-[#ffb703] bg-clip-text text-transparent">
                SIVPC
              </span>
            </div>
            <p className="text-gray-400">
              Celebrating excellence in classical piano performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#957C3D]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#957C3D] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-[#957C3D] transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/prizes"
                  className="text-gray-400 hover:text-[#957C3D] transition-colors"
                >
                  Prizes
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#957C3D] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#957C3D] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#957C3D]">
              Contact Info
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>+65 9774 7304</li>
              <li>contact@sivpc.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#957C3D]">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sivpc.singapore"
                className="text-gray-400 hover:text-[#957C3D] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@sivpc.com"
                className="text-gray-400 hover:text-[#957C3D] transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#001324] py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Singapore International Virtuoso
            Piano Competition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
