module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
        network_id: "*",
        host: "localhost",
        port: 8545,   // Different than the default below
        gas: 6712388,
        gasPrice: 65000000000,
    },
    rinkeby: {
        host: "localhost",
        port: 8545,
        network_id: "4", // Rinkeby ID 4
        from: "0xfb0ea2323b38cb18ac2759a6a0e55bb8ec7572ab", // account from which to deploy
        gas: 6712388,
        gasPrice: 65000000000,
    }
},
rpc: {
    host: "127.0.0.1",
    port: 
    8545
},
solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
