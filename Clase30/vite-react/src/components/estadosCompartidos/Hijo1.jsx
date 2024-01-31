const Hijo1 = ({cambioMensaje}) => {
  
  // console.log(cambioMensaje)
  
  return (
    <>
      <h2>Hijo1</h2>
      <button className="btn btn-info" onClick={() => cambioMensaje('Cambié el mensaje')}>Cambiar mensaje</button> {/* cambioMensaje() se ejecuta como callback ya que debe recibir información nueva */}
    </>
  )
}

export default Hijo1