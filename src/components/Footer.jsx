import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white lg:px-[12%] px-[8%] pt-16 flex justify-center items-center flex-col bg-[#0d0d0d]">
      {/* Top Section */}
      <div className="border-b border-[#222] pb-8 w-full text-white px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
          {/* Brand Info */}
          <div className="flex-1">
            <Link to="/" className="text-4xl font-bold bricolage-font">
              Cars
              <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent transition">
                {" "}
                ZONE
              </span>
            </Link>
            <p className="text-[#999] mb-6 md:w-[90%] w-full mt-2">
              Discover luxury with our curated selection of Cars. From sports to
              Super Cars & luxury — style that lasts forever.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/theabdurrahman"
                className="border border-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 hover:text-black transition-colors duration-300"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/A_R_Rah_Man"
                className="border border-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 hover:text-black transition-colors duration-300"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abdur-rah-man-04ba28378/"
                className="border border-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 hover:text-black transition-colors duration-300"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/@m.a.rahman.t.420"
                className="border border-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 hover:text-black transition-colors duration-300"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold bricolage-font mb-4 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent transition">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[#999] footer-menu relative">
              <li>
                <Link
                  to="/about"
                  className="hover:text-pink-500 relative transition duration-300 bricolage-font"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/watches"
                  className="hover:text-pink-500 relative transition duration-300 bricolage-font"
                >
                  Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-pink-500 relative transition duration-300 bricolage-font"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-pink-500 relative transition duration-300 bricolage-font"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold bricolage-font mb-4 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent transition">
              Subscribe
            </h4>
            <p className="text-[#999] mb-4 text-sm">
              Get exclusive deals and updates about our latest collections.
            </p>
            <div className="flex items-center border  border-pink-500 rounded-full px-4 py-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="bg-transparent outline-none text-white placeholder:text-[#aaa] flex-1"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-pink-500 transition"
              >
                <i className="ri-arrow-right-up-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-[#999] text-center text-base relative py-6">
        <p className="bricolage-font">
          © 2025. All Rights Reserved.{" "}
          <span className="text-pink-500 bricolage-font">Car Zone </span>
        </p>
        <p className="bricolage-font">
          Developed By{" "}
          <a
            href="https://github.com/arrahman69"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent transitiontransition bricolage-font font-extrabold text-2xl"
          >
            ᴀʙᴅᴜʀ ʀᴀʜᴍᴀɴ
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
