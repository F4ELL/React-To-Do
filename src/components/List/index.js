import React from 'react'
import { StyledList } from './StyledList';

export const List = ({ allTasks }) => {
    return (
        <>
            <StyledList>
                {allTasks.map((task, index) => (
                    <>
                    {!task.isCompleted &&
                        <li key={index}>{task.title}</li>
                    }
                    </>
                ))}
            </StyledList> 
        </>
    )
}


