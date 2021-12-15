import Web3 from 'web3';
import DevContracts from '../contracts.development.json';
import TestContracts from '../contracts.testnet.json';
import { GetNetwork } from '../components/common/common.network';
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

const contracts = {
    Development: DevContracts,
    Testnet: TestContracts,
    Mainnet: TestContracts,
}

export function ConfigureMockDAIContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(MockDAI.abi, contracts[network].DAI);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureMockUSDCContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(MockUSDC.abi, contracts[network].USDC);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureMockUSDTContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(MockUSDT.abi, contracts[network].USDT);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureBondDepositoryContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(BondDepository.abi, contracts[network].Depository);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureTreasuryContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(Treasury.abi, contracts[network].Treasury);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureStakingContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(Staking.abi, contracts[network].Staking);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureDistributorContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(Distributor.abi, contracts[network].Distributor);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureTellerContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(Teller.abi, contracts[network].Teller);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureOHMContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(OHM.abi, contracts[network].OHM);
    Contract.setProvider(provider);

    return Contract;
}

export function ConfigureSOHMContract(provider) {
    const network = GetNetwork(provider);
    const web3 = new Web3(provider) as any;
    const Contract = new web3.eth.Contract(SOHM.abi, contracts[network].SOHM);
    Contract.setProvider(provider);

    return Contract;
}