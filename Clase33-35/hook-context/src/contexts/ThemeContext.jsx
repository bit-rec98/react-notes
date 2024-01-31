import { createContext, useState } from "react";

/* Para crear un contexto se realizan 3 pasos: */

// 1. Creación del contexto
const ThemeContext = createContext()

// 2. Armado del provider

const temaInicial = 'primary' /* Estado inicial */

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(temaInicial) 

    const handleTheme = () => {
        (theme === 'primary') ? setTheme('danger') : setTheme(temaInicial)
    }
    
    const data = {theme, handleTheme}

    return /*  */
}

// 3. Exportación
export { ThemeProvider }
export default ThemeContext

