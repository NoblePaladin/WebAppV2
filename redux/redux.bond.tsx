import { createSlice } from '@reduxjs/toolkit';

export interface TermsI {
    price: string;
    maxPayout: string;
    debtRatio: string;
    vestingTerm: string;
}

export const initialState = {
    selectedBond: '',
    inputAmount: '',
    terms: {
        price: '',
        maxPayout: '',
        debtRatio: '',
        vestingTerm: '',
    },
}

export const BondSlice = createSlice({
    name: 'bond',
    initialState,
    reducers: {
        selectBond(state, action) {
            state.selectedBond = action.payload ?? '';
        },
        setInputAmount(state, action) {
            state.inputAmount = action.payload ?? '';
        },
        setTerms(state, action) {
            state.terms = action.payload ?? { price: '', maxPayout: '', debtRatio: '', vestingTerm: '' };
        }
    },
});

export const { selectBond, setInputAmount, setTerms } = BondSlice.actions;