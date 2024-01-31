import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const {texts, handleLanguage} = useContext(LanguageContext)

  const cambiarEstiloBoton = () => `btn btn-${theme === 'primary' ? 'danger' : 'primary'} mx-1`

  return (
    <header>
      <nav className={`navbar navbar-expand-lg bg-${theme}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Educación IT
          </a>
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {texts.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                {texts.aboutUs}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                {texts.contact}
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <select className="form-select" aria-label="Default select example" onChange={handleLanguage}>
                <option value="">Seleccioná el idioma</option>
                <option value="es">Español</option>
                <option value="en">Inglés</option>
              </select>
              <button className={cambiarEstiloBoton()} onClick={handleTheme}>
                {theme === "danger" ? "Color Azul" : "Color Rojo"}
              </button>
              {/* cambiarEstiloBoton() se ejecuta porque retorna el string con las clases necesarias para que el botón sea estilizado */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderContext;
