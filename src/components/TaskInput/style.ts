import styled from "styled-components";



export const TaskInputContainer= styled.div`
 flex: 1;
 width:80rem;
 top: 12rem;
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 overflow-y: auto;
 input{
    margin: 0.725rem;
    background: ${props=>props.theme['gray-700']};
    color: ${props=>props.theme['gray-100']};
    height: 3rem;
    width: 35rem;
    border-radius: 5px;
   padding: 4rem 1.5rem;
   border: 0;
   padding: 0 0.5rem;
   }
   button{
    background: ${props=>props.theme.blue_dark};
    border: 0;
    color: aliceblue;
    border-radius: 5px;
    height: 3rem;

    width: 5rem;
      
      
   }
   button:hover{
      background: ${props=>props.theme.blue};
      transition: 1.5ms;
   }
   
 /* background: gainsboro; */

`