"use client"
import { socialMedia } from "@/data";
import React from "react";

const Socials = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map(({ img, id, link }) => (
        <div
          onClick={() => window.open(link, "_blank")}
          key={id}
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <img src={img} alt="icons" width={20} height={20} />
        </div>
      ))}
    </div>
  );
};

export default Socials;
