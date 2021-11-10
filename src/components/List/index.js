import React from 'react'
import Check from '../Check';
import { Button } from '../Button'
import { StyledList } from './StyledList';

export const List = ({ allTasks, updateTasks }) => {
    
    const deleteTask = (id) => {
        
        const isDifference = (item) => {
            return id !== item.id;
        }

        const listAtt = allTasks.filter(isDifference);
        updateTasks(listAtt);
       
    }
    
    return (
        <>
            <StyledList>
                {allTasks.map((task, index) => (
                    <div key={index}>
                    {!task.isCompleted &&
                        <>
                            <Button handleButton={()=> deleteTask(task.id)}>X</Button>
                            <li>{task.title}</li>
                            <Check />
                        </>
                    }
                    </div>
                ))}
            </StyledList> 
        </>
    )
}


