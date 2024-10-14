import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d253f] text-white pt-6">
      <div className="max-w-[90rem] mx-auto px-4 2xl:px-0 border-t">
        <Link to="/">
          <img className="w-14 h-14" src="/logo.webp" alt="MovieQuest logo" />
        </Link>

        <div className="flex flex-row gap-6 pb-6">
          <ul>
            <h4 className="font-semibold">more</h4>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
          <ul>
            <h4 className="font-semibold">more</h4>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </div>
      </div>
      <div className="bg-black py-4 text-white ">
        <div className="px-4 max-w-[90rem] mx-auto">
          <div className="flex justify-between">
            <Link to={"/"}>
              <img
                className="w-14 h-14"
                src="/img/tmdb_logo.svg"
                alt="TMDB Logo"
              />
            </Link>
            <p className="text-center max-w-[600px] mx-auto">
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
