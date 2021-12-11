/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FRAX, FRAXInterface } from "../FRAX";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "LogNote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "addAuth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "adjustDailyFraxLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender_",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad_",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dailyFraxLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "fraxMintedToday",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastMintRestart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "move",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "pull",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516112f63803806112f68339818101604052602081101561003357600080fd5b5051336000908152602081815260409182902060019081905582518084018452600a815269232920ac102a27a5a2a760b11b9083015282518084018452908152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f0b5e63856806857c7af67a3841d8148fce118228c7167c9e8705ab68578b5d9f818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101939093523060a0808501919091528251808503909101815260c0909301909152815191012060085569021e19e0c9bab24000006002556111bf806101376000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80637ecebe00116100f9578063b753a98c11610097578063d3fd35ec11610071578063d3fd35ec14610555578063d7f1bf1214610572578063dd62ed3e1461057a578063f2d5d56b146105a8576101b9565b8063b753a98c146104cd578063bb35783b146104f9578063bf353dbb1461052f576101b9565b80639c52a7f1116100d35780639c52a7f1146104295780639dc29fac1461044f5780639e16de341461047b578063a9059cbb146104a1576101b9565b80637ecebe00146103a15780638fcbaf0c146103c757806395d89b4114610421576101b9565b80633644e5151161016657806354fd4d501161014057806354fd4d501461034d57806365fae35e1461032757806370a0823114610355578063798247ae1461037b576101b9565b80633644e515146102f157806340c10f19146102f95780635422224e14610327576101b9565b806323b872dd1161019757806323b872dd1461029557806330adf81f146102cb578063313ce567146102d3576101b9565b806306fdde03146101be578063095ea7b31461023b57806318160ddd1461027b575b600080fd5b6101c66105d4565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102005781810151838201526020016101e8565b50505050905090810190601f16801561022d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102676004803603604081101561025157600080fd5b506001600160a01b03813516906020013561060d565b604080519115158252519081900360200190f35b610283610622565b60408051918252519081900360200190f35b610267600480360360608110156102ab57600080fd5b506001600160a01b03813581169160208101359091169060400135610628565b610283610807565b6102db61082b565b6040805160ff9092168252519081900360200190f35b610283610830565b6103256004803603604081101561030f57600080fd5b506001600160a01b038135169060200135610836565b005b6103256004803603602081101561033d57600080fd5b50356001600160a01b03166109f4565b6101c6610a6b565b6102836004803603602081101561036b57600080fd5b50356001600160a01b0316610a88565b6102836004803603602081101561039157600080fd5b50356001600160a01b0316610a9a565b610283600480360360208110156103b757600080fd5b50356001600160a01b0316610aac565b61032560048036036101008110156103de57600080fd5b506001600160a01b038135811691602081013590911690604081013590606081013590608081013515159060ff60a0820135169060c08101359060e00135610abe565b6101c6610de2565b6103256004803603602081101561043f57600080fd5b50356001600160a01b0316610e02565b6103256004803603604081101561046557600080fd5b506001600160a01b038135169060200135610e76565b6102836004803603602081101561049157600080fd5b50356001600160a01b0316611033565b610267600480360360408110156104b757600080fd5b506001600160a01b038135169060200135611045565b610325600480360360408110156104e357600080fd5b506001600160a01b038135169060200135611052565b6103256004803603606081101561050f57600080fd5b506001600160a01b03813581169160208101359091169060400135611062565b6102836004803603602081101561054557600080fd5b50356001600160a01b0316611073565b6103256004803603602081101561056b57600080fd5b5035611085565b6102836110e4565b6102836004803603604081101561059057600080fd5b506001600160a01b03813581169160200135166110ea565b610325600480360360408110156105be57600080fd5b506001600160a01b0381351690602001356110f6565b6040518060400160405280600a81526020017f4652415820544f4b454e0000000000000000000000000000000000000000000081525081565b60006106198383611101565b90505b92915050565b60015481565b6001600160a01b038316600090815260036020526040812054821115610695576040805162461bcd60e51b815260206004820152601960248201527f467261782f696e73756666696369656e742d62616c616e636500000000000000604482015290519081900360640190fd5b6001600160a01b03841633148015906106b957506000196106b68533611167565b14155b1561075457816106c98533611167565b101561071c576040805162461bcd60e51b815260206004820152601b60248201527f467261782f696e73756666696369656e742d616c6c6f77616e63650000000000604482015290519081900360640190fd5b61072f6107298533611167565b83611192565b6001600160a01b03851660009081526004602090815260408083203384529091529020555b6001600160a01b0384166000908152600360205260409020546107779083611192565b6001600160a01b0380861660009081526003602052604080822093909355908516815220546107a690836111a2565b6001600160a01b0380851660008181526003602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060019392505050565b7fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb81565b601281565b60085481565b3360009081526020819052604090205461096357600254336000908152600760205260409020546108689083906111a2565b11158061089f5750336000908152600660205260409020546119649061088f904390611192565b1015801561089f57506002548111155b6108f0576040805162461bcd60e51b815260206004820152601560248201527f4f766572206461696c792046726178204c696d69740000000000000000000000604482015290519081900360640190fd5b336000908152600660205260409020546119649061090f904390611192565b106109385733600090815260076020908152604080832084905560069091529020439055610963565b3360009081526007602052604090205461095290826111a2565b336000908152600760205260409020555b6001600160a01b03821660009081526003602052604090205461098690826111a2565b6001600160a01b0383166000908152600360205260409020556001546109ac90826111a2565b6001556040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b33600090815260208190526040902054600114610a4e576040805162461bcd60e51b8152602060048201526013602482015272119c985e0bdb9bdd0b585d5d1a1bdc9a5e9959606a1b604482015290519081900360640190fd5b6001600160a01b0316600090815260208190526040902060019055565b604051806040016040528060018152602001603160f81b81525081565b60036020526000908152604090205481565b60066020526000908152604090205481565b60056020526000908152604090205481565b600854604080517fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb6020808301919091526001600160a01b03808d16838501819052908c166060840152608083018b905260a083018a905288151560c0808501919091528451808503909101815260e08401855280519083012061190160f01b61010085015261010284019590955261012280840195909552835180840390950185526101429092019092528251929091019190912090610bc6576040805162461bcd60e51b815260206004820152601660248201527f467261782f696e76616c69642d616464726573732d3000000000000000000000604482015290519081900360640190fd5b60018185858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610c20573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614610c8f576040805162461bcd60e51b815260206004820152601360248201527f467261782f696e76616c69642d7065726d697400000000000000000000000000604482015290519081900360640190fd5b851580610c9c5750854211155b610ced576040805162461bcd60e51b815260206004820152601360248201527f467261782f7065726d69742d6578706972656400000000000000000000000000604482015290519081900360640190fd5b6001600160a01b03891660009081526005602052604090208054600181019091558714610d61576040805162461bcd60e51b815260206004820152601260248201527f467261782f696e76616c69642d6e6f6e63650000000000000000000000000000604482015290519081900360640190fd5b600085610d6f576000610d73565b6000195b6001600160a01b03808c166000818152600460209081526040808320948f168084529482529182902085905581518581529151949550929391927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92592918290030190a350505050505050505050565b6040518060400160405280600481526020016308ca482b60e31b81525081565b33600090815260208190526040902054600114610e5c576040805162461bcd60e51b8152602060048201526013602482015272119c985e0bdb9bdd0b585d5d1a1bdc9a5e9959606a1b604482015290519081900360640190fd5b6001600160a01b0316600090815260208190526040812055565b6001600160a01b038216600090815260036020526040902054811115610ee3576040805162461bcd60e51b815260206004820152601960248201527f467261782f696e73756666696369656e742d62616c616e636500000000000000604482015290519081900360640190fd5b6001600160a01b0382163314801590610f075750600019610f048333611167565b14155b15610fa25780610f178333611167565b1015610f6a576040805162461bcd60e51b815260206004820152601b60248201527f467261782f696e73756666696369656e742d616c6c6f77616e63650000000000604482015290519081900360640190fd5b610f7d610f778333611167565b82611192565b6001600160a01b03831660009081526004602090815260408083203384529091529020555b6001600160a01b038216600090815260036020526040902054610fc59082611192565b6001600160a01b038316600090815260036020526040902055600154610feb9082611192565b6001556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60076020526000908152604090205481565b6000610619338484610628565b61105d338383610628565b505050565b61106d838383610628565b50505050565b60006020819052908152604090205481565b336000908152602081905260409020546001146110df576040805162461bcd60e51b8152602060048201526013602482015272119c985e0bdb9bdd0b585d5d1a1bdc9a5e9959606a1b604482015290519081900360640190fd5b600255565b60025481565b60006106198383611167565b61105d823383610628565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b8082038281111561061c57600080fd5b8082018281101561061c57600080fdfea164736f6c6343000705000a";

export class FRAX__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    chainId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FRAX> {
    return super.deploy(chainId_, overrides || {}) as Promise<FRAX>;
  }
  getDeployTransaction(
    chainId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(chainId_, overrides || {});
  }
  attach(address: string): FRAX {
    return super.attach(address) as FRAX;
  }
  connect(signer: Signer): FRAX__factory {
    return super.connect(signer) as FRAX__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FRAXInterface {
    return new utils.Interface(_abi) as FRAXInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FRAX {
    return new Contract(address, _abi, signerOrProvider) as FRAX;
  }
}
