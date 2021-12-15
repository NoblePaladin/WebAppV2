import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { BondSlice } from './redux.bond';
import { BalanceSlice } from './redux.balance';
import { StakingSlice } from './redux.staking';

export function makeStore() {
  return configureStore({
    reducer: {
      bond: BondSlice.reducer,
      balance: BalanceSlice.reducer,
      staking: StakingSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);