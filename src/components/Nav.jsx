import { assets } from "../assets/assets";
import { useState } from "react";
function Nav() {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <>
      <div className=" absolute top-0 left-0 w-full z-10 " id="Home">
        <div className=" container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
         <img src={assets.logo} alt="img" className="  w-36    " />  
         
          <ul className="hidden md:flex gap-7 text-white">
            <a href="#Home" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
            <a href="#Testimonails" className="cursor-pointer hover:text-gray-400">
              Testimonails
            </a>
          </ul>
          <button   className="hidden md:block bg-white px-8 py-2 rounded-full">
            <a href="#Contact">Sign up</a>
          </button>
          <img
            src={assets.menu_icon}
            className="md:hidden w-7 cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </div>

        {/* ----------Mobile-Menu ----------------------- */}

        {showMenu ? (
          <div className="md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all  ">
            <div className=" flex justify-end p-8 pr-10 cursor-pointer ">
              <img
                src={assets.cross_icon}
                className="w-6"
                onClick={() => setShowMenu(false)}
              />
            </div>
            <ul className="flex flex-col items-center gap-3 mt-6 mx-5 text-lg">
              <a href="#Header" className="px-4 py-2 rounded-full inline-block"
              onClick={()=>setShowMenu(false)}
              >
                Home
              </a>
              <a href="#About" className="px-4 py-2 rounded-full inline-block"
              onClick={()=>setShowMenu(false)}>
                About
              </a>
              <a
                href="#Projects"
                className="px-4 py-2 rounded-full inline-block"
                onClick={()=>setShowMenu(false)}
              >
                Projects
              </a>
              <a
                href="#Testimonails"
                className="px-4 py-2 rounded-full inline-block"
                onClick={()=>setShowMenu(false)}
              >
                Testimonails
              </a>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Nav;
