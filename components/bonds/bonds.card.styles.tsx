import styled from 'styled-components';
import { Primary, Card, FontMedium, FontDark } from '../common/common.layout';

export const BondsCardStyles = styled.div`
    background-color: ${Card};    
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.05);
    padding: 15px;
    border-radius: 5px;

    width: calc(100% - 30px);
    max-width: calc(768px - 30px);
    margin: 15px;

    h2 {
        text-align: center;
        font-weight: 24px;
        font-weight: 500;
        padding: 0 0 15px 0;
    }

    div.sub-heading {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 15px 15px 15px 15px;

        div.sub-heading-column {
            width: calc(100% / 3);
            text-align: center;

            h3 {
                font-size: 18px;
                font-weight: 300;
                color: ${FontMedium};
            }

            p {
                font-size: 24px;
                font-weight: 600;
            }

            @media (max-width: 768px) {
                width: 100%;
                margin: 15px 0;
            }
        }
    }

    div.bond-row {
        display: flex;
        align-items: center;

        div.bond-column:nth-child(1) {
            width: 80px;
        }
        div.bond-column:nth-child(2) {
            width: 150px;
        }
        div.bond-column:nth-child(3) {
            width: 80px;
        }
        div.bond-column:nth-child(4) {
            width: 80px;
        }
        div.bond-column:nth-child(5) {
            text-align: right;
            width: 150px;
        }
        div.bond-column:nth-child(6) {
            width: 150px;
        }

        @media (max-width: 768px) {
            flex-wrap: wrap;
            margin: 15px 0;

            div.bond-column {
                width: 100% !important;
            }
        }

        div.bond-column {
            padding: 5px;
            font-size: 16px;
            font-weight: 500;

            img {
                height: 32px;
                margin: 15px auto;
            }

            a.bond-button {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0 0 auto;
                text-decoration: none;
        
                width: calc(100% - 30px);
                padding: 5px;
                border-radius: 5px;
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;

                border: 2px solid ${Primary};
                color: ${Primary};

                &:hover {
                    background: ${Primary};
                    color: white;
                }

                @media (max-width: 768px) {
                    width: 100%;
                    margin: 0;
                }
            }
        }

        &.heading {
            color: ${FontMedium};

            @media (max-width: 768px) {
                display: none;
            }
        }
    }

    a.claim-button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        background: ${Primary};
        color: ${FontDark};
        width: calc(100% - 30px);
        height: 40px;
        padding: 5px;
        margin: 15px 15px 30px 15px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;

        opacity: 0.75;
        &:hover { opacity: 1; }

        @media (max-width: 768px) {
            width: 100%;
            margin: 15px 0;
        }
    }
`;
