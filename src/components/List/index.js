import React from 'react'
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

    const completeTask = (id) => {

        const taskCopy = allTasks;
        const index = allTasks.findIndex((i)=> i.id == id);
        taskCopy[index].isCompleted = true;
        
        updateTasks(taskCopy);

        const ifCompleted = (item) => {
            return item.isCompleted === false;
        }

        const listAtt = allTasks.filter(ifCompleted);
        updateTasks(listAtt);
    }
    
    return (
        <>
            <StyledList>
                {allTasks.map((task, index) => (
                    <div key={index}>
                    {!task.isCompleted &&
                        <>
                            <Button handleButton={()=> deleteTask(task.id)} buttonColor={'#FF5A5A'}>X</Button>
                            <li>{task.title}</li>
                            <Button buttonColor={'#5AFF74'} handleButton={()=> completeTask(task.id)}/>
                        </>
                    }
                    </div>
                ))}
            </StyledList> 
        </>
    )
}


