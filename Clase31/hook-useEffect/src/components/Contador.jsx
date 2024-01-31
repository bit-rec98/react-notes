import { useEffect, useState } from "react"

const Contador = ({valorInicial = 55}) => {

    const [contador, setContador] = useState(valorInicial)

    const handleIncrementar = () => {
        setContador(contador + 1) /* La función que modifica al estado recibe al estado mismo como argumento junto con la lógica que se necesita aplicar sobre él para realizar las tareas de desarrollo necesarias */
    }

    const handleDecrementar = () => {
        setContador(contador - 1)
    }
    const handleReiniciar = () => {
        setContador(valorInicial)
    }

    // Efecto secundario - useEffect
    /*
    - useEffect es un hook que permite ejecutar código en las diferentes etapas del ciclo de vida de un componente 
    - Los componentes tienen un ciclo de vida de tres etapas en los que: 
    1. Nacen - Renderizado
    2. Viven - Actualización (de estado)
    3. Mueren - Destrucción (Desmontaje)

    useEffect(callback, [referencias])
    useEffect(() => {}, [])

    - Si el array de referencias está vacío, la función callback se va a ejecutar una única vez, cuando el componente se monte 
    - Si se agrega un retorno de una callback dentro del hook useEffect, esta callback se va a ejecutar cuando el componente se desmonte
    */

    useEffect(() => {
        console.log('Montaje: Se ejecuta una sola vez cuando se monta el componente')

        return () => {
            console.log('Desmontaje: Se ejecuta una sola vez cuando el componente se desmonta')
        }
    }, []) 

    useEffect(() => {
      console.log('Actualización: Se va a ejecutar cuando el componente sufra un cambio (Cambios de estado generalmente), se controla si el estado contador cambia') /* La actualización se ejecuta cuando el componente se crea */
    
    }, [contador]) /* La referencia del array va a ser el estado a observar o la función que modifica al estado. O incluso cualquier otro tipo de cambio observable */

    /* ---------------------------------------------------------- */
    // Estado - counter
    /* ---------------------------------------------------------- */

    const startValue = 200
    const [counter, setCounter] = useState(startValue)

    const handleIncrement = () => {
        setCounter(counter + 2)
    }
    const handleDecrement = () => {
        setCounter(counter - 2)
    }
    const handleRefresh = () => {
        setCounter(startValue)
    }

    useEffect(() => {
      console.log(`Actualización del estado counter: ${counter}`)
    }, [counter])

    useEffect(() => {
      console.log(`Actualización del estado counter y del estado contador \nCounter: ${counter} \nContador: ${contador}`)
    }, [counter, contador])

    /* ---------------------------------------------------------- */
    // Desmontaje: Es importante para detener procesos iniciados cuando el componente se renderiza - Existe el potencial riesgo de colapsar la página con ciertos procesos ya que lo ideal es controlar cuando el componente se desmontar para tener control sobre los procesos
    /* ---------------------------------------------------------- */
    useEffect(() => {
      
        const refInterval = setInterval(() => {
            console.log(Date.now())
        }, 2000) 

        return () => {
            console.log('Se detiene el proceso inicializado (setInterval) cuando el componente se desmonta')
            clearInterval(refInterval)
        }
    }, [])
    
    
    
    return (
        <>
            <h1 className="display-1">{contador}</h1>
            <hr />
            <button className="btn border bg-warning mx-1" onClick={handleIncrementar}>Incrementar</button>
            <button className="btn border bg-warning mx-1" onClick={handleDecrementar}>Decrementar</button>
            <button className="btn border bg-warning mx-1" onClick={handleReiniciar}>Reiniciar</button>
            
            <hr />
            <br />

            <h2 className="display-1">{counter}</h2>
            <hr />
            <button className="btn border bg-warning mx-1" onClick={handleIncrement}>Increment</button>
            <button className="btn border bg-warning mx-1" onClick={handleDecrement}>Decrement</button>
            <button className="btn border bg-warning mx-1" onClick={handleRefresh}>Refresh</button>

        </>
    )
}

export default Contador