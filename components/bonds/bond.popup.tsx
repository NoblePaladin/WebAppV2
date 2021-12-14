import Web3 from 'web3';
import { connect } from 'react-redux';
import { BondPopupStyles } from './bond.popup.styles';
import contracts from '../../contracts.development.json';
import { ConfigureMockDAIContract, ConfigureMockUSDCContract, ConfigureMockUSDTContract } from '../../web3/web3.contracts';
import { ConfigureBondDepositoryContract } from '../../web3/web3.contracts';
import { selectBond, setInputAmount, TermsI } from '../../redux/redux.bond';



export interface BondPopupI {
    selectedBond: string;
    inputAmount: string;
    selectBond(payload: string): void;
    setInputAmount(payload: string): void;

    DAI: string;
    USDC: string;
    USDT: string;
    ETNA: string;
    SETNA: string;

    terms: TermsI;
}

declare const web3, ethereum;

export function _BondPopup({ selectedBond, inputAmount, selectBond, setInputAmount, DAI, USDC, USDT, ETNA, SETNA, terms }: BondPopupI) {
    function calculatePayout() {
        if (inputAmount) {
            return (Number(inputAmount) / Number(terms.price));
        } else {
            return '0';
        }
    }

    function getBalance() {
        if (selectedBond.toUpperCase() === 'DAI') { return DAI; }
        if (selectedBond.toUpperCase() === 'USDC') { return USDC; }
        if (selectedBond.toUpperCase() === 'USDT') { return USDT; }

        return '0';
    }

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
                            <p>${terms.price}</p>
                        </div>
                        <div className="sub-heading-column">
                            <h3>ETNA Price</h3>
                            <p>$~</p>
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
                        <input type="number" min={0} value={inputAmount} onChange={e => setInputAmount(e.target.value)}/>
                        <a className="max-button">
                            Max
                        </a>
                    </div>

                    <a className="buy-button" onClick={async e => {
                        if (typeof web3 !== 'undefined' && typeof ethereum !== 'undefined') {
                            let tokenContract;
                            let tokenIndex = -1;

                            if (selectedBond.toUpperCase() === 'DAI') {
                                tokenContract = ConfigureMockDAIContract(web3.currentProvider);
                                tokenIndex = 0;
                            }
                            if (selectedBond.toUpperCase() === 'USDC') {
                                tokenContract = ConfigureMockUSDCContract(web3.currentProvider);
                                tokenIndex = 1;
                            }
                            if (selectedBond.toUpperCase() === 'USDT') {
                                tokenContract = ConfigureMockUSDTContract(web3.currentProvider);
                                tokenIndex = 2;
                            }

                            if (tokenContract && tokenIndex !== -1) {
                                try {
                                    const _web3 = new Web3(web3.currentProvider);
                                    const decimals = await tokenContract.methods.decimals().call();
    
                                    const multiplier = _web3.utils.toBN(10).pow(_web3.utils.toBN(decimals));
    
                                    await tokenContract.methods.increaseAllowance(
                                        contracts.Depository,
                                        _web3.utils.toBN(inputAmount).mul(multiplier),
                                    ).send({ from: ethereum.selectedAddress });
    
                                    const depositoryContract = ConfigureBondDepositoryContract(web3.currentProvider);
                                    await depositoryContract.methods.deposit(
                                        _web3.utils.toBN(inputAmount).mul(multiplier),
                                        _web3.utils.toBN(parseInt((Number(inputAmount) * 1.1).toString())).mul(multiplier),
                                        ethereum.selectedAddress,
                                        tokenIndex,
                                        contracts.FEO,
                                    ).send({ from: ethereum.selectedAddress });
                                } catch (error) {
                                    console.error(error);
                                }
                            }
                        }
                    }}>
                        Bond
                    </a>

                    <div className="info-row">
                        <p>Your Balance</p>
                        <p>{Number(getBalance()).toLocaleString(undefined, { minimumFractionDigits: 2 })} {selectedBond}</p>
                    </div>
                    <div className="info-row">
                        <p>You Will Get</p>
                        <p>{Number(calculatePayout()).toLocaleString(undefined, { minimumFractionDigits: 2 })} ETNA</p>
                    </div>
                    <div className="info-row">
                        <p>Max You Can Buy</p>
                        <p>{Number(terms.maxPayout).toLocaleString(undefined, { minimumFractionDigits: 2 })} ETNA</p>
                    </div>
                    <div className="info-row">
                        <p>ROI</p>
                        <p>150%</p>
                    </div>
                    <div className="info-row">
                        <p>Debt Ratio</p>
                        <p>{terms.debtRatio}%</p>
                    </div>
                    <div className="info-row">
                        <p>Vesting Term</p>
                        <p>{terms.vestingTerm} Days</p>
                    </div>
                </div>
            </div>
        </BondPopupStyles>
    )
}

export const BondPopupState = state => ({
    selectedBond: state.bond.selectedBond,
    inputAmount: state.bond.inputAmount,

    DAI: state.balance.DAI,
    USDC: state.balance.USDC,
    USDT: state.balance.USDT,
    ETNA: state.balance.ETNA,
    SETNA: state.balance.SETNA,

    terms: {
        price: state.bond.terms.price,
        maxPayout: state.bond.terms.maxPayout,
        debtRatio: state.bond.terms.debtRatio,
        vestingTerm: state.bond.terms.vestingTerm,
    },
});

export const BondPopup = connect(BondPopupState, { selectBond, setInputAmount })(_BondPopup)