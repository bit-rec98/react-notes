const Hijo2 = ({msj}) => { /* Se desestructura el objeto prop y se agrega la propiedad */
  // console.log(msj)

  return (
    <>
      <h2>Hijo2</h2>
      <p>{msj}</p> {/* Prop interpolada, se consume desde el padre, el cual recibe la información desde Hijo2 */}
    </>
  )
}

export default Hijo2