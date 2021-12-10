import Link from 'next/link';
import { useState } from "react";
import styled from "styled-components";
import { Primary, Card, CardDark, FontMedium } from './common.layout';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { BiMenuAltLeft } from 'react-icons/bi';

export const SidebarStyles = styled.div`
    a.toggle-menu {
        position: fixed;
        left: 15px;
        top: 15px;
        background: ${CardDark};
        border-radius: 5px;
        z-index: 15;

        display: none;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;
        font-size: 18px;

        @media (max-width: 1128px) {
            display: flex;
        }
    }

    div.logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        margin: auto;
        border: 2px solid white;

        h3 {
            font-size: 20px;
            line-height: 1;
        }
    }

    div.sidebar-backdrop {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 13;
        background: rgba(30, 30, 30, 0.5);
        backdrop-filter: blur(15px);

        opacity: 0;
        pointer-events: none;

        &.visible {
            opacity: 1;
        }
    }

    div.sidebar {
        position: relative;
        background-color: ${Card};    
        width: 280px;
        min-height: 100vh;
        height: 100%;
        z-index: 14;
        box-shadow: 0 0 15px 30px rgba(0, 0, 0, 0.1);

        padding: 30px 0;

        @media (max-width: 1128px) {
            position: fixed;
            left: -280px;
            top: 0;

            &.visible {
                left: 0;
            }
        }

        img.logo {
            height: 64px;
            margin: auto;
        }

        a.link {
            display: flex;
            align-items: center;
            padding: 7.5px 30px;
            font-weight: 500;
            text-underline-offset: .23rem;
            cursor: pointer;
            color: white;
            text-decoration: none;

            &:first-of-type {
                margin: 30px 0 0 0;
            }

            &:hover { color: ${Primary}; }

            &.active {
                text-decoration: underline;
            }        

            img {
                height: 24px;
                margin: 2.5px 10px 0 0;
            }
        }

        div.sub-links {
            padding: 0px 5px 10px 60px;
            h4 {
                color: ${FontMedium};
                font-size: 12px;
                font-weight: 400;
                padding: 5px;
            }

            a.sub-link {
                display: flex;
                align-items: center;
                padding: 5px;
                font-size: 14px;
                font-weight: 400;
                cursor: pointer;
                color: white;
                text-decoration: none;
                
                &:hover { color: ${Primary}; }

                img {
                    height: 18px;
                    margin: 0 10px 0 0;
                }
            }
        }

        div.bottom-bar {
            position: absolute;
            left: 0;
            bottom: 15px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            a.ext-link {
                padding: 15px;
                font-size: 24px;
                color: #FFF;
                cursor: pointer;

                &:hover {
                    transform: scale(1.25);
                    color: ${Primary};
                }
            }
        }
    }
`;

export interface SidebarI {
    tab: string;
}

export function Sidebar({ tab }: SidebarI) {
    const [menu, setMenu] = useState(false);

    return(
        <SidebarStyles>
            <a className="toggle-menu" onClick={e => setMenu(!menu)}>
                <BiMenuAltLeft/>
            </a>
            <div className={`sidebar-backdrop ${menu ? 'visible' : ''}`}/>
            <div className={`sidebar ${menu ? 'visible' : ''}`}>
                <div className="logo">
                    <h3>ET</h3>
                    <h3>NA</h3>
                </div>

                <Link href="/">
                    <a className={`link ${tab === 'dashboard' ? 'active' : ''}`}>
                        <img src="/image/icons/dashboard.svg"/>
                        Dashboard
                    </a>
                </Link>
                <Link href="/stake">
                    <a className={`link ${tab === 'stake' ? 'active' : ''}`}>
                        <img src="/image/icons/stake.svg"/>
                        Stake
                    </a>
                </Link>
                <Link href="/bonds">
                    <a className={`link ${tab === 'bonds' ? 'active' : ''}`}>
                        <img src="/image/icons/bond.svg"/>
                        Bonds
                    </a>
                </Link>
                <div className="sub-links">
                    <h4>Available Bonds</h4>
                    <Link href="/bonds/dai">
                        <a className="sub-link">
                            <img src="/image/currency/dai.svg"/>
                            DAI
                        </a>
                    </Link>
                    <Link href="/bonds/usdc">
                        <a className="sub-link">
                            <img src="/image/currency/usdc.svg"/>
                            USDC
                        </a>
                    </Link>
                    <Link href="/bonds/usdt">
                        <a className="sub-link">
                            <img src="/image/currency/usdt.svg"/>
                            USDT
                        </a>
                    </Link>
                </div>

                <div className="bottom-bar">
                    <a className="ext-link" href="https://github.com/ETNADao" target="github">
                        <AiFillGithub/>
                    </a>
                    <a className="ext-link" href="https://twitter.com/ETNADao" target="twitter">
                        <AiFillTwitterCircle/>
                    </a>
                    <a className="ext-link" href="https://discord.gg/9QxE8cXy" target="discord">
                        <SiDiscord/>
                    </a>
                </div>
            </div>
        </SidebarStyles>
    )
}