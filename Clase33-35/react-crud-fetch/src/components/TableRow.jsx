import Button from "./Button";

const TableRow = ({usuario, eliminarUsuario, setUsuarioAEditar}) => {
  return (
      <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.apellido}</td>
        <td>
          {/* <Button color='success' texto='Modificar'></Button> */}
          {/* <Button color='danger' texto='Eliminar' onclick={() => eliminarUsuario()}></Button> */}
          <button className="btn btn-success mx-1" onClick={() => setUsuarioAEditar(usuario)}>Modificar</button>
          <button className="btn btn-danger mx-1" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
        </td>
      </tr>
  );
}

export default TableRow