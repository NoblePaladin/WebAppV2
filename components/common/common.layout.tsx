import styled from "styled-components";

export const Layout = styled.div`
    min-height: calc(100vh - 90px);
    min-width: 100%;

    display: flex;
`;

export const ContentLayout = styled.div`
    width: calc(100% - 280px);
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1128px) {
        padding: 90px 0;
        width: 100vw;
    }
`;

export const Primary = `#F8CC82`;
export const PrimaryLight = `#FDE8C4`;
export const Card = `rgba(40, 40, 40, 0.4)`;
export const CardDark = `rgba(40, 40, 40, 1)`;
export const FontDark = `#333333`;
export const FontMedium = `#999`;
