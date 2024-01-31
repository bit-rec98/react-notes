import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' /* Componente principal */
import * as bootstrap from 'bootstrap'
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

/* .createRoot() recibe el punto de montaje y renderiza los componentes especificados */
/* main.jsx es el punto más bajo de la aplicación en el que se inicia el árbol de componentes */
/* Acá se incluyen las librerías y demás utilidades externas*/