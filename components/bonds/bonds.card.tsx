import Link from 'next/link';
import { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { BondsCardStyles } from './bonds.card.styles';
import { selectBond, TermsI } from '../../redux/redux.bond';
import { ConfigureTellerContract } from '../../web3/web3.contracts';

export interface BondsCardI {
    selectedBond: string;
    selectBond(payload: string): void;
    treasuryBalance: number;
    terms: {
        0: TermsI;
        1: TermsI;
        2: TermsI;
    };
    pending: number;
}

declare const web3, ethereum;

export function _BondsCard({ selectedBond, selectBond, treasuryBalance, terms, pending }: BondsCardI) {
    function calculatePurchased(index: number) {
        return (terms[index].purchased / Math.pow(10, 18)).toLocaleString(undefined, { minimumFractionDigits: 2 });
    }

    return(
        <BondsCardStyles>
            <h2>Buy ETNA Bonds</h2>
            <div className="sub-heading">
                <div className="sub-heading-column">
                    <h3>Treasury Balance</h3>
                    <p>${treasuryBalance.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="sub-heading-column">
                    <h3>Unclaimed Bonds</h3>
                    <p>{pending.toLocaleString(undefined, { minimumFractionDigits: 2 })} sETNA</p>
                </div>
                <div className="sub-heading-column">
                    <h3>ETNA Price</h3>
                    <p>$N/A</p>
                </div>
            </div>
            <a className="claim-button" onClick={async e => {
                if (typeof web3 !== 'undefined' && typeof ethereum !== 'undefined') {
                    if (ethereum.selectedAddress) {
                        try {
                            const teller = await ConfigureTellerContract(web3.currentProvider);
                            await teller.methods.redeemAll(ethereum.selectedAddress).send({ from: ethereum.selectedAddress });

                            /*
                            const claim = await ConfigureStakingContract(web3.currentProvider);
                            await claim.methods.rebase().send({ from: ethereum.selectedAddress });
                            */
                        } catch (error) {
                            console.error(error);
                        }
                    }
                }
            }}>
                Redeem Unclaimed Bonds
            </a>
            <div className="bond-row heading">
                <div className="bond-column"/>
                <div className="bond-column">Bond</div>
                <div className="bond-column">Price</div>
                <div className="bond-column">ROI</div>
                <div className="bond-column">Purchased</div>
                <div className="bond-column"/>
            </div>
            <div className="bond-row">
                <div className="bond-column"><img src="/image/currency/dai.svg"/></div>
                <div className="bond-column">DAI</div>
                <div className="bond-column">${terms[0]?.price}</div>
                <div className="bond-column">N/A%</div>
                <div className="bond-column">${calculatePurchased(0)}</div>
                <div className="bond-column">
                    <Link href="/bonds/dai">
                        <a className="bond-button" onClick={e => selectBond('DAI')}>
                            Bond
                        </a>
                    </Link>
                </div>
            </div>
            <div className="bond-row">
                <div className="bond-column"><img src="/image/currency/usdc.svg"/></div>
                <div className="bond-column">USDC</div>
                <div className="bond-column">${terms[1]?.price}</div>
                <div className="bond-column">N/A%</div>
                <div className="bond-column">${calculatePurchased(1)}</div>
                <div className="bond-column">
                    <Link href="/bonds/usdc">
                        <a className="bond-button" onClick={e => selectBond('USDC')}>
                            Bond
                        </a>
                    </Link>
                </div>
            </div>
            <div className="bond-row">
                <div className="bond-column"><img src="/image/currency/usdt.svg"/></div>
                <div className="bond-column">USDT</div>
                <div className="bond-column">${terms[2]?.price}</div>
                <div className="bond-column">N/A%</div>
                <div className="bond-column">${calculatePurchased(2)}</div>
                <div className="bond-column">
                    <Link href="/bonds/usdt">
                        <a className="bond-button" onClick={e => selectBond('USDT')}>
                            Bond
                        </a>
                    </Link>
                </div>
            </div>
        </BondsCardStyles>
    )
}

export const BondsCardState = state => ({
    selectedBond: state.bond.selectedBond,
    treasuryBalance: state.bond.treasuryBalance,
    terms: {
        0: {
            price: state.bond.terms[0].price,
            maxPayout: state.bond.terms[0].maxPayout,
            debtRatio: state.bond.terms[0].debtRatio,
            vestingTerm: state.bond.terms[0].vestingTerm,
            purchased: state.bond.terms[0].purchased,
            available: state.bond.terms[0].available,
        },
        1: {
            price: state.bond.terms[1].price,
            maxPayout: state.bond.terms[1].maxPayout,
            debtRatio: state.bond.terms[1].debtRatio,
            vestingTerm: state.bond.terms[1].vestingTerm,
            purchased: state.bond.terms[1].purchased,
            available: state.bond.terms[1].available,
        },
        2: {
            price: state.bond.terms[2].price,
            maxPayout: state.bond.terms[2].maxPayout,
            debtRatio: state.bond.terms[2].debtRatio,
            vestingTerm: state.bond.terms[2].vestingTerm,
            purchased: state.bond.terms[2].purchased,
            available: state.bond.terms[2].available,
        },
    },
    pending: state.staking.pending,
});

export const BondsCard = connect(BondsCardState, { selectBond })(_BondsCard);