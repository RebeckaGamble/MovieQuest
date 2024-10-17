import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-[#0d253f] h-auto min-h-screen">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center pt-40 px-4 h-full text-white flex flex-col">
          <p className="text-[20px] tracking-wider">
            Sorry, the page you're looking for can't be found!
          </p>
          <Link className="underline text-white pt-4" to="/">
            Go back{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
