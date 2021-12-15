import Web3 from 'web3';
import { ConfigureMockDAIContract, ConfigureMockUSDCContract, ConfigureMockUSDTContract } from '../web3/web3.contracts';

export async function retrieveTokenBalances(provider, address) {
    const _web3 = new Web3(provider);

    const daiContract = ConfigureMockDAIContract(provider);
    const daiBalance = await daiContract.methods.balanceOf(address).call();
    const daiBalanceFmt = _web3.utils.fromWei(daiBalance);

    const usdcContract = ConfigureMockUSDCContract(provider);
    const usdcBalance = await usdcContract.methods.balanceOf(address).call();
    const usdcBalanceFmt = _web3.utils.fromWei(usdcBalance);

    const usdtContract = ConfigureMockUSDTContract(provider);
    const usdtBalance = await usdtContract.methods.balanceOf(address).call();
    const usdtBalanceFmt = _web3.utils.fromWei(usdtBalance);

    return {
        DAI: daiBalanceFmt.toString(),
        USDC: usdcBalanceFmt.toString(),
        USDT: usdtBalanceFmt.toString(),
    }
}