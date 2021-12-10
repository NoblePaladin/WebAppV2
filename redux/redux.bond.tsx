import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    selectedBond: '',
}

export const BondSlice = createSlice({
    name: 'bond',
    initialState,
    reducers: {
        selectBond(state, action) {
            state.selectedBond = action.payload ?? '';
        },
    },
});

export const { selectBond } = BondSlice.actions;