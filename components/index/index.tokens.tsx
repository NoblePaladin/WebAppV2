import styled from "styled-components";
import { Primary, Card, FontDark } from "../common/common.layout";

export const IndexTokensStyles = styled.div`
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

export function IndexTokens() {
    return(
        <IndexTokensStyles>
            <div className="card">
                <h3>Buy ETNA with DAI</h3>
                <a className="button">
                    Buy with DAI
                </a>
            </div>
            <div className="card">
                <h3>Buy ETNA with USDC</h3>
                <a className="button">
                    Buy with USDC
                </a>
            </div>
            <div className="card">
                <h3>Buy ETNA with USDT</h3>
                <a className="button">
                    Buy with USDT
                </a>
            </div>
            <div className="card disabled">
                <h3>Buy ETNA with Aurora</h3>
                <a className="button">
                    Coming Soon!
                </a>
            </div>
        </IndexTokensStyles>
    )
}