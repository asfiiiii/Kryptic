import { useContext } from "react";

import { TransactionContext } from "../Context/TransactionContext";
import { shortenAddress } from "./utils/shortenAddress";
import useFetch from "../CustomHooks/UseFetch";
import Loader from "./Loader";

const TransactionCard = ({
  addressto,
  addressFrom,
  amount,
  message,
  timestamp,
  keyword,
}) => {
  const getGiphy = useFetch({ keyword });
  return (
    <div
      className=" flex flex-col 
    2xl:min-w-[470px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[340px]
    blue-glassmorphism p-4 rounded-xl
    text-start

    "
    >
      <p className="text-gray-300 font-light">
        <span className="font-semibold mr-1">Send to:</span>{" "}
        {shortenAddress(addressto)}
      </p>
      <p className="text-gray-300 font-light">
        <span className="font-semibold mr-1">From:</span>{" "}
        {shortenAddress(addressFrom)}
      </p>
      <p className="text-gray-300 font-light">
        <span className="font-semibold mr-1">Amount:</span> {amount} ETH
      </p>
      <p className="text-gray-300 font-light">
        <span className="font-semibold mr-1">Message:</span> {message}
      </p>
      <div className="w-full border border-gray-600 my-4"></div>
      <img src={getGiphy} alt="giphy" className=" h-60 object-cover m-2 mt-3" />
      <div className="w-full text-sm white-glassmorphism border-none text-white text-center p-2 rounded-xl mt-3">
        {timestamp}
      </div>
    </div>
  );
};

function Transactions() {
  const { transactions, currentAccount, transactionLoading } =
    useContext(TransactionContext);

  return (
    <div className=" gradient-bg-transactions p-10 font-semibold">
      {currentAccount && (
        <div>
          <div>
            <h2 className="text-white text-3xl">Recent Transactions</h2>
          </div>
          {transactionLoading ? (
            <div className="my-5">
              <Loader
                message={"Loading Recent Transactions"}
                size={"h-14 w-14"}
              />
            </div>
          ) : (
            <div className=" flex flex-wrap  gap-4 m-4 my-10 items-center justify-center">
              {transactions.reverse().map((transaction, i) => (
                <TransactionCard key={i} {...transaction} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Transactions;
