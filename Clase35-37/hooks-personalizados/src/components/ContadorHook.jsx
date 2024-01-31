import React from 'react'
import useContador from '../hooks/useContador'

const ContadorHook = () => {

    const [contador, incrementar, decrementar, resetear] = useContador(100)

    return (
    <div className="card">
        <div className="card-body">
        <h6 className="card-subtitle mb-2 text-dark display-1">{contador}</h6>
        <button className="btn btn-success" onClick={incrementar}>
            Incrementar
        </button>
        <button className="btn btn-danger" onClick={decrementar}>
            Decrementar
        </button>
        <button className='btn btn-dark' onClick={resetear}>
            Reiniciar
        </button>
        </div>
    </div>  
    )
}

export default ContadorHook