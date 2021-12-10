import { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Primary, CardDark, FontDark } from "../common/common.layout";

export const ConnectStyles = styled.a`
    position: fixed;
    right: 15px;
    top: 15px;
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
`;

declare const ethereum;

export function Connect() {
    const [account, setAccount] = useState('');

    useLayoutEffect(() => {
        if (ethereum) {
            setAccount(ethereum.selectedAddress);
            ethereum.on('accountsChanged', e => {
                setAccount(ethereum.selectedAddress);
            });
        }
    }, []);

    return(
        <ConnectStyles
            onClick={async e => {
                if (ethereum) {
                    try {
                        await ethereum.request({ method: 'eth_requestAccounts' });
                        setAccount(ethereum.selectedAddress);
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
        </ConnectStyles>
    )
}