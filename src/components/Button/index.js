import React from 'react'
import { StyledButton } from './StyledButton'

export const Button = ({ children, textButton, handleButton, buttonColor, buttonWidth, buttonColorHover, buttonHeight, buttonPadding }) => {
    return (
        <>
          <StyledButton onClick={() => handleButton()} buttonColor={buttonColor} buttonWidth={buttonWidth} buttonColorHover={buttonColorHover} buttonHeight={buttonHeight} buttonPadding={buttonPadding}>{textButton ? textButton : children}</StyledButton>   
        </>
    )
}


