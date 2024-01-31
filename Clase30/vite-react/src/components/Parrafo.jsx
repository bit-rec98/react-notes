import React from 'react'

const Parrafo = ({contenido}) => { /* La prop se puede desestructurar al crear una nueva variable que contenga el atributo del objeto que se recibe agregado entre llaves o también se puede colocar la propiedad a utilizar entre llaves */

/* Esta constante es opcional ya que se puede desestructurar implícitamente en el parámetro de la función al colocar {contenido}, ambas opciones son posibles*/
  /* const {contenido} = props */

  // console.log(contenido)

  return (
    <p>{contenido}</p>
  )
}

export default Parrafo