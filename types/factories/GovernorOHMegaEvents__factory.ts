/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernorOHMegaEvents,
  GovernorOHMegaEventsInterface,
} from "../GovernorOHMegaEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldImplementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "NewImplementation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldPendingAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votesNeeded",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ProposalQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldProposalThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newProposalThreshold",
        type: "uint256",
      },
    ],
    name: "ProposalThresholdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "VoteCast",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldVotingDelay",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVotingDelay",
        type: "uint256",
      },
    ],
    name: "VotingDelaySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldVotingPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVotingPeriod",
        type: "uint256",
      },
    ],
    name: "VotingPeriodSet",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50604c80601d6000396000f3fe6080604052600080fdfea365627a7a72315820d949d95b68867780e86caa9bab161dcce12a25daf2f7f1224eee1b769b78fa056c6578706572696d656e74616cf564736f6c63430005100040";

export class GovernorOHMegaEvents__factory extends ContractFactory {
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
  ): Promise<GovernorOHMegaEvents> {
    return super.deploy(overrides || {}) as Promise<GovernorOHMegaEvents>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernorOHMegaEvents {
    return super.attach(address) as GovernorOHMegaEvents;
  }
  connect(signer: Signer): GovernorOHMegaEvents__factory {
    return super.connect(signer) as GovernorOHMegaEvents__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorOHMegaEventsInterface {
    return new utils.Interface(_abi) as GovernorOHMegaEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorOHMegaEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GovernorOHMegaEvents;
  }
}
