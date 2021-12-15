import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    DAI: '',
    USDC: '',
    USDT: '',
    ETNA: '',
    SETNA: ''
}

export const BalanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        setBalance(state, action) {
            state[action.payload.currency] = action.payload.value ?? '';
        },
    },
});

export const { setBalance } = BalanceSlice.actions;