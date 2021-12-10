import Link from 'next/link';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Primary, Card, FontMedium } from '../common/common.layout';
import { selectBond } from '../../redux/redux.bond';

export const BondsCardStyles = styled.div`
    background-color: ${Card};    
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.05);
    padding: 15px;
    border-radius: 5px;

    width: calc(100% - 30px);
    max-width: calc(768px - 30px);
    margin: 15px;

    h2 {
        text-align: center;
        font-weight: 24px;
        font-weight: 500;
        padding: 0 0 15px 0;
    }

    div.sub-heading {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 15px 15px 60px 15px;

        div.sub-heading-column {
            width: 50%;
            text-align: center;

            h3 {
                font-size: 18px;
                font-weight: 300;
                color: ${FontMedium};
            }

            p {
                font-size: 24px;
                font-weight: 600;
            }

            @media (max-width: 768px) {
                width: 100%;
                margin: 15px 0;
            }
        }
    }

    div.bond-row {
        display: flex;
        align-items: center;

        div.bond-column:nth-child(1) {
            width: 80px;
        }
        div.bond-column:nth-child(2) {
            width: 150px;
        }
        div.bond-column:nth-child(3) {
            width: 80px;
        }
        div.bond-column:nth-child(4) {
            width: 80px;
        }
        div.bond-column:nth-child(5) {
            text-align: right;
            width: 150px;
        }
        div.bond-column:nth-child(6) {
            width: 150px;
        }

        @media (max-width: 768px) {
            flex-wrap: wrap;
            margin: 15px 0;

            div.bond-column {
                width: 100% !important;
            }
        }

        div.bond-column {
            padding: 5px;
            font-size: 16px;
            font-weight: 500;

            img {
                height: 32px;
                margin: 15px auto;
            }

            a.bond-button {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0 0 auto;
                text-decoration: none;
        
                width: calc(100% - 30px);
                padding: 5px;
                border-radius: 5px;
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;

                border: 2px solid ${Primary};
                color: ${Primary};

                &:hover {
                    background: ${Primary};
                    color: white;
                }

                @media (max-width: 768px) {
                    width: 100%;
                    margin: 0;
                }
            }
        }

        &.heading {
            color: ${FontMedium};

            @media (max-width: 768px) {
                display: none;
            }
        }
    }
`;

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