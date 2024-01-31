import Spinner from "./Spinner"
import TableRow from "./TableRow"

const Table = ({usuarios, eliminarUsuario, setUsuarioAEditar}) => {

  return (
    <>
      <h2>Tabla de usuarios</h2>

      {!usuarios && <Spinner />}
      
      {
          usuarios && <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios &&
              usuarios.map((elementoUsuario) => (
                <TableRow
                  key={elementoUsuario.id}
                  usuario={elementoUsuario}
                  eliminarUsuario={eliminarUsuario}
                  setUsuarioAEditar={setUsuarioAEditar}
                ></TableRow>
              ))}
          </tbody>
        </table>
      }
    </>
  );
}

export default Table