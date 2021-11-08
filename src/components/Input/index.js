import React from 'react'
import { Input } from './StyledInput';

export const Inputbar = ({ handleTextTask }) => { 
    
    return (
        <>
            <Input onChange={({ target }) => handleTextTask(target.value)}/>
        </>
    )
}


