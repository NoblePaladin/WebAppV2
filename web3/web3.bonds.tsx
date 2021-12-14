import { TermsI } from '../redux/redux.bond';
import { ConfigureBondDepositoryContract } from './web3.contracts';

export async function retrieveBondInfo(provider, index: number = 0): Promise<TermsI> {
    const depository = ConfigureBondDepositoryContract(provider);
    const bondTerms = await depository.methods.bondTerms(index).call();
    const maxPayout = await depository.methods.maxPayout(index).call();
    const price = await depository.methods.bondPriceInUSD(index).call();
    const debtRatio = await depository.methods.standardizedDebtRatio(index).call();

    const vestingTerm = (Number(bondTerms.vestingTerm_) / 60 / 60 / 24).toFixed(2); // Vesting Term in days

    return {
        vestingTerm,
        maxPayout: (maxPayout / Math.pow(10, 9)).toFixed(2),
        price: (price / Math.pow(10, 18)).toFixed(2),
        debtRatio: (debtRatio / Math.pow(10, 9)).toFixed(2),
    }
}