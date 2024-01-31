import { useState } from 'react'

const Contador = ({valorInicial, ordenContador}) => {

    /* console.log(useState(2)) */ /* Devuelve un array de dos posiciones */

    // const valorInicial = 1

    // const [contador, setContador] = useState(2)
    let [contador, setContador] = useState(valorInicial) /*Acá se pueden utilizar valores recibidos desde props al haber desestructurado la prop */

    const handleIncremento = () => { /* Función que gestiona la función que modifica al estado */
      // setContador(contador + 1)
      setContador(++contador) /* Este tipo de seteo tiene que ser sobre una variable y no constante */
      // setContador(contador++) No se realiza este aumento ya que React no detecta el cambio de valor a no ser que se utilice el preincremento ++contador

      console.log(contador)
    }

    const handleDecremento = () => { /* Función que gestiona la función que modifica al estado */
      // setContador(contador - 1)
      setContador(--contador)
      // setContador(contador--) No se realiza este aumento ya que React no detecta el cambio de valor a no ser que se utilice el preincremento --contador
      
      console.log(contador)
    }

    const handleReset = () => {
      setContador(valorInicial)
    }


  return (
    <>
    <h1>Soy el Contador N°{ordenContador}</h1> 
    <p className='display-1'>{contador}</p>
    <button className='btn btn-success' onClick={handleIncremento}>Incrementar</button> {/* Al pasar la referencia se va a ejecutar cuando el usuario haga click en vez de pasar la ejecución ya que se va a estar ejecutando sin recibir el evento */}
    <button className='btn btn-danger mx-1' onClick={handleDecremento}>Decrementar</button>
    <button className='btn btn-dark' onClick={handleReset}>Resetear</button>
    </>
  )
}

export default Contador


/* La función para activar el evento también se puede ejecutar de esta forma: 
onClick={() => setContador(contador + 1)}
*/