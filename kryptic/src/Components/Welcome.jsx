import { useContext } from "react";
import Wallet from "@iconscout/react-unicons/icons/uil-wallet";
import Ethereum from "@iconscout/react-unicons/icons/uil-bitcoin-sign";
import Exclaimation from "@iconscout/react-unicons/icons/uil-exclamation-circle";
import Wolf from "@iconscout/react-unicons/icons/uil-bitcoin-sign";
import Loader from "./Loader";
import { TransactionContext } from "../Context/TransactionContext";
import { shortenAddress } from "./utils/shortenAddress";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const InputFeild = ({ placeholder, name, inputType, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={inputType}
      name={name}
      onChange={(e) => handleChange(e.target.value, name)}
      className="white-glassmorphism px-3 py-2 border-none w-full text-gray-400 font-light rounded-md  outline-none my-2"
    />
  );
};

const hehe = true;

function Welcome() {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressto, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressto || !amount || !keyword || !message) return;
    sendTransaction();
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-0 md:mt-4">
      <div className="flex md:flex-col  justify-center items-center p-10 sm:py-8">
        <div className="flex flex-1 flex-col justify-start items-start">
          <h1
            className="text-3xl sm:text-4xl text-white font-semibold text-start"
            style={{ textTransform: "uppercase" }}
          >
            Send Crypto <br /> across the globe.
          </h1>
          <p className="text-white font-light my-10 sm:mt-7 text-start">
            Explore the world of crypto, Buy and sell crypto Currencies with
            kryptic. <br />
          </p>
          {!currentAccount ? (
            <button
              className="bg-blue-800 text-white font-semibold w-full rounded-full px-4 py-2"
              type="button"
              onClick={connectWallet}
            >
              Connect Wallet{" "}
              <Wallet className="inline-block ml-2 mb-1" size="20" />
            </button>
          ) : (
            <p className="text-white text-xl font-medium flex items-center gap-2">
              <img
                src="/ethereum.png"
                alt="Ethereum Logo"
                width="40"
                height="40"
                className=""
              />
              You are connected to your Ethereum wallet.
            </p>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={` rounded-tl-xl  ${commonStyles}`}>
              {" "}
              Reliability
            </div>
            <div className={`  ${commonStyles}`}> Security</div>
            <div className={` rounded-tr-xl  ${commonStyles}`}> ethereum</div>
            <div className={` rounded-bl-xl  ${commonStyles}`}> Web 3.0</div>

            <div className={`  ${commonStyles}`}> Low Fee</div>
            <div className={` rounded-br-xl ${commonStyles}`}> Blockchain</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start ml-6 m-4">
        <div className="flex flex-col items-start justify-between p-2 mx-2 w-72 h-40  eth-card rounded-2xl">
          <div className="flex  justify-between w-full">
            <div className="w-10 h-10 rounded-3xl flex items-center justify-center  border-white border-2">
              <Ethereum className="text-white" size="20" />
            </div>
            <Exclaimation className="text-white " size="20" />
          </div>
          <div className=" flex items-start flex-col">
            <p className=" text-sm text-white font-light ">
              {shortenAddress(currentAccount)}
            </p>
            <p className=" text-xl text-white font-semibold ">Ethereum</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start blue-glassmorphism mt-4 w-[334px] p-3">
          <InputFeild
            placeholder="Address to"
            name="addressto"
            inputType="text"
            handleChange={handleChange}
          />
          <InputFeild
            placeholder="Amount (ETH)"
            name="amount"
            inputType="number"
            handleChange={handleChange}
          />
          <InputFeild
            placeholder="Keyword (GIF)"
            name="keyword"
            inputType="text"
            handleChange={handleChange}
          />
          <InputFeild
            placeholder="Message"
            name="message"
            inputType="text"
            handleChange={handleChange}
          />

          <div className="w-full my-1 border border-gray-600" />

          <div className="w-full mt-2">
            {isLoading ? (
              <Loader />
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full text-center p-2 border border-gray-700 text-gray-400 rounded-lg  font-semibold"
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
