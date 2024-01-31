import { useEffect, useState } from 'react'

const formInicial = {
  id: null,
  nombre: '',
  apellido: ''
}

const Form = ({agregarUsuario, usuarioAEditar, actualizarUsuario, setUsuarioAEditar}) => {
  // console.log(agregarUsuario)

  const [form, setForm] = useState(formInicial)
  // console.log(form) - Estado
  // console.log(setForm) - Función que modifica al estado

  useEffect(() => {
    usuarioAEditar ? setForm(usuarioAEditar) : setForm(formInicial)
  }, [usuarioAEditar])
  

  const handleChange = (e) => {
    setForm({
      ...form, /* Se trae la estructura previa del formulario para modificar los datos en el objeto formInicial, se espera que no haya nuevas propiedades o métodos que se agreguen al objeto formInicial - ...form -> spread operator  */
      [e.target.name]: e.target.value /* Se genera un par key - value */
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if(form.id === null) {
      /* Validación acá */
      agregarUsuario(form)
    } else {
      actualizarUsuario(form)
    }
    handleReset()
  }

  const handleReset = (e) => {
    setForm(formInicial)
    setUsuarioAEditar(null)
  }

  return (
    <>
      <h3>{form.id ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='nombre'
          placeholder='Ingrese el nombre'
          onChange={handleChange}
          value={form.nombre} />
        <input
          type="text"
          name='apellido'
          placeholder='Ingrese el apellido'
          onChange={handleChange}
          value={form.apellido} />
        <button className='btn btn-info mx-1' type='submit'>Enviar</button>
        <button className='btn btn-dark mx-1' type="reset" onClick={handleReset}>Limpiar</button>
      </form>
    </>
  )
}

export default Form