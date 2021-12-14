import Web3 from 'web3';
import contracts from '../contracts.development.json';
import MockDAI from '../abis/mocks/MockDAI.sol/MockDAI.json';
import MockUSDC from '../abis/mocks/MockUSDC.sol/MockUSDC.json';
import MockUSDT from '../abis/mocks/MockUSDT.sol/MockUSDT.json';
import BondDepository from '../abis/BondDepository.sol/OlympusBondDepository.json';
import Treasury from '../abis/Treasury.sol/OlympusTreasury.json';

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