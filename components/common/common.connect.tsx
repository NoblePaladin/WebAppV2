import { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Primary, Card, CardDark, FontDark } from "../common/common.layout";
import { Networks, switchTestnet, switchMainnet } from './common.network';

export const ConnectStyles = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    padding: 15px;
    display: flex;
    z-index: 42;

    a.connect-button {
        background: ${CardDark};
        z-index: 11;
    
        display: flex;
        align-items: center;
        justify-content: center;
    
        width: 140px;
        height: 40px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
    
        &:hover {
            background: ${Primary};
            color: ${FontDark};
        }
    }

    div.overlay {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 42;

        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;
        pointer-events: none;

        &.active {
            opacity: 1;
            pointer-events: inherit;
        }

        div.overlay-filter {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(15px);
            z-index: 1;
        }

        div.overlay-card {
            position: relative;
            z-index: 2;
            background-color: ${CardDark};    
            box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.05);
            padding: 15px;
            border-radius: 5px;    
    
            width: 100%;
            max-width: 420px;
            margin: 15px;

            h3 {
                font-size: 24px;
                font-weight: 400;
                text-align: center;
                padding: 0 0 15px 0;
            }

            a.button {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 15px auto 15px auto;
                text-decoration: none;
        
                background: ${Primary};
                color: ${FontDark};
                width: 100%;
                height: 40px;
                padding: 5px;
                border-radius: 5px;
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;

                svg {
                    height: 24px;
                    margin: 0 10px 0 0;
                }
        
                opacity: 0.75;
                &:hover { opacity: 1; }
            }
        }
    }
`;

declare const window;
declare const ethereum;

export function Connect() {
    const [networkError, setNetworkError] = useState(false);
    const [account, setAccount] = useState('');

    useLayoutEffect(() => {
        if (typeof ethereum !== undefined && window.ethereum) {
            setAccount(window.ethereum?.selectedAddress);
            window.ethereum?.on('accountsChanged', e => {
                setAccount(ethereum?.selectedAddress);
            });

            const chainId = window.ethereum?.chainId;
            if (chainId !== Networks.Development && chainId !== Networks.Testnet && chainId !== Networks.Mainnet) {
                setNetworkError(true);
            } else {
                setNetworkError(false)
            }
            window.ethereum?.on('chainChanged', chainId => {
                console.log(chainId);
                if (chainId !== Networks.Development && chainId !== Networks.Testnet && chainId !== Networks.Mainnet) {
                    setNetworkError(true);
                } else {
                    setNetworkError(false);
                }
            });
        }
    }, []);

    return(
        <ConnectStyles>
            <a
                className="connect-button"
                onClick={async e => {
                    if (typeof ethereum !== undefined) {
                        try {
                            await window.ethereum.request({ method: 'eth_requestAccounts' });
                            setAccount(window.ethereum.selectedAddress);
                        } catch (error) {
                            console.error(error);
                        }
                    }
                }}
            >
                {
                    account ? 
                    `${account.slice(0,5)}...${account.slice(account.length - 7, account.length)}`
                    : 'Connect Wallet'
                }
            </a>

            <div className={`overlay ${networkError ? 'active' : ''}`}>
                <div className="overlay-filter"/>
                <div className="overlay-card">
                    <h3>Switch to a Valid Network</h3>
                    <a className="button" onClick={e => switchTestnet(ethereum)}>
                        <svg viewBox="0 0 30 30" className="h-7" fill="rgb(120,214,75)">
                            <path d="M15 2.292a3.317 3.317 0 012.981 1.841l9.375 18.75a3.333 3.333 0 01-2.981 4.825H5.625a3.333 3.333 0 01-2.98-4.825l9.374-18.75A3.317 3.317 0 0115 2.292M15 0a5.625 5.625 0 00-5.031 3.108L.594 21.858A5.625 5.625 0 005.625 30h18.75a5.625 5.625 0 005.03-8.142l-9.374-18.75A5.625 5.625 0 0015 0z"></path>
                        </svg>
                        Aurora Testnet
                    </a>
                    <a className="button" onClick={e => switchMainnet(ethereum)}>
                        <svg viewBox="0 0 30 30" className="h-7" fill="rgb(120,214,75)">
                            <path d="M15 2.292a3.317 3.317 0 012.981 1.841l9.375 18.75a3.333 3.333 0 01-2.981 4.825H5.625a3.333 3.333 0 01-2.98-4.825l9.374-18.75A3.317 3.317 0 0115 2.292M15 0a5.625 5.625 0 00-5.031 3.108L.594 21.858A5.625 5.625 0 005.625 30h18.75a5.625 5.625 0 005.03-8.142l-9.374-18.75A5.625 5.625 0 0015 0z"></path>
                        </svg>
                        Aurora Mainnet
                    </a>
                </div>
            </div>
        </ConnectStyles>
    )
}