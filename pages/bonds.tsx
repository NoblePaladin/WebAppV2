import { connect } from 'react-redux';
import { useLayoutEffect } from 'react';
import { Layout, ContentLayout } from '../components/common/common.layout';
import { Sidebar } from "../components/common/common.sidebar";
import { Connect } from '../components/common/common.connect';
import { BondsCard } from '../components/bonds/bonds.card';
import { BondPopup } from '../components/bonds/bond.popup';
import { selectBond, setTerms, setTreasuryBalance, TermsI } from '../redux/redux.bond';
import { setPending } from '../redux/redux.staking';
import { setBalance } from '../redux/redux.balance';
import { retrievePendingBalance } from '../web3/web3.staking';
import { retrieveBondInfo, retrieveTreasuryBalance } from '../web3/web3.bonds';
import { retrieveTokenBalances } from '../web3/web3.tokens';

export interface BondI {
    selectBond(payload: string): void;
    setBalance({ currency, value }: { currency: string, value: string }): void;
    setTerms(payload: {key: number, value: TermsI}): void;
    setTreasuryBalance(payload: number): void;
    setPending(payload: number): void;
}

declare const web3, ethereum;

export function _Bonds({ selectBond, setBalance, setTerms, setTreasuryBalance, setPending }: BondI) {
    useLayoutEffect(() => {
        selectBond('');

        (async () => {
            if (typeof web3 !== 'undefined' && typeof ethereum !== 'undefined') {
                const { DAI, USDC, USDT } = await retrieveTokenBalances(web3.currentProvider, ethereum.selectedAddress);
                setBalance({ currency: 'DAI', value: DAI });
                setBalance({ currency: 'USDC', value: USDC });
                setBalance({ currency: 'USDT', value: USDT });

                const reserves = await retrieveTreasuryBalance(web3.currentProvider);
                setTreasuryBalance(reserves);

                for (let i = 0; i < 3; i++) {
                    const bondInfo: TermsI = await retrieveBondInfo(web3.currentProvider, i);
                    setTerms({ key: i, value: bondInfo});
                }

                const { pending } = await retrievePendingBalance(web3.currentProvider, ethereum.selectedAddress);
                setPending(pending);
            }
        })();
    }, []);

    return(
        <Layout>
            <Sidebar tab="bonds"/>
            <Connect/>
            <ContentLayout>
                <BondsCard/>
                <BondPopup/>
            </ContentLayout>
        </Layout>
    )
}

export const BondsState = state => ({

});

export default connect(BondsState, { selectBond, setBalance, setTerms, setTreasuryBalance, setPending })(_Bonds);