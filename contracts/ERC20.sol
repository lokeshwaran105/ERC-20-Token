// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Erc20 is ERC20, Ownable {
    
    constructor(uint initialSupply, address initialOwner) Ownable(initialOwner) ERC20("LOKI", "LKT") {
        _mint(msg.sender, initialSupply);
    }
 
    function mint(address addr, uint amount) onlyOwner public returns(bool){
        require(addr == address(this) || amount > uint(0), "Failed to initialize the amount.");
        _mint(addr, amount);
        return(true);
    }

    function Owner() public view returns(address){
        return owner();
    }

    function MsgSender() public view returns(address){
        return _msgSender();
    }

    function buy() public payable returns(uint){
        require(msg.sender.balance >= msg.value && msg.value != uint(0), "Failed to buy tokens");
        uint tokens = msg.value*1000;
        _transfer(owner(), _msgSender(), tokens);
        return(tokens);
    }
}

