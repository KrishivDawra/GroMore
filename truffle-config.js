const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    mumbai: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
        }),
      network_id: 80001,
      gas: 5000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Ganache local network
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
