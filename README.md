# ERC-20-Token

MyERC20Token is an ERC20 token implementation built using Solidity and leveraging OpenZeppelin's contracts. The project aims to provide a standard-compliant token with the following additional features:

## Minting Functionality: 
The mint function allows the contract owner to mint additional tokens. This feature can be useful for token distribution, rewards, or other purposes.
## Owner Management:
The contract inherits from the Ownable contract, providing functionality for managing ownership. The onlyOwner modifier is used to restrict certain functions to be callable only by the owner.

## Technologies Used:
1) Solidity 
2) OpenZeppelin

## Installation:
To install and set up the project locally, follow these steps:

### Clone the repository:
git clone https://github.com/lokeshwaran105/ERC-20-Token
### Navigate to the project directory:
cd MyERC20Token
### Install dependencies:
npm install

## Testing
The project includes Chai tests to ensure the correctness and robustness of the ERC20 token implementation. These tests cover various aspects of the contract's functionality, including minting, ownership management, and compliance with the ERC20 standard.

### To run the tests, follow these steps:

1) Ensure you have Node.js and npm installed on your machine.
2) Navigate to the project directory.
3) Run the tests: npm test
