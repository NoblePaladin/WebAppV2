import { useRouter } from 'next/router';
import { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { selectBond } from '../../redux/redux.bond';
import Bonds from '../bonds';

export interface BondIDI {
    selectedBond: string;
    selectBond(payload: string): void;
}

export function _BondID({ selectedBond, selectBond }: BondIDI) {
    const router = useRouter();
    const { id } = router.query;

    useLayoutEffect(() => {
        selectBond((id as string).toUpperCase());
    }, [id]);

    return(<Bonds/>);
}

export const BondIDState = state => ({
    selectedBond: state.bond.selectedBond
})

export default connect(BondIDState, { selectBond })(_BondID);