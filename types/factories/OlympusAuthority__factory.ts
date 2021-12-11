/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OlympusAuthority,
  OlympusAuthorityInterface,
} from "../OlympusAuthority";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_governor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_guardian",
        type: "address",
      },
      {
        internalType: "address",
        name: "_policy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
        type: "address",
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
        internalType: "contract IOlympusAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
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
    ],
    name: "GovernorPulled",
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
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "GovernorPushed",
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
    ],
    name: "GuardianPulled",
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
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "GuardianPushed",
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
    ],
    name: "PolicyPulled",
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
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "PolicyPushed",
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
    ],
    name: "VaultPulled",
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
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "VaultPushed",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
    name: "guardian",
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
    name: "newGovernor",
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
    name: "newGuardian",
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
    name: "newPolicy",
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
    name: "newVault",
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
    name: "policy",
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
    name: "pullGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pullGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pullPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pullVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "pushGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGuardian",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "pushGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newPolicy",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "pushPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newVault",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_effectiveImmediately",
        type: "bool",
      },
    ],
    name: "pushVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
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
];

const _bytecode =
  "0x60c0604052600c60808190526b15539055551213d49256915160a21b60a090815261002d9160009190610241565b5034801561003a57600080fd5b506040516110783803806110788339818101604052608081101561005d57600080fd5b5080516020820151604080840151606090940151600180546001600160a01b0319163090811790915591519394929390919081907f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250600280546001600160a01b038087166001600160a01b031990921691909117918290556040805160018152905192909116916000917f4f337dcbb2512f18373c1f72d990a2f0a6ee5024b04007c52afd01eb73374a89919081900360200190a3600380546001600160a01b038086166001600160a01b031990921691909117918290556040805160018152905192909116916000917fde655975891e8f09671597b37bd4d663bcc5c21dc6d7641b33cdf85fbe15d08b919081900360200190a3600480546001600160a01b038085166001600160a01b031990921691909117918290556040805160018152905192909116916000917f90a5902a45c24aae553d5aff384ca16d6560f08d74c9784a4fbd2796d9e13f2b919081900360200190a3600580546001600160a01b038084166001600160a01b031990921691909117918290556040805160018152905192909116916000917f05a80f5053574d6a62733e1692e8cbcfaf927dc82df0a7267ea2e489a7cc18ff919081900360200190a3505050506102e2565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261027757600085556102bd565b82601f1061029057805160ff19168380011785556102bd565b828001600101855582156102bd579182015b828111156102bd5782518255916020019190600101906102a2565b506102c99291506102cd565b5090565b5b808211156102c957600081556001016102ce565b610d87806102f16000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80635beede08116100b25780638fd2057711610081578063bf7e214f11610066578063bf7e214f14610287578063d8a042121461028f578063fbfa77cf1461029757610136565b80638fd2057714610277578063be11f1dd1461027f57610136565b80635beede08146102135780636fe72c141461021b5780637a9e5e4b1461024957806388aaf0c81461026f57610136565b8063215e92bc11610109578063452a9320116100ee578063452a9320146101af57806352759694146101b757806354e3d703146101e557610136565b8063215e92bc1461019f5780633bf90c28146101a757610136565b80630505c8c91461013b5780630c340a241461015f57806319859847146101675780631afe87141461016f575b600080fd5b61014361029f565b604080516001600160a01b039092168252519081900360200190f35b6101436102ae565b6101436102bd565b61019d6004803603604081101561018557600080fd5b506001600160a01b03813516906020013515156102cc565b005b61019d61047d565b61014361053f565b61014361054e565b61019d600480360360408110156101cd57600080fd5b506001600160a01b038135169060200135151561055d565b61019d600480360360408110156101fb57600080fd5b506001600160a01b03813516906020013515156106d4565b61019d61084b565b61019d6004803603604081101561023157600080fd5b506001600160a01b038135169060200135151561090d565b61019d6004803603602081101561025f57600080fd5b50356001600160a01b0316610a84565b610143610bba565b610143610bc9565b61019d610bd8565b610143610c9a565b61019d610ca9565b610143610d6b565b6004546001600160a01b031681565b6002546001600160a01b031681565b6007546001600160a01b031681565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561031a57600080fd5b505afa15801561032e573d6000803e3d6000fd5b505050506040513d602081101561034457600080fd5b50516000906001600160a01b031633146103f15760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156103e25780601f106103b7576101008083540402835291602001916103e2565b820191906000526020600020905b8154815290600101906020018083116103c557829003601f168201915b50509250505060405180910390fd5b50801561041457600380546001600160a01b0319166001600160a01b0384161790555b600780546001600160a01b038085166001600160a01b0319909216919091179182905560035460408051851515815290519383169391909216917fde655975891e8f09671597b37bd4d663bcc5c21dc6d7641b33cdf85fbe15d08b919081900360200190a35050565b6009546001600160a01b031633146104dc576040805162461bcd60e51b815260206004820152600960248201527f216e65775661756c740000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6009546005546040516001600160a01b0392831692909116907f3d08e01e3b8340be6ca709db7a9321448661a1f490da4d7f3eb03d84fe73095390600090a3600954600580546001600160a01b0319166001600160a01b03909216919091179055565b6008546001600160a01b031681565b6003546001600160a01b031681565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156105ab57600080fd5b505afa1580156105bf573d6000803e3d6000fd5b505050506040513d60208110156105d557600080fd5b50516000906001600160a01b031633146106485760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156103e25780601f106103b7576101008083540402835291602001916103e2565b50801561066b57600280546001600160a01b0319166001600160a01b0384161790555b600680546001600160a01b038085166001600160a01b0319909216919091179182905560025460408051851515815290519383169391909216917f4f337dcbb2512f18373c1f72d990a2f0a6ee5024b04007c52afd01eb73374a89919081900360200190a35050565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561072257600080fd5b505afa158015610736573d6000803e3d6000fd5b505050506040513d602081101561074c57600080fd5b50516000906001600160a01b031633146107bf5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156103e25780601f106103b7576101008083540402835291602001916103e2565b5080156107e257600480546001600160a01b0319166001600160a01b0384161790555b600880546001600160a01b038085166001600160a01b0319909216919091179182905560045460408051851515815290519383169391909216917f90a5902a45c24aae553d5aff384ca16d6560f08d74c9784a4fbd2796d9e13f2b919081900360200190a35050565b6008546001600160a01b031633146108aa576040805162461bcd60e51b815260206004820152600a60248201527f216e6577506f6c69637900000000000000000000000000000000000000000000604482015290519081900360640190fd5b6008546004546040516001600160a01b0392831692909116907f64d2fa522b403ca222efff0c7ad07d2ef45472a45e5770918bdfa9a2845d29a890600090a3600854600480546001600160a01b0319166001600160a01b03909216919091179055565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561095b57600080fd5b505afa15801561096f573d6000803e3d6000fd5b505050506040513d602081101561098557600080fd5b50516000906001600160a01b031633146109f85760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156103e25780601f106103b7576101008083540402835291602001916103e2565b508015610a1b57600580546001600160a01b0319166001600160a01b0384161790555b600980546001600160a01b038085166001600160a01b0319909216919091179182905560055460408051851515815290519383169391909216917f05a80f5053574d6a62733e1692e8cbcfaf927dc82df0a7267ea2e489a7cc18ff919081900360200190a35050565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b158015610ad257600080fd5b505afa158015610ae6573d6000803e3d6000fd5b505050506040513d6020811015610afc57600080fd5b50516000906001600160a01b03163314610b6f5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156103e25780601f106103b7576101008083540402835291602001916103e2565b50600180546001600160a01b0319166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b6009546001600160a01b031681565b6006546001600160a01b031681565b6007546001600160a01b03163314610c37576040805162461bcd60e51b815260206004820152600960248201527f216e657747756172640000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6007546003546040516001600160a01b0392831692909116907f0960fb9900fb8096216606c4f7fc2fce5d08cc0c82da55cec8619b66b523848190600090a3600754600380546001600160a01b0319166001600160a01b03909216919091179055565b6001546001600160a01b031681565b6006546001600160a01b03163314610d08576040805162461bcd60e51b815260206004820152600c60248201527f216e6577476f7665726e6f720000000000000000000000000000000000000000604482015290519081900360640190fd5b6006546002546040516001600160a01b0392831692909116907fffd6fed33fe8ec1016718bdd5d04ae6fecd9aba0da6578807daaaa7fc3d1682690600090a3600654600280546001600160a01b0319166001600160a01b03909216919091179055565b6005546001600160a01b03168156fea164736f6c6343000705000a";

export class OlympusAuthority__factory extends ContractFactory {
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
    _governor: string,
    _guardian: string,
    _policy: string,
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OlympusAuthority> {
    return super.deploy(
      _governor,
      _guardian,
      _policy,
      _vault,
      overrides || {}
    ) as Promise<OlympusAuthority>;
  }
  getDeployTransaction(
    _governor: string,
    _guardian: string,
    _policy: string,
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _governor,
      _guardian,
      _policy,
      _vault,
      overrides || {}
    );
  }
  attach(address: string): OlympusAuthority {
    return super.attach(address) as OlympusAuthority;
  }
  connect(signer: Signer): OlympusAuthority__factory {
    return super.connect(signer) as OlympusAuthority__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OlympusAuthorityInterface {
    return new utils.Interface(_abi) as OlympusAuthorityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OlympusAuthority {
    return new Contract(address, _abi, signerOrProvider) as OlympusAuthority;
  }
}
