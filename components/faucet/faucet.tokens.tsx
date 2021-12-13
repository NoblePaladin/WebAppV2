import styled from "styled-components";
import { Primary, Card, FontDark } from "../common/common.layout";
import { ConfigureMockDAIContract, ConfigureMockUSDCContract, ConfigureMockUSDTContract } from '../../web3/web3.contracts';

export const FaucetTokensStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 768px;

    div.card {
        background-color: ${Card};    
        box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.05);
        padding: 15px;
        border-radius: 5px;    

        width: calc(50% - 30px);
        margin: 15px;

        &.large {
            width: calc(100% - 30px);
        }

        @media (max-width: 1128px) {
            width: calc(100% - 30px);
        }

        &.disabled {
            opacity: 0.5;
            pointer-events: none;
        }

        img, svg {
            display: block;
            height: 42px;
            margin: 15px auto;
        }

        h3 {
            text-align: center;
        }

        a.button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 15px auto 0 auto;
            text-decoration: none;
    
            background: ${Primary};
            color: ${FontDark};
            width: 100%;
            padding: 5px;
            border-radius: 5px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
    
            opacity: 0.75;
            &:hover { opacity: 1; }
        }
    }
`;

declare const web3, ethereum;

export function FaucetTokens() {
    return(
        <FaucetTokensStyles>
            <div className="card">
                <img src="/image/currency/dai.svg"/>
                <h3>Get 1000 Test DAI</h3>
                <a
                    className="button"
                    onClick={async e => {
                        const contract = ConfigureMockDAIContract(web3.currentProvider);

                        await contract.methods.faucet(ethereum.selectedAddress).send({
                            from: ethereum.selectedAddress,
                        })
                    }}
                >
                    Receive 1000 DAI
                </a>
            </div>
            <div className="card">
                <img src="/image/currency/usdc.svg"/>
                <h3>Get 1000 Test USDC</h3>
                <a
                    className="button"
                    onClick={async e => {
                        const contract = ConfigureMockUSDCContract(web3.currentProvider);

                        await contract.methods.faucet(ethereum.selectedAddress).send({
                            from: ethereum.selectedAddress,
                        })
                    }}
                >
                    Receive 1000 USDC
                </a>
            </div>
            <div className="card large">
                <img src="/image/currency/usdt.svg"/>
                <h3>Get 1000 Test USDT</h3>
                <a
                    className="button"
                    onClick={async e => {
                        const contract = ConfigureMockUSDTContract(web3.currentProvider);

                        await contract.methods.faucet(ethereum.selectedAddress).send({
                            from: ethereum.selectedAddress,
                        })
                    }}
                >
                    Receive 1000 USDT
                </a>
            </div>
        </FaucetTokensStyles>
    )
}