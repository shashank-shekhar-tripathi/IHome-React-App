import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src="../../public/newlogo.png" className="h-10  " alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nisi
            vero fugit repudiandae, voluptates dolores officia autem explicabo
            aut exercitationem consequuntur?
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 ">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The Latest news, articles and resources. sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="  p-2 rounded bg-gray-800 text-gray-400 border-gray-700 border outline-none"
            />
            <button className="py-2 text-white px-4 bg-blue-500 rounded">
              Subcribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 © <a
          href="https://www.instagram.com/shashank_shekhar_tripathi_2.0/"
          className="font-semibold"
        >
          ShashankShekharTripathi
        </a> 
          <br /> All Right Reserved.
      </div>
    </div>
  );
}

export default Footer;
