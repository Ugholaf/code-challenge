import { ethers } from "ethers";

// $SWTH token contract
const swthTokenContract: string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

// Initialize a provider with the Binance Smart Chain network, retrieved from https://docs.bscscan.com/misc-tools-and-utilities/public-rpc-nodes
const provider = new ethers.JsonRpcProvider(
  "https://bsc-dataseed1.binance.org/"
);

// Methods to interact with the contract
const abi: string[] = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
];

// Create a contract
const contract = new ethers.Contract(swthTokenContract, abi, provider);

// Contract addresses of the $SWTH token
const addresses: string[] = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

// Retrieve the $SWTH holders
const retrieveHolders = async () => {
  // Get the number of decimal places used by the token
  const decimals = await contract.decimals();
  for (const address of addresses) {
    const balance = await contract.balanceOf(address);
    const formatter = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: Number(decimals),
    });
    const formattedBalance = formatter.format(
      Number(ethers.formatUnits(balance, decimals))
    );
    console.log(`${address} ${formattedBalance.toLocaleString()}`);
  }
};

retrieveHolders();
