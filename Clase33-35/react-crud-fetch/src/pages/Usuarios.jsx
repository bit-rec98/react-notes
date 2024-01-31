import { useEffect, useState } from "react"

import Form from "../components/Form.jsx"
import Table from "../components/Table.jsx"

const Usuarios = () => {

  //!console.log(import.meta.env.VITE_PORT) /* http://localhost:8080/usuarios/ */
  
  const url = import.meta.env.VITE_PORT
  //* const url = import.meta.env.VITE_PORT || http://localhost:8080/usuarios/

  const [dbUser, setDbUser] = useState(null) /* Inicialización de la db como null */
  const [usuarioAEditar, setUsuarioAEditar] = useState(null)
  // console.log(dbUser) === null

  // -------------------------------------------------------------------------------------------------------

  const obtenerUsuarios = async () => {
    // CRUD -> R: READ -> Método Get
    // console.log('Se montó el componente')
    try {
      const respuesta = await fetch(url) /* Objeto de respuesta de la petición - Método GET */
      if(!respuesta.ok){
        throw new Error(`[obtenerUsuarios] Error... ${respuesta.status}`) /* Lanzamiento de error */
      } else {
        const users = await respuesta.json()
        setDbUser(users)
        console.log(users)
      }
    } catch (error) {
      console.log(`Algo pasó con la petición en [obtenerUsuarios]: ${error}`)
    }
  }

  // -------------------------------------------------------------------------------------------------------
  
  const agregarUsuario = async (nuevoUsuario) => {
    // CRUD -> C: Create -> Método POST
    try {
        /* Petición asincrónica para guardar nuevo usuario */
      const config = {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(nuevoUsuario)
      }

      const respuesta = await fetch(url, config)
      if(!respuesta.ok){
        throw new Error(`[agregarUsuario] Error... ${respuesta.status}`) 
      }
      const usuarioCreado = await respuesta.json() /* Convierte el string en un objeto de js */
      
      console.log(usuarioCreado) /* Contiene ID creado por el backend */

      /* Modificación de la base de datos a través del estado */
      const nuevaDB = [...dbUser, usuarioCreado]
      setDbUser(nuevaDB)
    } catch (error) {
      console.log(`Algo pasó con la petición en [agregarUsuario]: ${error}`)
    }
  }

  // -------------------------------------------------------------------------------------------------------

  const actualizarUsuario = async (usuarioEditado) => {
    // CRUD -> U: Update -> Método PUT
    // console.log(usuarioEditado)

    const urlCompleta = url + usuarioEditado.id
    
    // console.log(urlCompleta)

    try {
      const config = {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(usuarioEditado) //La petición requiere recibir un string por que se usa el método .stringify()
      }

      // Petición asincrónica
      const respuesta = await fetch(urlCompleta, config)

      if(!respuesta.ok){
        throw new Error(`[actualizarUsuario] Error... ${respuesta.status}`)
      }

      const userEdit = await respuesta.json() /* Información modificada por el backend */
      // console.log(dbUser)

      // Modificar la bbdd y actualizar el estado
      const nuevaDB = dbUser.map(usuario => usuario.id === usuarioEditado.id ? usuarioEditado : usuario)
      // console.log(nuevaDB)
      // console.log(dbUser)

      setDbUser(nuevaDB)

    } catch (error) {
      console.log(`Algo pasó con la petición en [actualizarUsuario]: ${error}`)
    }
  }

  // -------------------------------------------------------------------------------------------------------

  const eliminarUsuario = async (id) => {
    // CRUD -> D: Delete -> Método DELETE
    console.log(id)
    let isDelete = window.confirm(
      `¿Estás seguro de querer eliminar al elemento con el id ${id}?`
    )

    if(isDelete){
      // Petición asincrónica para eliminar el usuario seleccionado
      try {
        const urlCompleta = url + id //* http://localhost:8080/usuarios/ + id
        // console.log(urlCompleta)

        const config = {
          method: 'DELETE',
        }

        const respuesta = await fetch(urlCompleta, config)
        if(!respuesta.ok){
          throw new Error(`[eliminarUsuario] Error... ${respuesta.status}`)
        } 

        const data = await respuesta.json()
        // console.log(data)

        // Actualización del estado a través de la DB  - Eliminar elemento de la db
        const nuevaDB = dbUser.filter(usuario => usuario.id !== id) /* Se crea una nueva DB descartando al usuario eliminado */
        setDbUser(nuevaDB)

      } catch (error) {
        console.log(`Algo pasó con la petición en [eliminarUsuario]: ${error}`)
      }

    } else {
      return //break
    }
  }

  // -------------------------------------------------------------------------------------------------------

  useEffect(() => {
    document.title = 'Educación IT - Usuarios'
    obtenerUsuarios() /* La obtención de usuarios desde la db se ejecuta una sola vez cuando el componente se monta */
  }, [])

  // -------------------------------------------------------------------------------------------------------

  return (
    <>
      <h1 className="display-1 mt-4">Usuarios</h1>
      <hr />
      <Form usuarioAEditar={usuarioAEditar} agregarUsuario={agregarUsuario} actualizarUsuario={actualizarUsuario} setUsuarioAEditar={setUsuarioAEditar}/> {/* Componente hijo de Usuarios.jsx */}
      <hr />
      <Table usuarios={dbUser} eliminarUsuario={eliminarUsuario} setUsuarioAEditar={setUsuarioAEditar}/> {/* Componente hijo de Usuarios.jsx */}
    </>
  )
}

export default Usuarios