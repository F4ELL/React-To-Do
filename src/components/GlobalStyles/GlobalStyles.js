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
    }
`;

export const StyledFlex = styled.div`
    display: flex;
`;