/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IDistributorInterface extends ethers.utils.Interface {
  functions: {
    "addRecipient(address,uint256)": FunctionFragment;
    "distribute()": FunctionFragment;
    "nextRewardAt(uint256)": FunctionFragment;
    "nextRewardFor(address)": FunctionFragment;
    "removeRecipient(uint256)": FunctionFragment;
    "setAdjustment(uint256,bool,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addRecipient",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextRewardAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextRewardFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRecipient",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdjustment",
    values: [BigNumberish, boolean, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextRewardAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextRewardFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdjustment",
    data: BytesLike
  ): Result;

  events: {};
}

export class IDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IDistributorInterface;

  functions: {
    addRecipient(
      _recipient: string,
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nextRewardAt(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nextRewardFor(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeRecipient(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdjustment(
      _index: BigNumberish,
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addRecipient(
    _recipient: string,
    _rewardRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distribute(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nextRewardAt(
    _rate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nextRewardFor(
    _recipient: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeRecipient(
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdjustment(
    _index: BigNumberish,
    _add: boolean,
    _rate: BigNumberish,
    _target: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRecipient(
      _recipient: string,
      _rewardRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    distribute(overrides?: CallOverrides): Promise<void>;

    nextRewardAt(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextRewardFor(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeRecipient(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAdjustment(
      _index: BigNumberish,
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addRecipient(
      _recipient: string,
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nextRewardAt(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextRewardFor(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeRecipient(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdjustment(
      _index: BigNumberish,
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRecipient(
      _recipient: string,
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nextRewardAt(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextRewardFor(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeRecipient(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdjustment(
      _index: BigNumberish,
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
