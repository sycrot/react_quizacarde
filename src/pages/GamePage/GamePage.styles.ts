import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background: #a6a6f2;
    padding: 50px 0;
`

export const Header = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Lifes = styled.div`
    width: 140px;
    display: flex;
    justify-content: flex-end;
    margin-right: 20vmax;
`
export const LifeItem = styled.p`
    font-size: 2em;
    z-index: 2;
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

export const Questions = styled.div`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    background: #06062d;
    border-radius: 0 0 10px 10px;
    padding: 20px 30px;
    box-sizing: border-box;
`

export const ButtonNext = styled.button`
    width: 180px;
    height: 50px;
    margin-left: 67%;
    border: none;
    font-family: 'Fredoka One';
    color: #06062d;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    background: #131d86;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: #111975;
    }

    &:active {
        transform: scale(0.9);
    }
`