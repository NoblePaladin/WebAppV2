import { useRouter } from 'next/router';
import { useLayoutEffect } from "react";
import { connect } from "react-redux";

import { retrieveBondInfo } from '../../web3/web3.bonds';
import { selectBond, setTerms, TermsI } from '../../redux/redux.bond';
import Bonds from '../bonds';

export interface BondIDI {
    selectedBond: string;
    selectBond(payload: string): void;
    setTerms(payload: TermsI): void;
}

declare const web3, ethereum;

export function _BondID({ selectedBond, selectBond, setTerms }: BondIDI) {
    const router = useRouter();
    const { id } = router.query;

    useLayoutEffect(() => {
        selectBond((id as string).toUpperCase());
        (async () => {
            if (typeof web3 !== 'undefined') {
                let index = -1;
    
                if ((id as string).toUpperCase() === 'DAI') { index = 0; }
                if ((id as string).toUpperCase() === 'USDC') { index = 1; }
                if ((id as string).toUpperCase() === 'USDT') { index = 2; }
    
                if (index > -1) {
                    const bondInfo: TermsI = await retrieveBondInfo(web3.currentProvider);
                    console.log('Bond Info', bondInfo);
                    setTerms(bondInfo);
                }
            }
        })();
    }, [id]);

    return(<Bonds/>);
}

export const BondIDState = state => ({
    selectedBond: state.bond.selectedBond
})

export default connect(BondIDState, { selectBond, setTerms })(_BondID);