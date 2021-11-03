import styled from "styled-components";

export const Container = styled.div``

export const Header = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TitleLogo = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 50px;
    text-align: left;
    font-family: 'Fredoka One';
    font-weight: bold;
    margin-left: 12vmax;

    background-image: linear-gradient(-37deg, #06102d 85%, #131386 85%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
`

export const SeparatorLine = styled.div`
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent 0%, #fff 50%, transparent 100%);
`