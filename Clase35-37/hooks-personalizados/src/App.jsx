import './App.css'
import Contador from './components/Contador'
import ContadorHook from './components/ContadorHook'
import Formulario from './components/Formulario'
import FormularioHook from './components/FormularioHook'

function App() {

  return (
    <>
      <div className='container p-5'>
      <h1 className='display-1'>Hooks personalizados</h1>
      <hr />
      <h2 className='display-2'>Contador</h2>
      <Contador></Contador>
      <hr />
      <h2 className='display-2'>Contador Hook</h2>
      <ContadorHook></ContadorHook>
      <hr />
      <h2 className='display-2'>Formulario</h2>
      <Formulario></Formulario>
      <hr />
      <h2 className="display-2">Formulario Hook</h2>
      <FormularioHook></FormularioHook>

      </div>
    </>
  )
}

export default App
