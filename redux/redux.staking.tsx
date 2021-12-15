import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    tabState: 'stake' as 'stake' | 'unstake',
    index: 0,
    totalStaked: 0,
    nextRewardAt: 0,
    pending: 0,
    unstaked: 0,
    staked: 0,
    nextRewardFor: 0,
}

export const StakingSlice = createSlice({
    name: 'staking',
    initialState,
    reducers: {
        setTabState(state, action) {
            state.tabState = action.payload ?? 'stake';
        },
        setIndex(state, action) {
            state.index = action.payload ?? 0;
        },
        setTotalStaked(state, action) {
            state.totalStaked = action.payload ?? 0;
        },
        setNextRewardAt(state, action) {
            state.nextRewardAt = action.payload ?? 0;
        },
        setPending(state, action) {
            state.pending = action.payload ?? 0;
        },
        setUnstaked(state, action) {
            state.unstaked = action.payload ?? 0;
        },
        setStake(state, action) {
            state.staked = action.payload ?? 0;
        },
        setNextRewardFor(state, action) {
            state.nextRewardFor = action.payload ?? 0;
        }
    },
});

export const { setTabState, setIndex, setTotalStaked, setNextRewardAt, setPending, setUnstaked, setStake, setNextRewardFor } = StakingSlice.actions;