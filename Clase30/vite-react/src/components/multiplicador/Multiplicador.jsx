import { useState } from 'react'

const Multiplicador = ({ordenMultiplicador, valorInicial}) => {

    const [multiplicar, setMultiplicar] = useState(valorInicial)

    const handleMultiplicar = (multiplicador = 2) => { /* multiplicador = 2 es el valor por default de la variable multiplicador, se pueden recibir valores en la ejecución de la función para dinamizar el multiplicador */
        setMultiplicar(multiplicar * multiplicador)
    }

    console.log(ordenMultiplicador)


  return (
    <>
        <h1>Multiplicador N°{ordenMultiplicador}</h1>
        <p className='display-1'>{multiplicar}</p> {/* Se debe interpolar el estado para que se pueda observar */}
        <button className='btn btn-warning' onClick={() => handleMultiplicar()}>Multiplicar X2</button>
        <button className='btn mx-1 btn-dark' onClick={() => handleMultiplicar(3)}>Multiplicar X3</button> 
        <button className='btn btn-info' onClick={() => handleMultiplicar(4)}  >Multiplicar X4</button> {/* handleMultiplicar(4), el número indica el valor que va a obtener el parámetro al ejecutarse y recibir un valor */}
    </>
  )
}

export default Multiplicador
