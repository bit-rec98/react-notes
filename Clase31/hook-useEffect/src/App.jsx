import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'

function App() {

  const [mostrar, setMostrar] = useState(false)




  return (
    <>
      <main className="container">
        <h1>Hook de efecto secundario - useEffect</h1>
        <hr />
        { mostrar && <Contador valorInicial={100}></Contador> } {/* Ambos tienen que ser true para que se muestre el componente */}

        <hr />
        <button className='btn btn-dark mx-2' onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
      </main>
    </>
  )
}

export default App
