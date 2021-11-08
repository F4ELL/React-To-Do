import React from 'react'
import { Input } from './StyledInput';

export const Inputbar = ({ handleTextTask, placeholder }) => { 
    
    return (
        <>
            <Input onChange={({ target }) => handleTextTask(target.value)} placeholder={placeholder}/>
        </>
    )
}


