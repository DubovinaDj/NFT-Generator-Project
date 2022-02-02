

/*
* @type import('hardhat/config').HardhatUserConfig
*/
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/*
task("deploy", "Deploy the smart contracts", async(taskArgs, hre) => {

  const Artwork = await hre.ethers.getContractFactory("NFTContract");
  const artwork = await Artwork.deploy("NFTContract", "AETHA", "ipfs://QmeUNiY1RMLm15bMQLF32k8NytgyAFrasSX2r6PFmGWoso");

  await artwork.deployed();

  await hre.run("verify:verify", {
    address: artwork.address,
    constructorArguments: [
      "NFTContract",
      "NFT",
      "ipfs://QmeUNiY1RMLm15bMQLF32k8NytgyAFrasSX2r6PFmGWoso"
    ]
  })

})
*/

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const { API_URL, PRIVATE_KEY, API_KEY } = process.env;
module.exports = {
  solidity: "0.8.0",
  networks: {
   rinkeby: {
     url: API_URL, //Infura url with projectId
     accounts: [`0x${PRIVATE_KEY}`] // add the account that will deploy the contract (private key)
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: API_KEY
  }
};
