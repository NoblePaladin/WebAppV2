import { ConfigureStakingContract, ConfigureDistributorContract, ConfigureTellerContract } from "./web3.contracts";
import { ConfigureOHMContract, ConfigureSOHMContract } from './web3.contracts';

export async function retrieveStakingInfo(provider) {
    const staking = ConfigureStakingContract(provider);
    const distributor = ConfigureDistributorContract(provider);

    const index = await staking.methods.index().call();
    const totalStaked = await staking.methods.totalStaked().call();
    const nextRewardAt = await distributor.methods.nextRewardAt(1).call();

    return {
        index: (index / Math.pow(10, 9)),
        totalStaked: (totalStaked / Math.pow(10, 9)),
        nextRewardAt: (nextRewardAt / Math.pow(10, 9)),
    }
}

export async function retrieveAccountStakingInfo(provider, address) {
    const distributor = ConfigureDistributorContract(provider);
    const nextRewardFor = await distributor.methods.nextRewardFor(address).call();

    return {
        nextRewardFor: (nextRewardFor / Math.pow(10, 9)),
    }
}

export async function retrievePendingBalance(provider, address) {
    const teller = ConfigureTellerContract(provider);
    const pending = await teller.methods.totalPendingFor(address).call();

    return {
        pending
    }
}

export async function retrieveETNABalances(provider, address) {
    const ohm = ConfigureOHMContract(provider);
    const sohm = ConfigureSOHMContract(provider);

    const ohmBalance = await ohm.methods.balanceOf(address).call();
    const sohmBalance = await sohm.methods.balanceOf(address).call();

    return {
        ohmBalance,
        sohmBalance,
    }
}