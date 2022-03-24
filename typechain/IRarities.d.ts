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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IRaritiesInterface extends ethers.utils.Interface {
  functions: {
    "getRarityByName(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRarityByName",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRarityByName",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRarities extends BaseContract {
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

  interface: IRaritiesInterface;

  functions: {
    getRarityByName(
      rarity: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, BigNumber] & {
          name: string;
          maxSupply: BigNumber;
          price: BigNumber;
        }
      ]
    >;
  };

  getRarityByName(
    rarity: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      name: string;
      maxSupply: BigNumber;
      price: BigNumber;
    }
  >;

  callStatic: {
    getRarityByName(
      rarity: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        name: string;
        maxSupply: BigNumber;
        price: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getRarityByName(
      rarity: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRarityByName(
      rarity: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
