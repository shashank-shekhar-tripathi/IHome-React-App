import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
const About = () => {
  return (
    <motion.div
    initial={{opacity:0,x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px32 w-full overflow-hidden  "
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        {" "}
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>


      {/* image & Other Text Box */}

       <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
       {/* image */}
        <img
          src={assets.brand_img}
          alt=""
          className="w-full md:w-1/2 max-w-lg"
        />
        
        {/* TEXT CONATINER */}
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
           {/* TOP GRID BOX */}
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p>Years of Excellence</p>
             </div>
             <div>
                <p className="text-4xl font-medium text-gray-800">12+</p>
                <p>Project Completed</p>
             </div>
             <div>
                <p className="text-4xl font-medium text-gray-800">20+</p>
                <p>Mn. Sq. Ft. Deliverd</p>
             </div>
             <div>
                <p className="text-4xl font-medium text-gray-800">23+</p>
                <p>Ongoing Project</p>
             </div>
            </div>
            <p className="my-10 max-w-lg ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores sapiente expedita sunt nemo vel laudantium aliquid unde eligendi provident eaque nostrum illo numquam quisquam  quibusdam enim! Saepe explicabo inventore laudantium nobis exercitationem!</p>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-md ">Learn more</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
