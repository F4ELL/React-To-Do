import React from 'react'
import { StyledButton } from './StyledButton'

export const Button = ({ textButton, handleButton }) => {
    return (
        <>
          <StyledButton onClick={() => handleButton()}>{textButton}</StyledButton>   
        </>
    )
}


