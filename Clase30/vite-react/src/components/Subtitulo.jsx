const Subtitulo = (props) => {
  /* Las props son objetos que se reciben desde la inserción en la utilización del componente */
  console.log(props);
  // console.log(props.texto)
  // console.log(props.color)

  return (
    <h2
      style={ /* Corchetes de interpolación de props */
        {      /* Corchetes de desestructuración de props */
        color: props.color,
        display: "inline-block",        /* Estructura de objeto */ 
        backgroundColor: "#222", 
        padding: (props.color === 'purple') ? '0.1rem' : '0.5rem', /* Operaciones ternarias para determinar características, padding en este caso */
      }
      } 
    >
      {props.texto}
    </h2> /* Se colocan dobles corchetes en el seteo de atributos del elemento HTML para poder utilizar las props de estilos. El primer corchete hace referencia a la interpolación y el segundo a la desestructuración de la prop para utilizar su valor deseado junto con la propiedad a utilizar */
  );
};

export default Subtitulo;
