module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "^0.4.21", // A version or constraint - Ex. "^0.5.0"
                         // Can be set to "native" to use a native solc or
                         // "pragma" which attempts to autodetect compiler versions
      docker: 0, // Use a version obtained through docker
      parser: "solcjs",  // Leverages solc-js purely for speedy parsing
      settings: {
        optimizer: {
          enabled: 1,
          runs: 1   // Optimize for how many times you intend to run the code
        },
        evmVersion:  "byzantium"// Default: "istanbul"
      },
      modelCheckerSettings: {
        // contains options for SMTChecker
      }
    }
  }
};