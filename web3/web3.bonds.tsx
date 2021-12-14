import { TermsI } from '../redux/redux.bond';
import { ConfigureBondDepositoryContract, ConfigureTreasuryContract } from './web3.contracts';

export async function retrieveBondInfo(provider, index: number = 0): Promise<TermsI> {
    const depository = ConfigureBondDepositoryContract(provider);
    const bondTerms = await depository.methods.bondTerms(index).call();
    const maxPayout = await depository.methods.maxPayout(index).call();
    const price = await depository.methods.bondPriceInUSD(index).call();
    const debtRatio = await depository.methods.debtRatio(index).call();
    const capacity = await depository.methods.getCapacity(index).call();

    const vestingTerm = (Number(bondTerms.vestingTerm_) / 60 / 60 / 24).toFixed(2); // Vesting Term in days


    const purchased = capacity._maxCapacity - capacity._capacity;
    const available = capacity._capacity;

    return {
        vestingTerm,
        maxPayout: (maxPayout / Math.pow(10, 9)).toFixed(2),
        price: (price / Math.pow(10, 18)).toFixed(2),
        debtRatio: (debtRatio / Math.pow(10, 9)).toFixed(2),
        purchased,
        available,
    }
}

export async function retrieveTreasuryBalance(provider) {
    const treasury = ConfigureTreasuryContract(provider);
    const reserves = await treasury.methods.totalReserves().call();

    return reserves / Math.pow(10, 9);
}