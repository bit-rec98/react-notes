import Hijo2 from './Hijo2'
import Hijo1 from './Hijo1'
import { useState } from 'react'

const Padre = () => {

  const [mensaje, setMensaje] = useState('') /* El estado inicializado es un string vacío */
  /* console.log(mensaje) */ //Estado
  /* console.log(setMensaje) */ //Función que modifica al estado en su interior al ejecutarlo

  const handleClick = (nuevoMensaje) => {
    setMensaje(nuevoMensaje)
  }


  return (
    <>
        <h2>Padre (Estado compartido entre hijos)</h2> 
        <Hijo1 cambioMensaje={handleClick}></Hijo1>
        <Hijo2 msj={mensaje}></Hijo2>
    </>
  )
}

export default Padre


/* No se pueden compartir estados entre componentes hermanos así que se debe elevar el estado hacia el componente superior <App/> para enviárselo al padre y desde el padre a los hijos */
/* Cuando se quiera compartir un estado entre hermanos, este estado debe pasar a través del componente padre para que pueda llegar al lugar de destino */
/* También se puede pasar información a nietos a través de los hijos desde sus respectivos padres */