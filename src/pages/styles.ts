import styled from "styled-components";

export const ListContainer = styled.div`
   flex: 1;
   
   height: 100vh; // Garante o preenchimento da altura da tela
    width: 100vw;

table{
    width: 100%;
    
    width: 100%;
    tbody{
        td{
            background-color: ${props=>props.theme["gray-700"]};
            border-top: 4px solid ${props=>props.theme["gray-800"]};
            padding: 1rem;
            width: 100%;
            span:hover{
                color: red;
            }
            button{
                background: transparent;
                color: ${props=>props.theme["gray-100"]};
                border: none;

                
            }
            button:hover{
                 color: red;
            }
        }
        td:last-child {
        text-align: right;

        span{
            background-color: ${props=>props.theme["gray-700"]};
        
        }
        

}
   

    }
}


   

`
export const ListContainerBody = styled.div`
  display: flex;
  justify-content: center; // Alinha horizontalmente
  align-items: center; // Alinha verticalmente
  margin:3rem;


`

export const TodoListHeader= styled.thead`
margin: 5rem;


  th {
    p{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin: 0.245rem;
        font-size: 0.9rem;
        /* background-color: ${props=>props.theme["gray-700"]}; */

    }
    flex: 1;
  }
  th:first-child{
       strong{
        color: ${props=>props.theme.blue};

          span{
               margin-left: 1rem;
               background-color: ${props=>props.theme.purpe_DARK};
               height: 3rem;
               

          }
          
       }
        text-align: left;
    }
 
        
       
    th:last-child {   
        p{
            color: ${props=>props.theme.purple};
          
        }
    }
    

`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:15rem ;
  /* background-color: ${props=>props.theme['gray-700']}; */

  

  div{
    strong{
    color: ${props=>props.theme['gray-100']};
    
  }
  } 
 


`