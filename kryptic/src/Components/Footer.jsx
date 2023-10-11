import React from "react";
import logo from "../images/logo.png";
import Mail from "@iconscout/react-unicons/icons/uil-fast-mail";

function footer() {
  return (
    <div className="w-full flex flex-col justify-between  items-center px-10 py-6 pt-15 gradient-bg-footer">
      <div className="flex items-center justify-center md:justify-between w-full py-3">
        <div className=" flex-initial  mt-2 justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="hidden md:block">
          <ul className="text-white flex pt-1  justify-center items-center">
            {["Market", "Exhange", "Wallet", "About", "Contact"].map(
              (item, index) => (
                <li className="mx-4  cursor-pointer" key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="my-2">
        <p className=" text-sm text-gray-300 font-light">
          For balance Inquiry and Assistance <br /> Contact us at
        </p>
        <a
          href=""
          className=" flex items-center gap-2 text-sm text-gray-300 font-semibold"
        >
          <Mail className=" " /> asfarma2815@gmail.com
        </a>
      </div>
      <div className="w-full border-[0.1px] border-gray-800 my-1 "></div>
      <div className="flex justify-between p-4 w-full">
        <p className=" text-sm text-gray-300">Asfar Munir Asfi ™ 2023</p>
        <p className=" text-sm text-gray-300">All Rights Reserved</p>
      </div>
    </div>
  );
}

export default footer;
