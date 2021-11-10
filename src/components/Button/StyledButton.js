import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${props => props.buttonColor};
    border: none;
    color: #FFF;
    padding: 8px 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover{
        background-color: #ff29d0;
        transition: 0.2s ease-out;
    }
`;
