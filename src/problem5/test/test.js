const { ethers } = require("ethers");

const RetrieveTokenBalances = artifacts.require("RetrieveTokenBalances.sol");

contract("RetrieveTokenBalances", () => {
  it("Should retrieve token balances", () => {
    const ADDR = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468"; // your contract address
    // const ABI = ["function balanceOf(address account) view returns (uint256)"]; // your contract ABI
    const ABI = [
      "function getBalances(address wallet, address[] memory tokens) public view returns(TokenBalance[] memory)",
      "struct TokenBalance { address token; uint256 balance; }",
    ];
    const ADDRESS = ""; // some wallet address with token balance
    const TOKENS = [
      // token contract addresses
      "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
      "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    ];

    // you can use your own RPC provider url (no need to deploy to mainnet)
    const provider = new ethers.JsonRpcProvider(
      "https://bsc-dataseed1.binance.org/"
    );

    const test = async () => {
      const contract = new ethers.Contract(ADDR, ABI, provider);

      const balances = await contract.getBalances(ADDRESS, TOKENS);

      return balances;
    };

    test().then(console.log);
  });
});
