import styled from "styled-components";

/* background: linear-gradient(143deg, #06102d 48%,#131386 48%); */
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #4d73e5;
    padding: 50px 0;
`

/* export const TitleLogo = styled.h1`
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
` */

export const ContainerStart = styled.div`
    margin: 0;
    padding: 0;
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(43deg, #06062d 38%,#1a59b3 38%);
    border-radius: 0 0 10px 10px;
`

export const ButtonStart = styled.div`
    margin: 0;
    padding: 0;
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
        color: #fff;
    }

    a:hover {
        -webkit-text-stroke: 3px #0d2059;
    }

    &:active {
        transform: scale(0.9);
    }
`