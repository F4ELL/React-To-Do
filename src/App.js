import React, { useState, useEffect } from 'react'
import { Inputbar, Button, List } from './components';
import { GlobalStyle, ContainerOut, ContainerInputBar, ContainerIn } from './components/GlobalStyles/GlobalStyles';



function App() {
  
  const [ task, setTask ] = useState('');
  const [ listTasks, setListTasks ] = useState([]);
  
  useEffect(()=>{
    if(localStorage.getItem('tasks')){
      const storageTasks = JSON.parse(localStorage.getItem('tasks') || []);

      if(storageTasks.length > 0){
        setListTasks(storageTasks);
      }
    }
  }, []);

  const createTask = () => {
    if(task === '' || task === ' '){      
      alert("Digite uma tarefa!");
    } else{      
      setListTasks(listTasks => [{id: listTasks.length, title: task, isCompleted: false}, ...listTasks]);
      localStorage.setItem('tasks', JSON.stringify([{id: listTasks.length, title: task, isCompleted: false}, ...listTasks]));
    }
    setTask('');
  }

  return (
    <>
      <ContainerOut>
        <ContainerIn>
          <GlobalStyle />
          <ContainerInputBar>
            <Inputbar handleTextTask={setTask} placeholder="Ex: Tirar o lixo" value={task}/>
            <Button textButton="Adicionar tarefa" buttonPadding={'15px 15px'}handleButton={() => createTask()} buttonColor={'#FF5ADB'} buttonWidth={'180px'} buttonColorHover={'#ff29d0'}/>
          </ContainerInputBar>
          <List allTasks={listTasks} updateTasks={setListTasks}/>
        </ContainerIn>
      </ContainerOut>     
    </>
  );
}

export default App;
