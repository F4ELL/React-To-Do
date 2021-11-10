import React from 'react'
import { StyledButton } from './StyledButton'

export const Button = ({ textButton, handleButton, buttonColor }) => {
    return (
        <>
          <StyledButton onClick={() => handleButton()} buttonColor={buttonColor}>{textButton}</StyledButton>   
        </>
    )
}


