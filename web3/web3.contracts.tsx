import Web3 from 'web3';
import contracts from '../contracts.development.json';
import MockDAI from '../abis/mocks/MockDAI.sol/MockDAI.json';
import MockUSDC from '../abis/mocks/MockUSDC.sol/MockUSDC.json';
import MockUSDT from '../abis/mocks/MockUSDT.sol/MockUSDT.json';
import BondDepository from '../abis/BondDepository.sol/OlympusBondDepository.json';
import Treasury from '../abis/Treasury.sol/OlympusTreasury.json';
import Staking from '../abis/Staking.sol/OlympusStaking.json';
import OHM from '../abis/OlympusERC20.sol/OlympusERC20Token.json';
import SOHM from '../abis/sOlympusERC20.sol/sOlympus.json';
import Distributor from '../abis/StakingDistributor.sol/Distributor.json';
import Teller from '../abis/BondTeller.sol/BondTeller.json';

export function ConfigureMockDAIContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(MockDAI.abi, contracts.DAI);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureMockUSDCContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(MockUSDC.abi, contracts.USDC);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureMockUSDTContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(MockUSDT.abi, contracts.USDT);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureBondDepositoryContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(BondDepository.abi, contracts.Depository);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureTreasuryContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(Treasury.abi, contracts.Treasury);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureStakingContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(Staking.abi, contracts.Staking);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureDistributorContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(Distributor.abi, contracts.Distributor);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureTellerContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(Teller.abi, contracts.Teller);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureOHMContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(OHM.abi, contracts.OHM);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureSOHMContract(provider) {
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(SOHM.abi, contracts.SOHM);
    Contract.setProvider(provider);

    return Contract;
}