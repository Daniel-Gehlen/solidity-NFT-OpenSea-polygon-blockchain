// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

abstract contract ERC721 is ERC721Enumerable {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function _mint(address to, uint256 tokenId) internal virtual {
        _safeMint(to, tokenId);
    }
}
