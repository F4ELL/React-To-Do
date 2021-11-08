import React, { useState } from 'react'
import { Inputbar, Button, List } from './components';


function App() {
  
  const [ task, setTask ] = useState('');
  const [ listTasks, setListTasks ] = useState([]);

  const createTask = () => {
    if(task === ''){
      alert("Digite uma tarefa!");
    } else{
      setListTasks(listTasks => [...listTasks, {id: listTasks.length, title: task, isCompleted: false}]);
    }
  }

  return (
    <>
      <Inputbar handleTextTask={setTask}/>
      <Button textButton="Adicionar tarefa" handleButton={() => createTask()} />
      <List allTasks={listTasks} />      
    </>
  );
}

export default App;
