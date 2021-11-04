import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Fredoka One';
    margin: 0;
    padding: 0;
`

export const Header = styled.div`
    height: 60px;
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

    background-image: linear-gradient(-37deg, #06102d 45%, #131386 45%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
`
export const PointsContainer = styled.div`
    width: 130px;
    height: 60px;
    background: #1a0d59;
    border-radius: 10px 10px 0 0;
    outline: 2px solid #fff;
    box-sizing: border-box;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const Points = styled.p`
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 1.5em;
`
export const PointsTitle = styled.p`
    margin: 0;
    padding: 0;
    margin-top: 10px;
    widht: 130px;
    font-size: 0.8em;
    text-align: left;
    color: #1a59b3;
`

export const SeparatorLine = styled.div`
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent 0%, #fff 50%, transparent 100%);
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.1);
`