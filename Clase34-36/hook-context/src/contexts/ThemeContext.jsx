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
    
    const data = {theme, handleTheme} /* Información que se quiere compartir entre los componentes - es más legible añadirla a una variable y enviar la variable misma ya que a veces se puede tener más de dos datos para enviar*/

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider> /* {children} hace referencia a los componentes que se necesita que reciban el estado del contexto */
}

// 3. Exportación
export { ThemeProvider }
export default ThemeContext

// Continuar en 1:50:00