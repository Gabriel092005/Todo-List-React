import'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof  defaultTheme;

declare module 'styled-components'{
    //Criando uma typagem do styled components

    export interface DefaultTheme extends  ThemeType{

    }
}