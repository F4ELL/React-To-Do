import React from 'react'
import { StyledInput } from './StyledInput';

export const Inputbar = ({ handleTextTask, placeholder, value }) => { 
    
    return (
        <>
            <StyledInput onChange={({ target }) => handleTextTask(target.value)} placeholder={placeholder} value={value}/>
        </>
    )
}


