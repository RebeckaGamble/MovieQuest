import React from "react";

function Tooltip({ children, tooltip }) {
  return (
    <div className="group relative inline-block">
      {children}
      <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-4 invisible text-[12px] group-hover:visible opacity-0 group-hover:opacity-100 transition p-1 rounded whitespace-nowrap bg-gray-700 text-white">
        {tooltip}
      </span>
    </div>
  );
}

export default Tooltip;
