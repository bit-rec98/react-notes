import { NavLink } from "react-router-dom";

const NavBar = () => {

    const cambioEstiloActivo = ({isActive}) => {
        return isActive ? {color: 'red', background: 'black'} : {color: 'blue', background: 'gold'}
    } /* Se retorna un objeto de JS para que pueda funcionar el envío a la prop style en un componente*/
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
            Educacion IT
            </NavLink>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" to="/" style={cambioEstiloActivo}> {/* Al usar anchor tags con href como atributo, se recarga la página ya que es su comportamiento por defecto realizar la petición, por lo que se debe usar los componentes NavLinks con TO como atributo  */}
                    Inicio
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/productos" style={cambioEstiloActivo}>
                    Productos
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/servicios" style={cambioEstiloActivo}>
                    Servicios
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros" style={cambioEstiloActivo}>
                    Nosotros
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/contacto" style={cambioEstiloActivo}>
                    Contacto
                </NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
