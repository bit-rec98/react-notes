import './App.css'
import Contador from './components/contador/Contador'
import Parrafo from './components/Parrafo'
import Subtitulo from './components/Subtitulo'
import Titulo from './components/Titulo' //Si la importación del componente es individual, se debe importar sin llaves
import Multiplicador from './components/multiplicador/Multiplicador'
import Padre from './components/estadosCompartidos/Padre'
import Estructura from './components/Estructura'

function App() {

  const parrafos = {
    primero: 'Primero: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, non?',
    segundo: 'Segundo: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure atque voluptate eos recusandae, fuga neque debitis maxime aspernatur expedita sed.',
    tercero: 'Tercero: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga unde voluptates necessitatibus quaerat commodi deserunt.'
  }

  let ordenContador = 1
  let ordenMultiplicador = 1

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
      
        <hr />
        <Contador ordenContador={ordenContador} valorInicial={0} /> {/* Para que la sugerencia de importación aparezca se debe tener el archivo abierto */}
        <Contador ordenContador={++ordenContador} valorInicial={10} />
        <Contador ordenContador={++ordenContador} valorInicial={20} />
        <Contador ordenContador={++ordenContador} valorInicial={30} /> {/* Cada contador tiene su propio estado a partir de su valor inicial */}
        <Contador ordenContador={++ordenContador} valorInicial={40} />
        <Contador ordenContador={++ordenContador} valorInicial={50} />

        <hr />

        <Multiplicador ordenMultiplicador={ordenMultiplicador} valorInicial={1} />
        <Multiplicador ordenMultiplicador={++ordenMultiplicador} valorInicial={2} />
        <Multiplicador ordenMultiplicador={++ordenMultiplicador} valorInicial={3} />
        <Multiplicador ordenMultiplicador={++ordenMultiplicador} valorInicial={4} />

        <hr />
        <Padre></Padre>

        <hr />
        <Estructura titulo="Componente estructura"></Estructura>

      </main>
    </>
  )
}

export default App
