import Link from 'next/link';
import styled from "styled-components";
import { Primary, Card, FontDark } from "../common/common.layout";

export const IndexHeadingStyles = styled.div`
    background-color: ${Card};    
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.05);
    padding: 15px;
    border-radius: 5px;
    
    width: calc(100% - 30px);
    max-width: calc(768px - 30px);
    margin: 15px;

    h2 {
        font-size: 24px;
        text-align: center;
        padding: 15px;

        span {
            font-size: 14px;
            padding: 0 5px;
        }
    }

    p {
        font-size: 12px;
        text-align: center;
        padding: 0 0 15px 0;
    }

    a.button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px auto;
        text-decoration: none;

        background: ${Primary};
        color: ${FontDark};
        width: 100%;
        max-width: 320px;
        padding: 5px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;

        opacity: 0.75;
        &:hover { opacity: 1; }
    }
`;

export function IndexHeading() {
    return(
        <IndexHeadingStyles>
            <h2>
                ETNA DAO
                <span>Testnet Prelaunch</span>
            </h2>
            <p>
                In order to test out the new Testnet Prelaunch. Please use the faucet to receive some free test tokens.
            </p>

            <Link href="/faucet">
                <a className="button">
                    Faucet
                </a>
            </Link>
        </IndexHeadingStyles>
    )
}