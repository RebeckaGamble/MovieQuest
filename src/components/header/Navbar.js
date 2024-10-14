import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../search/Searchbar";
import { FaHeart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full h-[60px] bg-[#0d253f]">
      <div className="flex justify-between items-center h-full px-4 max-w-[90rem] mx-auto">
        <div className="h-full flex items-center gap-2">
          <Link to={"/"}>
            <p className="flex items-center text-2xl font-bold bg-gradient-to-r from-[#01b4e4] to-[#90cea1] bg-clip-text text-transparent">
              MovieQuest
              <span className="w-10 h-4 mt-1 rounded-full bg-gradient-to-r from-[#01b4e4] to-[#90cea1] mx-2 align-middle"></span>
            </p>
          </Link>
        </div>
        <Searchbar />
        <div>
          <FaHeart fill="#01b4e4" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
