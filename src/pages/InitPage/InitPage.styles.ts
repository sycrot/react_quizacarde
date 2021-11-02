import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(143deg, #06102d 48%,#131386 48%);
    padding: 150px 0;
`

export const TitleLogo = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 10vmax;
    text-align: center;
    font-family: 'Fredoka One';
    font-weight: bold;

    background-image: linear-gradient(-37deg, #06102d 34%, #131386 34%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
`

export const ButtonStart = styled.div`
    text-align: center;
    transition: transform 0.1s ease-in-out;
    a {
        margin: 0;
        padding: 0;
        font-family: 'Luckiest Guy';
        font-size: 10.5vmax;
        text-transform: uppercase;
        letter-spacing: -0.1em;
        text-decoration: none;
        transition: -webkit-text-stroke 1s ease-in-out;
    }
    background: linear-gradient(-38deg, #06102d 48%, #131386 48%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    a:hover {
        -webkit-text-stroke: 3px #4d59e5;
    }

    &:active {
        transform: scale(0.9);
    }
`