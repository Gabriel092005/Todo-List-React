import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Themes/default";
import { GlobalStyle } from "./styles/global";
import { List } from "./pages/List";
import { TaskContextProvider } from "./context/TaskContext";




export function App(){
  return(
    <>
   <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TaskContextProvider>
           <List/>
      </TaskContextProvider>
      </ThemeProvider>
    </>
  )
}