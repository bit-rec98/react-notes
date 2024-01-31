/* Un hook personalizado permite encapsular la lógica de un componente en funciones reutilizables */
/* 
Requerimientos para crear un hook personalizado, el hook: 
1. Tiene que utilizar alguno de los hooks built-in de React (useState, useContext, useEffect, etc.)
2. El nombre del archivo debe comenzar con use -> useContador
3. Tiene que exportarse para poder reutilizarse en otros componentes

¿Qué es un hook?
Un hook es una función de JS (arrow)
*/

import { useState } from "react"

const useContador = (estadoInicial = 20) => {

    const [contador, setContador] = useState(estadoInicial)

    const incrementar = () => {setContador(contador + 1)}
    const decrementar = () => {setContador(contador - 1)}
    const resetear = () => {setContador(estadoInicial)}

    return [contador, incrementar, decrementar, resetear] 

}

export default useContador




//! Continuar en 1:52:06