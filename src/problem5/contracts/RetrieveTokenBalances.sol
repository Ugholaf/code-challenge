// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface IERC20 {
  function balanceOf(address wallet) external view returns (uint256);
}

contract RetrieveTokenBalances {
  struct TokenBalance {
    address token;
    uint256 balance;
  }

  function getBalances(address wallet, address[] memory tokens) public view returns(TokenBalance[] memory) {
    uint len = tokens.length;
    TokenBalance[] memory tokenBalances = new TokenBalance[](len);

    for (uint i = 0; i < len; i++) {
      address token = tokens[i];
      IERC20 erc20 = IERC20(token);
      uint256 balance = erc20.balanceOf(wallet);
      tokenBalances[i] = TokenBalance(token, balance);
    }
    return tokenBalances;
  }
}
