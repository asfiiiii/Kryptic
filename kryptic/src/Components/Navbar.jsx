import { useState, useContext } from "react";
import logo from "../images/logo.png";
import ToggleButton from "@iconscout/react-unicons/icons/uil-bars";
import CrossButton from "@iconscout/react-unicons/icons/uil-times";
import Rocket from "@iconscout/react-unicons/icons/uil-rocket";
import { TransactionContext } from "../Context/TransactionContext";

const ListItem = ({ listVAlue, classProp }) => {
  return <li className={`mx-4 cursor-pointer ${classProp}`}>{listVAlue}</li>;
};

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="w-full flex flex-initial md:justify-center justify-between p-4">
      <div className="md:flex-[0.7] flex-initial  mt-2 justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <ul className="text-white md:flex hidden flex-initial justify-center items-center">
        {["Market", "Exhange", "Wallet", "About", "Contact"].map(
          (item, index) => (
            <ListItem
              listVAlue={item}
              key={index}
              classProp="text-lg font-semibold"
            />
          )
        )}

        {!currentAccount && (
          <li className="bg-blue-800 text-white font-semibold rounded-full px-4 py-2 ml-3">
            Login <Rocket className="inline-block ml-2 mb-1" size="20" />
          </li>
        )}
      </ul>
      <div className="md:hidden">
        {!toggle ? (
          <ToggleButton
            className="text-white md:hidden flex-initial"
            size="30"
            onClick={() => setToggle(true)}
          />
        ) : (
          <CrossButton
            className="text-white md:hidden flex-initial"
            size="30"
            onClick={() => setToggle(false)}
          />
        )}
      </div>
      {toggle && (
        <ul
          className="z-10 fixed top-0 -right-2  text-white blue-glassmorphism h-screen 
            w-[70vw] md:hidden flex flex-col  justify-start p-4 rounded-lg shadow-3xl list-none"
        >
          <li>
            <CrossButton
              className="text-white mr-10 "
              size="30"
              onClick={() => setToggle(false)}
            />
          </li>
          {["Market", "Exhange", "Wallet", "About", "Contact"].map(
            (item, index) => (
              <ListItem
                listVAlue={item}
                key={index}
                classProp="text-lg my-3 font-semibold shadow-2xl"
              />
            )
          )}
          {!currentAccount && (
            <li className="bg-blue-600 text-white font-semibold rounded-full px-2 py-2 mx-4 my-4">
              Login
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
