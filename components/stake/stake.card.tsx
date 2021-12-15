import Web3 from 'web3';
import { useState } from 'react';
import { connect } from 'react-redux';
import { StakeCardStyles } from './stake.card.styles';
import { setTabState } from '../../redux/redux.staking';
import { ConfigureStakingContract } from '../../web3/web3.contracts';
import { ConfigureOHMContract, ConfigureSOHMContract } from '../../web3/web3.contracts';
import contracts from '../../contracts.development.json';

export interface StakeCardI {
    tabState: 'stake' | 'unstake';
    index: number;
    totalStaked: number;
    nextRewardAt: number;
    unstaked: number;
    staked: number;
    nextRewardFor: number;

    setTabState(payload: 'stake' | 'unstake'): void;
}

declare const web3, ethereum;

export function _StakeCard({ tabState, index, totalStaked, nextRewardAt, unstaked, staked, nextRewardFor, setTabState }: StakeCardI) {
    const [input, setInput] = useState('');

    return(
        <StakeCardStyles>
            <h2>Stake with ETNA</h2>
            <div className="sub-heading">
                <div className="sub-heading-column">
                    <h3>Base Reward Rate</h3>
                    <p>{nextRewardAt.toFixed(4)} sETNA</p>
                </div>
                <div className="sub-heading-column">
                    <h3>Total Staked</h3>
                    <p>{totalStaked.toLocaleString(undefined, { maximumFractionDigits: 0 })} sETNA</p>
                </div>
                <div className="sub-heading-column">
                    <h3>Current Index</h3>
                    <p>{index.toFixed(2)}</p>
                </div>
            </div>
            <div className="toggle-heading">
                <a className={`toggle-button ${tabState === 'stake' ? 'active' : ''}`} onClick={e => setTabState('stake')}>
                    Stake
                </a>
                <a className={`toggle-button ${tabState === 'unstake' ? 'active' : ''}`} onClick={e => setTabState('unstake')}>
                    Unstake
                </a>
            </div>
            <div className="form">
                <div className="form-input">
                    <input type="number" min={0} value={input} onChange={e => setInput(e.target.value)}/>
                    <a className="max-button">
                        Max
                    </a>
                </div>
                <a
                    className="stake-button"
                    onClick={async e => {
                        if (typeof web3 !== 'undefined' && typeof ethereum !== 'undefined') {
                            if (ethereum.selectedAddress) {
                                const _web3 = new Web3(web3.currentProvider);
                                const staking = ConfigureStakingContract(web3.currentProvider);
                                const ohm = ConfigureOHMContract(web3.currentProvider);
                                const sohm = ConfigureSOHMContract(web3.currentProvider);

                                const multiplier = _web3.utils.toBN(10).pow(_web3.utils.toBN(9));
                                const value = _web3.utils.toBN(input).mul(multiplier);

                                if (tabState === 'stake') {
                                    await ohm.methods.increaseAllowance(contracts.Staking, value).send({ from: ethereum.selectedAddress });
                                    await staking.methods.stake(ethereum.selectedAddress, value, true, true).send({ from: ethereum.selectedAddress });
                                } else {
                                    await sohm.methods.increaseAllowance(contracts.Staking, value).send({ from: ethereum.selectedAddress });
                                    await staking.methods.unstake(ethereum.selectedAddress, value, true, true).send({ from: ethereum.selectedAddress });
                                }
                            }
                        }
                    }}
                >
                    {tabState === 'stake' ? 'Stake' : 'Unstake'}
                </a>
            </div>
            <div className="info-row">
                <p>Unstaked Balance</p>
                <p>{(unstaked / Math.pow(10, 9)).toLocaleString(undefined, { minimumFractionDigits: 2 })} ETNA</p>
            </div>
            <div className="info-row">
                <p>Staked Balance</p>
                <p>{(staked / Math.pow(10, 9)).toLocaleString(undefined, { minimumFractionDigits: 2 })} sETNA</p>
            </div>
            <div className="line"/>
            <div className="info-row">
                <p>Next Reward Amount</p>
                <p>{(nextRewardFor / Math.pow(10, 9)).toLocaleString(undefined, { minimumFractionDigits: 2 })} sETNA</p>
            </div>
            <div className="info-row">
                <p>Next Reward Yield</p>
                <p>{(nextRewardFor / staked).toLocaleString(undefined, { minimumFractionDigits: 2 })}%</p>
            </div>
            <div className="info-row">
                <p>Net ROI</p>
                <p>N/A%</p>
            </div>
        </StakeCardStyles>
    )
}

export const StakeCardState = state => ({
    tabState: state.staking.tabState,
    index: state.staking.index,
    totalStaked: state.staking.totalStaked,
    nextRewardAt: state.staking.nextRewardAt,
    pending: state.staking.pending,
    unstaked: state.staking.unstaked,
    staked: state.staking.staked,
    nextRewardFor: state.staking.nextRewardFor,
})

export const StakeCard = connect(StakeCardState, { setTabState })(_StakeCard);