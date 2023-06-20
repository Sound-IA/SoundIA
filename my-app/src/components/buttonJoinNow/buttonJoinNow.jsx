import React from "react";
import { Link } from 'react-router-dom';


export function ButtonJoinNow() {
  return (
    <Link to="/join">
    <button className="w-32 h-14 mt-6 bg-[#1762A7] text-[#FFFFFF] text-base rounded-lg border-none cursor-pointer font-semibold">
      Join Now
    </button>
    </Link>
  );
};
