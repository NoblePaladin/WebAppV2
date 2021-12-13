import Web3 from 'web3';
import { useRouter } from 'next/router';
import { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { ConfigureMockDAIContract, ConfigureMockUSDCContract, ConfigureMockUSDTContract } from '../../web3/web3.contracts';
import { selectBond } from '../../redux/redux.bond';
import { setBalance } from '../../redux/redux.balance';
import Bonds from '../bonds';

export interface BondIDI {
    selectedBond: string;
    selectBond(payload: string): void;
    setBalance({ currency, value }: { currency: string, value: string }): void;
}

declare const web3, ethereum;

export function _BondID({ selectedBond, selectBond, setBalance }: BondIDI) {
    const router = useRouter();
    const { id } = router.query;

    useLayoutEffect(() => {
        selectBond((id as string).toUpperCase());

        (async () => {
            const _web3 = new Web3(web3.currentProvider);

            if ((id as string).toUpperCase() === 'DAI') {
                const contract = ConfigureMockDAIContract(web3.currentProvider);
                const balance = await contract.methods.balanceOf(ethereum.selectedAddress).call();
                const balanceFormatted = _web3.utils.fromWei(balance);
                setBalance({ currency: 'DAI', value: balanceFormatted.toString() });
            }

            if ((id as string).toUpperCase() === 'USDC') {
                const contract = ConfigureMockUSDCContract(web3.currentProvider);
                const balance = await contract.methods.balanceOf(ethereum.selectedAddress).call();
                const balanceFormatted = _web3.utils.fromWei(balance);
                setBalance({ currency: 'USDC', value: balanceFormatted.toString() });
            }

            if ((id as string).toUpperCase() === 'USDT') {
                const contract = ConfigureMockUSDTContract(web3.currentProvider);
                const balance = await contract.methods.balanceOf(ethereum.selectedAddress).call();
                const balanceFormatted = _web3.utils.fromWei(balance);
                setBalance({ currency: 'USDT', value: balanceFormatted.toString() });
            }
        })();
    }, [id]);

    return(<Bonds/>);
}

export const BondIDState = state => ({
    selectedBond: state.bond.selectedBond
})

export default connect(BondIDState, { selectBond, setBalance })(_BondID);