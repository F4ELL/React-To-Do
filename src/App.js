import React, { useState } from 'react'
import { Inputbar, Button, List } from './components';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyles';


function App() {
  
  const [ task, setTask ] = useState('');
  const [ listTasks, setListTasks ] = useState([]);

  const createTask = () => {
    if(task === '' || task === ' '){      
      alert("Digite uma tarefa!");
    } else{      
      setListTasks(listTasks => [...listTasks, {id: listTasks.length, title: task, isCompleted: false}]);
    }
    setTask('');
  }

  return (
    <>
      <GlobalStyle />
      <Inputbar handleTextTask={setTask} placeholder="Ex: Tirar o lixo" value={task}/>
      <Button textButton="Adicionar tarefa" handleButton={() => createTask()} />
      <List allTasks={listTasks} updateTasks={setListTasks}/>      
    </>
  );
}

export default App;
