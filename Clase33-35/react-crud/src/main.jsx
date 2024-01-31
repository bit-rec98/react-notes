import ReactDOM from 'react-dom/client'
import './index.css'
import * as bootstrap from 'bootstrap'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Usuarios from './pages/Usuarios.jsx'
import Contacto from './pages/Contacto.jsx'
import NavBar from './components/NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>

      <NavBar/>
      
      <div className="container">
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/usuarios' element={<Usuarios/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </div>
    </BrowserRouter>,
)
