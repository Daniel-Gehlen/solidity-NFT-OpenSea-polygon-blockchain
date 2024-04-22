const NFT = artifacts.require("NFT");

contract("NFT", (accounts) => {
    it("should mint a new token", async () => {
        const nftInstance = await NFT.deployed();
        const tokenId = 1;
        const owner = accounts[0];
        await nftInstance.mint(owner, tokenId);

        const ownerOfToken = await nftInstance.ownerOf(tokenId);
        assert.equal(ownerOfToken, owner, "Owner of the token is not correct");
    });
});
