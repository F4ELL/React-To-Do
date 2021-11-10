import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Barlow', sans-serif;
    }
    body{
        background-color: #F4F4F4;
        min-height: 100vh;
        height: 100%;
    }
`;

export const ContainerOut = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;    
    height: 100vh;
`;

export const ContainerIn = styled.div`
    width: 100%;
    max-width: 600px;
    padding-top: 180px;
`;

export const ContainerInputBar = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 80px;
`;

export const ContainerList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;