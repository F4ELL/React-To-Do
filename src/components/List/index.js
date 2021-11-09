import React from 'react'
import Check from '../Check';
import Delete from '../Delete';
import { StyledList } from './StyledList';

export const List = ({ allTasks }) => {
    
    const deleteTask = () => {
        const listAtt = allTasks.filter((id)=>{
            return id !== allTasks.id;
        });
    }
    
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


