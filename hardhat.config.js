/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require('hardhat-gas-reporter');

module.exports = {
  solidity: "0.8.20",

  gasReporter: {
    enabled: true,
    noColors: true,
    currency: "INR",
    outFile: "GasReport.txt"
  }
};
