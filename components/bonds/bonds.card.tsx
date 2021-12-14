import Link from 'next/link';
import { connect } from 'react-redux';
import { BondsCardStyles } from './bonds.card.styles';
import { selectBond } from '../../redux/redux.bond';


export interface BondsCardI {
    selectedBond: string;
    selectBond(payload: string): void;
}

export function _BondsCard({ selectedBond, selectBond }: BondsCardI) {
    return(
        <BondsCardStyles>
            <h2>Buy ETNA Bonds</h2>
            <div className="sub-heading">
                <div className="sub-heading-column">
                    <h3>Treasury Balance</h3>
                    <p>$0</p>
                </div>
                <div className="sub-heading-column">
                    <h3>ETNA Price</h3>
                    <p>$25</p>
                </div>
            </div>
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
                <div className="bond-column">$10</div>
                <div className="bond-column">150%</div>
                <div className="bond-column">$0</div>
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
                <div className="bond-column">$10</div>
                <div className="bond-column">150%</div>
                <div className="bond-column">$0</div>
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
                <div className="bond-column">$10</div>
                <div className="bond-column">150%</div>
                <div className="bond-column">$0</div>
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
});

export const BondsCard = connect(BondsCardState, { selectBond })(_BondsCard);