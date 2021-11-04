import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #4d73e5;
    padding: 50px 0;
`

export const GameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

/* export const Header = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
` */
export const Lifes = styled.div`
    width: 140px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20vmax;
`
export const LifeItem = styled.p`
    font-size: 2em;
    z-index: 2;
`
export const BgLifes = styled.div`
    display: flex;
    z-index: 1;
    position: absolute;
`
export const BgLifeItem = styled.p`
    font-size: 2em;
`

/* export const TitleLogo = styled.h1`
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
` */

/* export const SeparatorLine = styled.div`
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent 0%, #fff 50%, transparent 100%);
` */

export const Actions = styled.div`
    margin-right: 1vmax;
    display: flex;
    flex-direction: column;
`
export const BtnAction = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    font-size: 2.5em;
    border-radius: 5px;
    transition: all 0.3s ease-in;

    margin: 5px 0;

    p {
        font-size: 0.3em;
        text-transform: uppercase;
        font-weight: bold;
        opacity: 0;
        transition: all 0.4s ease-in-out;
        color: #0b125b;
    }

    &:hover {
        background: rgb(3, 238, 249, 0.2);
    }
    &:hover>p {
        opacity: 1;
    }
    &:active {
        transform: scale(0.9);
    }
`

export const Questions = styled.div`
    width: 600px;
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