import React, { useState } from 'react'

const valorInicial = 10

const Contador = () => {

    const [contador, setContador] = useState(valorInicial)

    const handleIncrementar = () => {
        setContador(contador + 1)
    }

    const handleDecrementar = () => {
        setContador(contador - 1)
    }

    const handleResetear = () => {
        setContador(valorInicial)
    }

    return (
        <>
        <div className="card">
            <div className="card-body">
            <h6 className="card-subtitle mb-2 text-dark display-1">{contador}</h6>
            <button className="btn btn-success" onClick={handleIncrementar}>
                Incrementar
            </button>
            <button className="btn btn-danger" onClick={handleDecrementar}>
                Decrementar
            </button>
            <button className='btn btn-dark' onClick={handleResetear}>
                Reiniciar
            </button>
            </div>
        </div>
        </>
    );
}

export default Contador