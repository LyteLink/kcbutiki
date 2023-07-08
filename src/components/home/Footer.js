import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-200">
      <div className="flex flex-wrap max-w-7xl mx-auto px-4 gap-8 pb-6">
        <div className="flex-1 basis-[10rem]">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>
              Kiira College Butiki (KCB) commonly referred to as Butiki, is an
              all-boys boarding public secondary school (high school) located in
              Jinja district, in the Eastern region of Uganda.
            </p>
            <p>
              The school is located on Butiki hill, in Namulesa trading center,
              along the Jinja-Kamuli Highway. It is approximately 14 kilometers
              (approx. 8.7 miles) from Jinja town.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-200 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <FaGoogle size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        <div className="flex-1 basis-[10rem]">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Information Link</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-200 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-200 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/uneb" className="text-gray-200 hover:text-white">
                  Academics
                </a>
              </li>
              <li>
                <a href="/clubs" className="text-gray-200 hover:text-white">
                  Clubs & Societies
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-200 hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-200 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 basis-[10rem]">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:#" className="text-gray-200 hover:text-white">
                  kc_butiki@yahoo.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white">
                  www.yoursite.com
                </a>
              </li>
              <li>P.O BOX 1181, KIIRA COLLEGE BUTIKI</li>
              <li>0392-280431</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-4">
        <div className="container">
          <div className="text-center">
            <p className="text-sm text-gray-300">
              All Rights Reserved. &copy; 2022{" "}
              <a href="#">KIIRA COLLEGE BUTIKI</a> Design By :{" "}
              <a
                href="https://html.design/"
                className="text-gray-300 hover:text-white"
              >
                Solve4X
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
