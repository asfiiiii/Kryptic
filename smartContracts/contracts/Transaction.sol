// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Transactions {
    uint256 transactionCounter;

    event Transfer(
        address from,
        address reciever,
        uint amount,
        string message,
        string keyword,
        uint256 timestamp
    );

    struct TransferStruct {
        address from;
        address reciever;
        uint amount;
        string message;
        string keyword;
        uint256 timestamp;
    }

    TransferStruct[] public transactions;

    function addtoBlockchain ( address payable reciever, uint amount, string memory message, string memory keyword) public
    {
        transactionCounter++;
        transactions.push(TransferStruct(msg.sender, reciever, amount, message, keyword, block.timestamp));
        emit Transfer(msg.sender, reciever, amount, message, keyword, block.timestamp);
    }
    function getAllTransactions () public view returns( TransferStruct[] memory)
    {
        return transactions;
    }

   
    function getTransactionCount () public view returns(uint256) 
    {
        return transactionCounter;
    }

}