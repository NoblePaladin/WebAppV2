import Link from 'next/link';
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

export function IndexTokens() {
    return(
        <IndexTokensStyles>
            <div className="card">
                <img src="/image/currency/dai.svg"/>
                <h3>Buy ETNA with DAI</h3>
                <Link href="/bonds/dai">
                    <a className="button">
                        Buy with DAI
                    </a>
                </Link>
            </div>
            <div className="card">
                <img src="/image/currency/usdc.svg"/>
                <h3>Buy ETNA with USDC</h3>
                <Link href="/bonds/usdc">
                    <a className="button">
                        Buy with USDC
                    </a>
                </Link>
            </div>
            <div className="card">
                <img src="/image/currency/usdt.svg"/>
                <h3>Buy ETNA with USDT</h3>
                <Link href="/bonds/usdt">
                    <a className="button">
                        Buy with USDT
                    </a>
                </Link>
            </div>
            <div className="card disabled">
                <svg viewBox="0 0 30 30" className="h-7" fill="rgb(120,214,75)">
                    <path d="M15 2.292a3.317 3.317 0 012.981 1.841l9.375 18.75a3.333 3.333 0 01-2.981 4.825H5.625a3.333 3.333 0 01-2.98-4.825l9.374-18.75A3.317 3.317 0 0115 2.292M15 0a5.625 5.625 0 00-5.031 3.108L.594 21.858A5.625 5.625 0 005.625 30h18.75a5.625 5.625 0 005.03-8.142l-9.374-18.75A5.625 5.625 0 0015 0z"></path>
                </svg>
                <h3>Buy ETNA with Aurora</h3>
                <a className="button">
                    Coming Soon!
                </a>
            </div>
        </IndexTokensStyles>
    )
}