import React from 'react'
import Check from '../Check';
import Delete from '../Delete';
import { StyledList } from './StyledList';

export const List = ({ allTasks }) => {
    return (
        <>
            <StyledList>
                {allTasks.map((task, index) => (
                    <>
                    {!task.isCompleted &&
                        <>
                            <Delete />
                            <li key={index}>{task.title}</li>
                            <Check />
                        </>
                    }
                    </>
                ))}
            </StyledList> 
        </>
    )
}


