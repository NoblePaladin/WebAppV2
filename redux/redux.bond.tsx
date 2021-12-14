import { createSlice } from '@reduxjs/toolkit';

export interface TermsI {
    price: string;
    maxPayout: string;
    debtRatio: string;
    vestingTerm: string;
    purchased: number,
    available: number;
}

export const initialState = {
    selectedBond: '',
    inputAmount: '',
    treasuryBalance: 0,
    terms: {
        0: {
            price: '',
            maxPayout: '',
            debtRatio: '',
            vestingTerm: '',
            purchased: 0,
            available: 0,
        },
        1: {
            price: '',
            maxPayout: '',
            debtRatio: '',
            vestingTerm: '',
            purchased: 0,
            available: 0,
        },
        2: {
            price: '',
            maxPayout: '',
            debtRatio: '',
            vestingTerm: '',
            purchased: 0,
            available: 0,
        },
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
        setTreasuryBalance(state, action) {
            state.treasuryBalance = action.payload ?? 0;
        },
        setTerms(state, action) {
            state.terms[action.payload.key] = action.payload.value ?? { price: '', maxPayout: '', debtRatio: '', vestingTerm: '', purchased: 0, available: 0 };
        }
    },
});

export const { selectBond, setInputAmount, setTreasuryBalance, setTerms } = BondSlice.actions;