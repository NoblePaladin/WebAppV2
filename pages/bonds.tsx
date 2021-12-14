import { connect } from 'react-redux';
import { useLayoutEffect } from 'react';
import { Layout, ContentLayout } from '../components/common/common.layout';
import { Sidebar } from "../components/common/common.sidebar";
import { Connect } from '../components/common/common.connect';
import { BondsCard } from '../components/bonds/bonds.card';
import { BondPopup } from '../components/bonds/bond.popup';
import { selectBond } from '../redux/redux.bond';
import { setBalance } from '../redux/redux.balance';
import { retrieveTokenBalances } from '../web3/web3.tokens';

export interface BondI {
    selectBond(payload: string): void;
    setBalance({ currency, value }: { currency: string, value: string }): void;
}

declare const web3, ethereum;

export function _Bonds({ selectBond, setBalance }: BondI) {
    useLayoutEffect(() => {
        selectBond('');

        (async () => {
            if (typeof web3 !== 'undefined' && typeof ethereum !== 'undefined') {
                const { DAI, USDC, USDT } = await retrieveTokenBalances(web3.currentProvider, ethereum.selectedAddress);
                setBalance({ currency: 'DAI', value: DAI });
                setBalance({ currency: 'USDC', value: USDC });
                setBalance({ currency: 'USDT', value: USDT });
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

export default connect(BondsState, { selectBond, setBalance })(_Bonds);