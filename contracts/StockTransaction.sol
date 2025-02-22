// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StockTransaction {
    struct Transaction {
        address buyer;
        string stockSymbol;
        uint256 quantity;
        uint256 price;
        uint256 timestamp;
    }

    Transaction[] public transactions;

    event NewTransaction(
        address indexed buyer,
        string stockSymbol,
        uint256 quantity,
        uint256 price,
        uint256 timestamp
    );

    function buyStock(string memory _symbol, uint256 _quantity, uint256 _price) public {
        transactions.push(Transaction(msg.sender, _symbol, _quantity, _price, block.timestamp));
        emit NewTransaction(msg.sender, _symbol, _quantity, _price, block.timestamp);
    }

    function getTransaction(uint256 index) public view returns (Transaction memory) {
        require(index < transactions.length, "Invalid index");
        return transactions[index];
    }

    function getTransactionCount() public view returns (uint256) {
        return transactions.length;
    }
}
