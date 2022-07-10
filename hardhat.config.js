require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

// eslint-disable-next-line prefer-destructuring
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  solidity: '0.8.8',
};
