import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Question = styled.div`
    
`

export const QuestionText = styled.h3`
    color: #fff;
`

export const Answer = styled.p`
    background: #d2d6f9;
    border-radius: 10px;
    padding: 10px 20px;
    color: #06062d;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: #bdc2f4;
    }

    &:active {
        transform: scale(0.9); 
    }
`