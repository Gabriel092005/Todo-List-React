import { HeaderContainer, HeaderContent } from "./style";
import TodoListLogo from '../../assets/logo.svg'


export function Header(){
    return(
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={TodoListLogo} alt="" />
                </HeaderContent>
            </HeaderContainer>
            
        </div>
    )
}