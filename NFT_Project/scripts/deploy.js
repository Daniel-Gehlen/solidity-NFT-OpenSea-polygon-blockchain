const NFT = artifacts.require("NFT");

module.exports = async function (callback) {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Deploying the contract from account:', accounts[0]);

        const nftInstance = await NFT.deployed();

        // You can perform additional operations here, such as minting tokens

        console.log('Contract deployed at address:', nftInstance.address);
    } catch (error) {
        console.error('An error occurred during deployment:', error);
    }
    callback();
};
