import './App.css'
import Parrafo from './components/Parrafo'
import Subtitulo from './components/Subtitulo'
import Titulo from './components/Titulo' //Si la importación del componente es individual, se debe importar sin llaves

function App() {

  const parrafos = {
    primero: 'Primero: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, non?',
    segundo: 'Segundo: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure atque voluptate eos recusandae, fuga neque debitis maxime aspernatur expedita sed.',
    tercero: 'Tercero: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga unde voluptates necessitatibus quaerat commodi deserunt.'
  }

  /* Se retorna código JSX */
  return (
    <> 
      <main className='container'>
        <Titulo></Titulo>
        <Subtitulo texto="Primer subtítulo" color="purple"></Subtitulo> {/* Importar el componente apenas se cree para poder renderizarlo */}
        <Parrafo contenido={parrafos.primero}/>
        <Subtitulo texto="Segundo subtítulo" color="cyan"/> {/* Otra forma de escribir un componente */}
        <Parrafo contenido={parrafos.segundo}/>
        <Subtitulo texto="Tercer subtítulo" color="orange"/>
        <Parrafo contenido={parrafos.tercero}/> {/* Las props pueden llevar cualquier tipo de nombre pero este debería ser intuitivo para ser reconocido */}
      </main>
    </>
  )
}

export default App
