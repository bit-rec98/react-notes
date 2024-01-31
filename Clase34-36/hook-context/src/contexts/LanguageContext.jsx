import { createContext, useState } from "react";
import { translations } from "../utils/translations";

// 1. Creando contexto
const LanguageContext = createContext()

const lenguajeInicial = 'es'

// 2. Armando el provider - Componente contenedor
const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(lenguajeInicial) 
    const [texts, setTexts] = useState(translations[language])

    const handleLanguage = (e) => {
        console.log(e.target.value)
        
        if(e.target.value === 'es'){
            setLanguage('es')
            setTexts(translations.es)
        } else {
            setLanguage('en')
            setTexts(translations.en)
        }
    }

    const data = {texts, handleLanguage}

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

// 3. Exportaciones
export { LanguageProvider }
export default LanguageContext 