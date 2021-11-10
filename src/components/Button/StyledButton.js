import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${props => props.buttonColor};
    border: none;
    color: #FFF;
    padding: ${props => props.buttonPadding};
    max-width: ${props => props.buttonWidth};
    width: 100%;
    height: ${props => props.buttonHeight}; 
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease-out;
    display: flex;
    justify-content: center;
    align-items: center; 

    &:hover{
        background-color: ${props => props.buttonColorHover};
        transition: 0.2s ease-out;
    }
`;
