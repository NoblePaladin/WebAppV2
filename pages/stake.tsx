import { connect } from 'react-redux';
import { useLayoutEffect } from 'react';
import { Layout, ContentLayout } from '../components/common/common.layout';
import { Sidebar } from "../components/common/common.sidebar";
import { Connect } from '../components/common/common.connect';
import { StakeCard } from '../components/stake/stake.card';
import { setIndex, setTotalStaked, setNextRewardAt, setPending, setUnstaked, setStake, setNextRewardFor } from '../redux/redux.staking';
import { retrieveStakingInfo, retrieveAccountStakingInfo , retrievePendingBalance, retrieveETNABalances } from '../web3/web3.staking';

declare const web3, ethereum;

export interface StakeI {
    setIndex(payload: number);
    setTotalStaked(payload: number);
    setNextRewardAt(payload: number);
    setPending(payload: number);
    setUnstaked(payload: number);
    setStake(payload: number);
    setNextRewardFor(payload: number);
}

export function _Stake({ setIndex, setTotalStaked, setNextRewardAt, setPending, setUnstaked, setStake, setNextRewardFor }: StakeI) {
    useLayoutEffect(() => {
        (async () => {
            if (typeof web3 !== 'undefined' && typeof ethereum !== 'undefined') {
                const info = await retrieveStakingInfo(web3.currentProvider);
                setIndex(info.index);
                setTotalStaked(info.totalStaked);
                setNextRewardAt(info.nextRewardAt);
                
                if (ethereum.selectedAddress) {
                    const { pending } = await retrievePendingBalance(web3.currentProvider, ethereum.selectedAddress);
                    setPending(pending);

                    const { ohmBalance, sohmBalance } = await retrieveETNABalances(web3.currentProvider, ethereum.selectedAddress);
                    setUnstaked(ohmBalance);
                    setStake(sohmBalance);

                    const info = await retrieveAccountStakingInfo(web3.currentProvider, ethereum.selectedAddress);
                    setNextRewardFor(info.nextRewardFor);
                }
            }
        })();
    }, []);

    return(
        <Layout>
            <Sidebar tab="stake"/>
            <Connect/>
            <ContentLayout>
                <StakeCard/>
            </ContentLayout>
        </Layout>
    )
}

export const StakeState = state => ({

});

export default connect(StakeState, { setIndex, setTotalStaked, setNextRewardAt, setPending, setUnstaked, setStake, setNextRewardFor })(_Stake);