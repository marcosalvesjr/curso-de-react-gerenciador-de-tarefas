import { useEffect, useState } from "react";
import Tasks from './components/Tasks'
import { v4 } from "uuid";
import AddTasks from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => { localStorage.setItem("tasks", JSON.stringify(tasks)) }, [tasks]);

  //CHAMANDO API
  useEffect(() => {
    async function fetchTasks() {

      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        method: 'GET'
      })
      const data = await response.json();
      
      //PEGAR DADOS QUE ELA RETORNA
      setTasks(data)
      //ARMAZENAR/PERSISTIR ESSES DADOS NO STATE
    }
    //fetchTasks();
  }, []);


  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      //PRECISO ATUALIZAR A TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      //NÃO PRECISO ATUALIZAR MINHA TAREFA
      return task;
    })
    setTasks(newTasks);

  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask)
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4,
      title: title,
      description: description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  return (

    <div className="w-scree h-screen bg-slate-500 flex justify-center">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>

        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />

      </div>


    </div>
  )
}

export default App;