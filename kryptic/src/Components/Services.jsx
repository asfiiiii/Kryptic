import React from "react";
import Sheild from "@iconscout/react-unicons/icons/uil-shield-check";
import Exchange from "@iconscout/react-unicons/icons/uil-money-stack";
import Transaction from "@iconscout/react-unicons/icons/uil-transaction";

const Service = ({ color, title, desc, icon }) => {
  return (
    <div className="border-none white-glassmorphism flex items-center justify-center gap-4 p-4 my-2 hover:shadow-2xl ">
      <div className="w-[50px]">
        <div
          className={`w-10 h-10 rounded-3xl flex items-center justify-center ${color} mx-2 `}
        >
          {icon}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-white text-xl font-semibold mb-1">{title}</h1>
        <p className="text-white text-xs md:text-sm max-w-[32rem] text-start font-thin sm:w-11/12 ">
          {" "}
          {desc}
        </p>
      </div>
    </div>
  );
};
function Services() {
  return (
    <div className="flex flex-col w-full p-4 py-6  md:flex-row gap-5 items-center justify-around gradient-bg-services">
      <div className=" mx-2">
        <p className="text-white text-3xl  font-semibold ">
          Services That we Offer <br /> and continue to improve
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-2">
        <Service
          color={"bg-blue-500"}
          title={"Security Gurenteed"}
          desc={
            "Security is gurenteed. We use the best security protocols. We maintain the privacy of our users.We also have a 24/7 support team."
          }
          icon={<Sheild className="text-white" size="24" />}
        />
        <Service
          color={"bg-purple-500"}
          title={"Best Exchange Rates"}
          desc={
            " We have the best exchange rates. We offer the best rates for our users. We also have a 24/7 support team."
          }
          icon={<Exchange className="text-white" size="20" />}
        />
        <Service
          color={"bg-red-500"}
          title={"Fastest Transactions"}
          desc={
            "Security is gurenteed. We use the best security protocols. We maintain the privacy of our users.We also have a 24/7 support team."
          }
          icon={<Transaction className="text-white" size="22" />}
        />
      </div>
    </div>
  );
}

export default Services;
