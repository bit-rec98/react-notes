import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import * as bootstrap from 'bootstrap'

import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Servicios from './pages/Servicios'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import NoEncontrado from './pages/NoEncontrado'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
        <BrowserRouter>
            <NavBar />
            {/* Componentes que cumplan el rol de renderizarse en todas las páginas se deben colocar de las etiquetas Routes */}
            <div className="container">
                <Routes>
                {" "}
                {/* Agregar las diferentes páginas dentro de acá */}
                <Route path="/" element={<Inicio></Inicio>} />
                <Route path="/productos" element={<Productos></Productos>} />
                <Route path="/servicios" element={<Servicios></Servicios>} />
                <Route path="/nosotros" element={<Nosotros></Nosotros>} />
                <Route path="/contacto" element={<Contacto></Contacto>} />
                <Route path="*" element={<NoEncontrado></NoEncontrado>} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
  </HelmetProvider>
);



// Continuar en 1:37:00