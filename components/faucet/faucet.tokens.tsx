import styled from "styled-components";
import { Primary, Card, FontDark } from "../common/common.layout";

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

export function FaucetTokens() {
    return(
        <FaucetTokensStyles>
            <div className="card">
                <h3>Get 1000 ETNA Test DAI</h3>
                <a className="button">
                    Receive 1000 DAI
                </a>
            </div>
            <div className="card">
                <h3>Get 1000 ETNA Test USDC</h3>
                <a className="button">
                    Receive 1000 USDC
                </a>
            </div>
            <div className="card large">
                <h3>Get 1000 ETNA Test USDT</h3>
                <a className="button">
                    Receive 1000 USDT
                </a>
            </div>
        </FaucetTokensStyles>
    )
}