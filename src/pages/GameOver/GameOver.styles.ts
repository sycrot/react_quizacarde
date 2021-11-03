import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #a6a6f2;
    padding: 50px 0;
    font-family: 'Fredoka One';
`

export const Points = styled.div`
    width: 600px;
    margin: 0;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    background: #06062d;
    border-radius: 0 0 10px 10px;
    box-sizing: border-box;
`

export const Text = styled.h1`
    width: 100%;
    margin: 0;
    background: #df2050;
    border-radius: 0 0 10px 10px;
    box-sizing: border-box;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Luckiest Guy';
    color: #ec7996;
    padding: 30px;
    letter-spacing: 3px;
`

export const PointsText = styled.div`
    margin: 0;
    text-align: center;
    padding: 50px 80px;
    color: #fff;
    letter-spacing: 5px;
    text-transform: uppercase;
`
export const NumPoints = styled.h3`
    margin: 0;
    margin-top: 2vmax;
`
export const Icon = styled.p`
    margin: 0;
    padding: 0;
    font-size: 6em;
`

export const ButtonNewGame = styled.div`
    text-align: center;
    padding: 25px;
    background: #138660;
    border-radius: 0 0 10px 10px;
    cursor: pointer;

    color: #fff;
    text-transform: uppercase;

    &:hover {
        background: #0d5940;
    }
`