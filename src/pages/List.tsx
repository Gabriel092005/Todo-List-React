import { FileText, PaperPlaneTilt, Trash } from "phosphor-react";
import { Header } from "../components/Header.tsx";
import { TaskInput } from "../components/TaskInput/TaskInput.tsx";
import { EmptyContainer, ListContainer, ListContainerBody, TodoListHeader} from "./styles.ts";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.tsx";



export function List(){

    type TaskDeleteTypes = string;
    
    const { tasks,deleteTask } = useContext(TaskContext)
    const count = tasks.length
    function handleDeleteTask(id:TaskDeleteTypes){
        deleteTask(id)
        
    }
    return(
        <>
        <Header/>
        <TaskInput />
        <ListContainer>
        <ListContainerBody>
        <table>
    <TodoListHeader>
        <tr>
            <th>
                <strong>Tarefas Criadas</strong> <span>{count}</span>
            </th>
            <th>
                <span>Concluídas </span><span>2 de {count}</span>
            </th>
        </tr>
    </TodoListHeader>
   
      <tbody>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => {
            return (
                <tr key={task.id}>
                    <td>{task.Task}</td>
                    <td>
                        <span>
                           <button><Trash onClick={()=>handleDeleteTask(task.id)} /></button>
                        </span>
                    </td>
                </tr>
            );
        })
    ) : (
      
     
                <EmptyContainer>
                     <div>
       
                      <FileText color="gray" size={150}></FileText>
                      <p>
                      <strong>Você ainda não tem tarefas cadastradas</strong>
                      </p>
                      <p>Crie novas tarefas melhor seus a fazeres</p>
                    </div>
                </EmptyContainer>
       
    )}
</tbody>
 
   
</table>
</ListContainerBody>
</ListContainer>
     
        </>
    )
}