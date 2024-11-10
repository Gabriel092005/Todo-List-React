import { TaskInputContainer } from "./style";
import {Plus} from 'phosphor-react'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form'
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";



export function TaskInput(){

   const TaskSchema = z.object({
    Task:z.string()
   })
   const {createNewTask} = useContext(TaskContext)

   

   type TaskSchemaInput = z.infer<typeof TaskSchema>

   const { register,handleSubmit} = useForm<TaskSchemaInput>({
    resolver:zodResolver(TaskSchema)
 })

 function handleCreateNewTask(data: TaskSchemaInput) {
   
    createNewTask({ 
        id: String(new Date().getTime()), 
        Task: data. Task
    }); 
}
    return(
         <>
            <TaskInputContainer >
                <form action="" onSubmit={handleSubmit(handleCreateNewTask)}>
                <input {...register('Task')} type="text" placeholder="Adicione uma nova Tarefa" required />
                <button type="submit">
                    Criar 
                    <Plus width={10}  />
                </button>

                </form>
            
            </TaskInputContainer>
         </>
    )
}

