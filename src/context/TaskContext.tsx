import { createContext, ReactNode, useState } from "react";

interface TaskTypes {
    id:string
    Task: string;
}
type TaskDeleteTypes = string;

interface TaskContextType {
    tasks: TaskTypes[];  // Espera um array de tarefas
    createNewTask: (data: TaskTypes) => void;  // Adiciona uma nova tarefa
    deleteTask:(id:string)=>void
}

interface TaskContextProviderProps {
    children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextType);

export function TaskContextProvider({ children }: TaskContextProviderProps) {

    const [tasks, setTasks] = useState<TaskTypes[]>([]);
    console.log(tasks)

    function createNewTask(data: TaskTypes) {
        setTasks((prevTasks) => [...prevTasks, data]);
       
    }
    function deleteTask(id:TaskDeleteTypes)
    {
          setTasks(tasks.filter(task => task.id!==id))
    }

    return (
        <TaskContext.Provider
            value={{
                createNewTask,
                tasks,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
