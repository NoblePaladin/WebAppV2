import styled from 'styled-components';
import { Primary, Card, CardDark, FontDark, FontMedium } from '../common/common.layout';

export const StakeCardStyles = styled.div`
    background-color: ${Card};    
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.05);
    padding: 30px;
    border-radius: 5px;

    width: calc(100% - 30px);
    max-width: calc(768px - 30px);
    margin: 15px;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    h2 {
        text-align: center;
        font-weight: 24px;
        font-weight: 500;
        padding: 0 0 15px 0;
    }

    div.sub-heading {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 15px 15px 60px 15px;

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

    div.toggle-heading {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0 30px 0;

        a.toggle-button {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            padding: 5px 0px;
            margin: 0 7.5px;
            font-size: 18px;
            font-weight: 500;
            width: 90px;
            border-bottom: 2px solid transparent;

            &.active {
                color: ${Primary};
                border-bottom: 2px solid ${Primary};
            }
        }
    }

    div.form {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0 0 30px 0;

        div.form-input {
            position: relative;
            border: 1px solid white;
            border-radius: 5px;
            width: calc(100% - 195px);
            height: 40px;
            margin: 0 15px 0 0;

            @media (max-width: 768px) {
                width: 100%;
                margin: 0;
            }

            input {
                width: 100%;
                height: 100%;
                background: transparent;
                border: none;
                outline: none;
                color: white;
                padding: 0 15px;
                font-size: 18px;
            }
    
            input[type=number]::-webkit-inner-spin-button, 
            input[type=number]::-webkit-outer-spin-button {
                opacity: 0;
            }

            a.max-button {
                padding: 15px;
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                font-size: 18px;
                cursor: pointer;
    
                display: flex;
                align-items: center;
            }
        }

        a.stake-button {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
    
            background: ${Primary};
            color: ${FontDark};
            width: 180px;
            height: 40px;
            padding: 5px;
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
    }

    div.info-row {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        font-size: 14px;
        font-weight: 600;
    }

    div.line {
        background: rgba(256, 256, 256, 0.1);
        width: 100%;
        height: 1px;
        margin: 15px 0;
    }
`;