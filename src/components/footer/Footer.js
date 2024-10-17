import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d253f] text-white">
      <div className="max-w-[90rem] flex flex-col py-6 md:flex-row mx-auto px-4 2xl:px-0 relative">
        <div className="flex justify-between w-full">
          <div className="absolute right-4 2xl:right-0">
            <Link to={"/"}>
              <p className="flex flex-row tracking-tighter uppercase items-center text-lg font-bold bg-gradient-to-r  from-[#01b4e4] to-[#90cea1] bg-clip-text text-transparent">
                Movie
                <span className="w-[38px] mt-[0.5px] h-3 rounded-full hover:bg-gradient-to-l bg-gradient-to-r from-[#01b4e4] to-[#90cea1] ml-[4px] align-middle"></span>
              </p>
              <p className="flex mt-[-9px] tracking-tighter uppercase flex-row items-center text-lg font-bold bg-gradient-to-r from-[#01b4e4] to-[#90cea1] bg-clip-text text-transparent">
                <span className="w-[38px] mt-[0.5px] h-3 rounded-full hover:bg-gradient-to-l bg-gradient-to-r from-[#01b4e4] to-[#90cea1] mr-[4px] align-middle"></span>
                Quest
              </p>
            </Link>
          </div>

          <div className="flex flex-wrap gap-10 xl:gap-[100px] pt-4 md:pt-0 md:pr-10">
            <div>
              <h4 className="font-semibold">Company</h4>
              <div className="text-[14px]">
                <p>About</p>
                <p>FAQ</p>
                <p>Work</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <div className="text-[14px]">
                <p>Ölmeväge 14</p>
                <p>123 37</p>
                <p>Stockholm</p>
                <p>info@moviequest.com</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 ">
              <h4 className="font-semibold">Social Media</h4>
              <div className="flex flex-row items-center gap-2">
                <FaInstagram size={22} />
                <FaFacebook size={20} />
                <FaTwitter size={20} />
                <FaLinkedin size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-4 text-white">
        <div className="px-4 2xl:px-0 max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <Link to={"/"}>
              <img
                className="w-14 h-14"
                src="/img/tmdb_logo.svg"
                alt="TMDB Logo"
              />
            </Link>
            <p className="text-center max-w-[400px] mx-auto pt-4 md:pt-0 mt-4 text-[10px]">
              "This [website, program, service, application, product] uses TMDB
              and the TMDB APIs but is not endorsed, certified, or otherwise
              approved by TMDB."
            </p>
          </div>

          <p className="text-center pt-4">
            © {currentYear} MovieQuest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
