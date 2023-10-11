require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/n0GDx34iMqutcpUYvtuWR8nVyMXzIdC_",
      accounts: [
        "4ed35d6affdec572a7f483580eb3ae4adea0be8a6d4e13c79c15ee1e206eeda8",
      ],
    },
  },
};

// import "@nomiclabs/hardhat-waffle";

// export default {
//   solidity: "0.8.19",
//   networks: {
//     sepolia: {
//       url: "https://eth-sepolia.g.alchemy.com/v2/n0GDx34iMqutcpUYvtuWR8nVyMXzIdC_",
//       accounts: [
//         "4ed35d6affdec572a7f483580eb3ae4adea0be8a6d4e13c79c15ee1e206eeda8",
//       ],
//     },
//   },
// };
