import styled from 'styled-components';

export const OutputContainer = styled.p`
    white-space: pre-line;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1``

export const InputContainer = styled.textarea`
    resize: none;
    width: 40%;
    min-width: 350px;
    padding: 6px;
    margin-bottom: 20px;
    font-size: 14px;
`

export const Button = styled.button`
    width: 40%;
    min-width: 350px;
    padding: 10px;
    background: #50a4ff;
    border: none;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    transition: background 0.5s;

    &:hover {
        cursor: pointer;
        background: #4688d0;
    }
`