import React from 'react'
import { Button } from '../Button'
import { StyledList } from './StyledList';
import { ContainerList } from '../GlobalStyles/GlobalStyles';
import Vector from '../../assets/images/Vector.png';
import Plus from '../../assets/images/Plus.png';

export const List = ({ allTasks, updateTasks }) => {
    
    const deleteTask = (id) => {
        
        const isDifference = (item) => {
            return id !== item.id;
        }
        const listAtt = allTasks.filter(isDifference);
        updateTasks(listAtt);
        
        localStorage.setItem('tasks', JSON.stringify(listAtt));
    }

    const completeTask = (id) => {

        const taskCopy = [...allTasks];
        const index = allTasks.findIndex((i)=> i.id === id);
        taskCopy[index].isCompleted = true;
        
        updateTasks(taskCopy);

        localStorage.setItem('tasks', JSON.stringify(taskCopy));
    }
    
    return (
        <>
            <StyledList>
                {allTasks.map((task, index) => (
                    <div className='item' key={index}>
                    {task.isCompleted === false &&
                        <>                    
                            <ContainerList>
                                <div className="delete">
                                    <Button handleButton={()=> deleteTask(task.id)} buttonHeight={'100%'}buttonColor={'#FF5A5A'} buttonPadding={'0'} buttonWidth={'100%'} buttonColorHover={'#ff4242'}>
                                        <img className='small' src={Plus} alt='Deletar Tarefa' />
                                    </Button> 
                                </div>
                                <li>{task.title}</li>
                                    <Button buttonColor={'#5AFF74'} buttonWidth={'60px'} buttonPadding={'0'} buttonHeight={'50px'} buttonColorHover={'#30ff51'} handleButton={()=> completeTask(task.id)}>
                                        <img className='bigger' src={Vector} alt='Tarefa Concluída' />
                                    </Button>
                            </ContainerList>             
                        </>
                    }
                    </div>
                ))}
            </StyledList> 
        </>
    )
}


