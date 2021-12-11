/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockUSDC, MockUSDCInterface } from "../MockUSDC";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "account",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "to",
        type: "address",
      },
    ],
    name: "faucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600481526020017f55534443000000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f555344430000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000372565b508060049080519060200190620000af92919062000372565b505050620000d2620000c66200011860201b60201c565b6200012060201b60201c565b6200011233620000e7620001e660201b60201c565b600a620000f591906200057d565b6305f5e100620001069190620006ba565b620001ef60201b60201c565b620007d3565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000262576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002599062000475565b60405180910390fd5b62000276600083836200036860201b60201c565b80600260008282546200028a9190620004c5565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002e19190620004c5565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000348919062000497565b60405180910390a362000364600083836200036d60201b60201c565b5050565b505050565b505050565b828054620003809062000732565b90600052602060002090601f016020900481019282620003a45760008555620003f0565b82601f10620003bf57805160ff1916838001178555620003f0565b82800160010185558215620003f0579182015b82811115620003ef578251825591602001919060010190620003d2565b5b509050620003ff919062000403565b5090565b5b808211156200041e57600081600090555060010162000404565b5090565b600062000431601f83620004b4565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b6200046f816200071b565b82525050565b60006020820190508181036000830152620004908162000422565b9050919050565b6000602082019050620004ae600083018462000464565b92915050565b600082825260208201905092915050565b6000620004d2826200071b565b9150620004df836200071b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000517576200051662000768565b5b828201905092915050565b6000808291508390505b600185111562000574578086048111156200054c576200054b62000768565b5b60018516156200055c5780820291505b80810290506200056c85620007c6565b94506200052c565b94509492505050565b60006200058a826200071b565b9150620005978362000725565b9250620005c67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620005ce565b905092915050565b600082620005e05760019050620006b3565b81620005f05760009050620006b3565b816001811462000609576002811462000614576200064a565b6001915050620006b3565b60ff84111562000629576200062862000768565b5b8360020a91508482111562000643576200064262000768565b5b50620006b3565b5060208310610133831016604e8410600b8410161715620006845782820a9050838111156200067e576200067d62000768565b5b620006b3565b62000693848484600162000522565b92509050818404811115620006ad57620006ac62000768565b5b81810290505b9392505050565b6000620006c7826200071b565b9150620006d4836200071b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000710576200070f62000768565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b600060028204905060018216806200074b57607f821691505b6020821081141562000762576200076162000797565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b61208680620007e36000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063a457c2d711610071578063a457c2d7146102cf578063a9059cbb146102ff578063b86d1d631461032f578063dd62ed3e1461034b578063f2fde38b1461037b57610116565b8063715018a61461026d57806379cc6790146102775780638da5cb5b1461029357806395d89b41146102b157610116565b8063313ce567116100e9578063313ce567146101b757806339509351146101d557806340c10f191461020557806342966c681461022157806370a082311461023d57610116565b806306fdde031461011b578063095ea7b31461013957806318160ddd1461016957806323b872dd14610187575b600080fd5b610123610397565b6040516101309190611a83565b60405180910390f35b610153600480360381019061014e9190611491565b610429565b6040516101609190611a68565b60405180910390f35b610171610447565b60405161017e9190611c45565b60405180910390f35b6101a1600480360381019061019c9190611442565b610451565b6040516101ae9190611a68565b60405180910390f35b6101bf610549565b6040516101cc9190611c60565b60405180910390f35b6101ef60048036038101906101ea9190611491565b610552565b6040516101fc9190611a68565b60405180910390f35b61021f600480360381019061021a9190611491565b6105fe565b005b61023b600480360381019061023691906114cd565b610688565b005b610257600480360381019061025291906113dd565b61069c565b6040516102649190611c45565b60405180910390f35b6102756106e4565b005b610291600480360381019061028c9190611491565b61076c565b005b61029b6107e7565b6040516102a89190611a4d565b60405180910390f35b6102b9610811565b6040516102c69190611a83565b60405180910390f35b6102e960048036038101906102e49190611491565b6108a3565b6040516102f69190611a68565b60405180910390f35b61031960048036038101906103149190611491565b61098e565b6040516103269190611a68565b60405180910390f35b610349600480360381019061034491906113dd565b6109ac565b005b61036560048036038101906103609190611406565b6109d9565b6040516103729190611c45565b60405180910390f35b610395600480360381019061039091906113dd565b610a60565b005b6060600380546103a690611f74565b80601f01602080910402602001604051908101604052809291908181526020018280546103d290611f74565b801561041f5780601f106103f45761010080835404028352916020019161041f565b820191906000526020600020905b81548152906001019060200180831161040257829003601f168201915b5050505050905090565b600061043d610436610b58565b8484610b60565b6001905092915050565b6000600254905090565b600061045e848484610d2b565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006104a9610b58565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610529576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611b45565b60405180910390fd5b61053d85610535610b58565b858403610b60565b60019150509392505050565b60006012905090565b60006105f461055f610b58565b84846001600061056d610b58565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105ef9190611c97565b610b60565b6001905092915050565b610606610b58565b73ffffffffffffffffffffffffffffffffffffffff166106246107e7565b73ffffffffffffffffffffffffffffffffffffffff161461067a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067190611b65565b60405180910390fd5b6106848282610fac565b5050565b610699610693610b58565b8261110c565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106ec610b58565b73ffffffffffffffffffffffffffffffffffffffff1661070a6107e7565b73ffffffffffffffffffffffffffffffffffffffff1614610760576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075790611b65565b60405180910390fd5b61076a60006112e3565b565b600061077f8361077a610b58565b6109d9565b9050818110156107c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bb90611b85565b60405180910390fd5b6107d8836107d0610b58565b848403610b60565b6107e2838361110c565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461082090611f74565b80601f016020809104026020016040519081016040528092919081815260200182805461084c90611f74565b80156108995780601f1061086e57610100808354040283529160200191610899565b820191906000526020600020905b81548152906001019060200180831161087c57829003601f168201915b5050505050905090565b600080600160006108b2610b58565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096690611c05565b60405180910390fd5b61098361097a610b58565b85858403610b60565b600191505092915050565b60006109a261099b610b58565b8484610d2b565b6001905092915050565b6109d6816109b8610549565b600a6109c49190611d40565b6103e86109d19190611e5e565b610fac565b50565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610a68610b58565b73ffffffffffffffffffffffffffffffffffffffff16610a866107e7565b73ffffffffffffffffffffffffffffffffffffffff1614610adc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad390611b65565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4390611ae5565b60405180910390fd5b610b55816112e3565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc790611be5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3790611b05565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610d1e9190611c45565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9290611bc5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0290611aa5565b60405180910390fd5b610e168383836113a9565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9390611b25565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f2f9190611c97565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f939190611c45565b60405180910390a3610fa68484846113ae565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561101c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101390611c25565b60405180910390fd5b611028600083836113a9565b806002600082825461103a9190611c97565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461108f9190611c97565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110f49190611c45565b60405180910390a3611108600083836113ae565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561117c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117390611ba5565b60405180910390fd5b611188826000836113a9565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561120e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120590611ac5565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546112659190611eb8565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112ca9190611c45565b60405180910390a36112de836000846113ae565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b6000813590506113c281612022565b92915050565b6000813590506113d781612039565b92915050565b6000602082840312156113ef57600080fd5b60006113fd848285016113b3565b91505092915050565b6000806040838503121561141957600080fd5b6000611427858286016113b3565b9250506020611438858286016113b3565b9150509250929050565b60008060006060848603121561145757600080fd5b6000611465868287016113b3565b9350506020611476868287016113b3565b9250506040611487868287016113c8565b9150509250925092565b600080604083850312156114a457600080fd5b60006114b2858286016113b3565b92505060206114c3858286016113c8565b9150509250929050565b6000602082840312156114df57600080fd5b60006114ed848285016113c8565b91505092915050565b6114ff81611eec565b82525050565b61150e81611efe565b82525050565b600061151f82611c7b565b6115298185611c86565b9350611539818560208601611f41565b61154281612004565b840191505092915050565b600061155a602383611c86565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006115c0602283611c86565b91507f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008301527f63650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611626602683611c86565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061168c602283611c86565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006116f2602683611c86565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611758602883611c86565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b60006117be602083611c86565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006117fe602483611c86565b91507f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760008301527f616e6365000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611864602183611c86565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006118ca602583611c86565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611930602483611c86565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611996602583611c86565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006119fc601f83611c86565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b611a3881611f2a565b82525050565b611a4781611f34565b82525050565b6000602082019050611a6260008301846114f6565b92915050565b6000602082019050611a7d6000830184611505565b92915050565b60006020820190508181036000830152611a9d8184611514565b905092915050565b60006020820190508181036000830152611abe8161154d565b9050919050565b60006020820190508181036000830152611ade816115b3565b9050919050565b60006020820190508181036000830152611afe81611619565b9050919050565b60006020820190508181036000830152611b1e8161167f565b9050919050565b60006020820190508181036000830152611b3e816116e5565b9050919050565b60006020820190508181036000830152611b5e8161174b565b9050919050565b60006020820190508181036000830152611b7e816117b1565b9050919050565b60006020820190508181036000830152611b9e816117f1565b9050919050565b60006020820190508181036000830152611bbe81611857565b9050919050565b60006020820190508181036000830152611bde816118bd565b9050919050565b60006020820190508181036000830152611bfe81611923565b9050919050565b60006020820190508181036000830152611c1e81611989565b9050919050565b60006020820190508181036000830152611c3e816119ef565b9050919050565b6000602082019050611c5a6000830184611a2f565b92915050565b6000602082019050611c756000830184611a3e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611ca282611f2a565b9150611cad83611f2a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ce257611ce1611fa6565b5b828201905092915050565b6000808291508390505b6001851115611d3757808604811115611d1357611d12611fa6565b5b6001851615611d225780820291505b8081029050611d3085612015565b9450611cf7565b94509492505050565b6000611d4b82611f2a565b9150611d5683611f34565b9250611d837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611d8b565b905092915050565b600082611d9b5760019050611e57565b81611da95760009050611e57565b8160018114611dbf5760028114611dc957611df8565b6001915050611e57565b60ff841115611ddb57611dda611fa6565b5b8360020a915084821115611df257611df1611fa6565b5b50611e57565b5060208310610133831016604e8410600b8410161715611e2d5782820a905083811115611e2857611e27611fa6565b5b611e57565b611e3a8484846001611ced565b92509050818404811115611e5157611e50611fa6565b5b81810290505b9392505050565b6000611e6982611f2a565b9150611e7483611f2a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611ead57611eac611fa6565b5b828202905092915050565b6000611ec382611f2a565b9150611ece83611f2a565b925082821015611ee157611ee0611fa6565b5b828203905092915050565b6000611ef782611f0a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611f5f578082015181840152602081019050611f44565b83811115611f6e576000848401525b50505050565b60006002820490506001821680611f8c57607f821691505b60208210811415611fa057611f9f611fd5565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b61202b81611eec565b811461203657600080fd5b50565b61204281611f2a565b811461204d57600080fd5b5056fea2646970667358221220aea1c46c0283446e8a29cd77a8c2d46a384e5c440e2e0eb1031ec756d1946a8f64736f6c63430008000033";

export class MockUSDC__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockUSDC> {
    return super.deploy(overrides || {}) as Promise<MockUSDC>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockUSDC {
    return super.attach(address) as MockUSDC;
  }
  connect(signer: Signer): MockUSDC__factory {
    return super.connect(signer) as MockUSDC__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockUSDCInterface {
    return new utils.Interface(_abi) as MockUSDCInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockUSDC {
    return new Contract(address, _abi, signerOrProvider) as MockUSDC;
  }
}
