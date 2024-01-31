import { useEffect, useState } from "react"
import {datosUsuarios} from '../data/usuarios.js'
import Form from "../components/Form.jsx"
import Table from "../components/Table.jsx"

const Usuarios = () => {

  const [dbUser, setDbUser] = useState(datosUsuarios)
  const [usuarioAEditar, setUsuarioAEditar] = useState(null)
  
  const agregarUsuario = (nuevoUsuario) => {
    nuevoUsuario.id = Date.now() /* Se genera UNIX Timestamp - ID para usuarios */

    /* Se modifica la DB */
    let nuevaDB = [...dbUser, nuevoUsuario]
    console.log(nuevaDB)
    setDbUser(nuevaDB)
  }

  const eliminarUsuario = (id) => {
    console.log(id)
    let isDelete = window.confirm(`¿Estás seguro de querer eliminar el elemento con el id ${id}?`)
    // console.log(isDelete)
    if(isDelete){
      console.log(`Usuario ${id} eliminado`)

      let nuevaDB = dbUser.filter((elementoUsuario) => elementoUsuario.id !== id)
      console.log(nuevaDB)
      setDbUser(nuevaDB)
    } else {
      return
    }
  }

  useEffect(() => {
    document.title = 'Educación IT - Usuarios'
  }, [])

  return (
    <>
      <h1 className="display-1 mt-4">Usuarios</h1>
      <hr />
      <Form usuarioAEditar={usuarioAEditar} agregarUsuario={agregarUsuario} /> {/* Componente hijo de Usuarios.jsx */}
      <hr />
      <Table usuarios={dbUser} eliminarUsuario={eliminarUsuario} setUsuarioAEditar={setUsuarioAEditar}/> {/* Componente hijo de Usuarios.jsx */}
    </>
  )
}

export default Usuarios