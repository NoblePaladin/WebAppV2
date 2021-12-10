import Link from 'next/link';
import styled from "styled-components";
import { Primary, Card, FontDark } from "../common/common.layout";

export const FaucetHeadingStyles = styled.div`
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
`;

export function FaucetHeading() {
    return(
        <FaucetHeadingStyles>
            <h2>
                ETNA Faucet
                <span>Testnet Prelaunch</span>
            </h2>
        </FaucetHeadingStyles>
    )
}