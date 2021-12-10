import { connect } from 'react-redux';
import styled from 'styled-components';
import { Primary, Card, CardDark, FontDark, FontMedium } from '../common/common.layout';
import { selectBond } from '../../redux/redux.bond';

export const BondPopupStyles = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 16;

    opacity: 0;
    pointer-events: none;

    &.active {
        opacity: 1;
        pointer-events: inherit;
    }
    

    div.backdrop {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(30, 30, 30, 0.5);
        backdrop-filter: blur(15px);
        z-index: 5;

        opacity: 1;
        pointer-events: none;

        &.visible {
            opacity: 1;
        }
    }

    div.card-outer {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 7;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.card-inner {
        background-color: ${Card};    
        box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.05);
        padding: 15px;
        border-radius: 5px;
    
        width: calc(100% - 30px);
        max-width: calc(768px - 30px);
        margin: 15px;
        padding: 0 0 90px 0;

        div.card-heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;

            a.close-card, a.settings-card {
                padding: 15px;
                cursor: pointer;
            }

            a.settings-card {
                opacity: 0;
            }

            h3 {
                display: flex;
                align-items: center;
                font-size: 24px;
                font-weight: 400;

                img {
                    height: 32px;
                    margin: 0 30px 0 0;
                }
            }
        }

        div.card-subheading {
            display: flex;
            align-items: center;
            padding: 15px 15px 30px 15px;
    
            div.sub-heading-column {
                width: 50%;
                text-align: center;
    
                h3 {
                    font-size: 18px;
                    font-weight: 400;
                    color: ${FontMedium};
                }
    
                p {
                    font-size: 32px;
                    font-weight: 600;
                }
            }
        }
    }

    div.toggle-heading {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0 15px 0;

        a.toggle-button {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            padding: 5px 0px;
            margin: 0 7.5px;
            font-size: 18px;
            font-weight: 500;
            width: 90px;
            border-bottom: 2px solid transparent;

            &.active {
                color: ${Primary};
                border-bottom: 2px solid ${Primary};
            }
        }
    }

    div.input-outer {
        position: relative;
        display: flex;
        margin: auto;
        width: 100%;
        height: 40px;
        max-width: 320px;
        margin: 15px auto;
        border: 1px solid white;
        border-radius: 5px;

        p.label {
            position: absolute;
            left: 15px;
            top: -12.5px;
            font-size: 12px;
            font-weight: 600;
            background: ${CardDark};
            padding: 2.5px 5px;
        }

        input {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            outline: none;
            color: white;
            padding: 0 15px;
            font-size: 20px;
        }

        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button {
            opacity: 0;
        }

        a.max-button {
            padding: 15px;
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            cursor: pointer;

            display: flex;
            align-items: center;
        }
    }

    a.buy-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px auto 30px auto;
        text-decoration: none;

        background: ${Primary};
        color: ${FontDark};
        width: 100%;
        height: 40px;
        max-width: 320px;
        padding: 5px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;

        opacity: 0.75;
        &:hover { opacity: 1; }
    }

    div.info-row {
        display: flex;
        justify-content: space-between;
        padding: 2.5px 15px;
        font-size: 14px;
        font-weight: 600;
        max-width: 640px;
        margin: auto;
    }
`;

export interface BondPopupI {
    selectedBond: string;
    selectBond(payload: string): void;
}

export function _BondPopup({ selectedBond, selectBond }: BondPopupI) {
    return(
        <BondPopupStyles className={selectedBond ? 'active' : ''}>
            <div className="backdrop"/>

            <div className="card-outer">
                <div className="card-inner">
                    <div className="card-heading">
                        <a className="close-card" onClick={e => selectBond('')}>
                            <img src="/image/icons/x.svg"/>
                        </a>

                        <h3>
                            {
                                selectedBond ?
                                <>
                                    <img src={`/image/currency/${selectedBond.toLowerCase()}.svg`}/>
                                    {selectedBond}
                                </>
                                : ''
                            }
                        </h3>

                        <a className="settings-card">
                            <img src="/image/icons/settings.svg"/>
                        </a>
                    </div>

                    <div className="card-subheading">
                        <div className="sub-heading-column">
                            <h3>Bond Price</h3>
                            <p>$10</p>
                        </div>
                        <div className="sub-heading-column">
                            <h3>ETNA Price</h3>
                            <p>$25</p>
                        </div>
                    </div>

                    <div className="toggle-heading">
                        <a className="toggle-button active">
                            Bond
                        </a>
                        <a className="toggle-button">
                            Redeem
                        </a>
                    </div>

                    <div className="input-outer">
                        <p className="label">Amount</p>
                        <input type="number" min={0}/>
                        <a className="max-button">
                            Max
                        </a>
                    </div>

                    <a className="buy-button">
                        Bond
                    </a>

                    <div className="info-row">
                        <p>Your Balance</p>
                        <p>0.0 DAI</p>
                    </div>
                    <div className="info-row">
                        <p>You Will Get</p>
                        <p>0 ETNA</p>
                    </div>
                    <div className="info-row">
                        <p>Max You Can Buy</p>
                        <p>100 ETNA</p>
                    </div>
                    <div className="info-row">
                        <p>ROI</p>
                        <p>150%</p>
                    </div>
                    <div className="info-row">
                        <p>Debt Ratio</p>
                        <p>0%</p>
                    </div>
                    <div className="info-row">
                        <p>Vesting Term</p>
                        <p>5 Days</p>
                    </div>
                </div>
            </div>
        </BondPopupStyles>
    )
}

export const BondPopupState = state => ({
    selectedBond: state.bond.selectedBond
});

export const BondPopup = connect(BondPopupState, { selectBond })(_BondPopup)