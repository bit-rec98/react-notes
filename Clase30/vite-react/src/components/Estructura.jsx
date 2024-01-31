import { useState } from "react"
import Alerta from './Alerta'

const arrayPersonas = ['Cristian', 'Andrea', 'Ezequiel', 'Ramón', 'Bruno', 'Fabián', 'Melina']

const Estructura = ({titulo}) => {

    const [mostrar, setMostrar] = useState(false)

  return (
    <div className="bg-primary bg-opacity-25 rounded-3 my-3 p-4">
        <h2>{titulo}</h2>

        <hr />

        <h3>Rendering condicional</h3>
        <button className="btn btn-dark my-2" onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Ocultar' : 'Mostrar'}
        </button>
        {/* If mostrar === false -> d-none else -> d-block */} 
        { mostrar && <p className="alert alert-warning">Texto importante de alerta</p> } 
        {!mostrar && <Alerta/>} {/* If mostrar === true -> d-block else -> d-none */}
        

        <hr />
        <h3>Loop rendering (manual)</h3>

        <ul>
            <li>{arrayPersonas[0]} - Accediendo a través del índice</li>
            <li>{arrayPersonas[1]} - Accediendo a través del índice</li>
            <li>{arrayPersonas[2]} - Accediendo a través del índice</li>
            <li>{arrayPersonas[3]} - Accediendo a través del índice</li>
            <li>{arrayPersonas[4]} - Accediendo a través del índice</li>
            <li>{arrayPersonas[5]} - Accediendo a través del índice</li>
        </ul>

        <hr />
        <h3>Loop rendering (iterativo con .map())</h3>
        {/* El método forEach no funciona en componentes de react porque no retorna datos */}

        {/* El método .map() retorna un array de la misma dimensión que el original con el respectivo índice de cada elemento del respectivo array*/}

        <ul>
        {/* La creación de elementos dinámicos con el método map requiere que cada elemento tenga un identificador para poder indexarlos */}
        {
            arrayPersonas.map((persona, indice) => {
                return <li key={`${indice}-${persona}`}>{persona} - Devolviendo array de la misma dimensión, se requiere que cada item de esta lista tenga su respectiva key</li> 
                }) 
        } {/* Llaves para interpolar código JS */}
        </ul>
        


    </div>
  )
}

export default Estructura