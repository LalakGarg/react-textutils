import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode === 'light' ? 'light' : props.mode === 'dark' ? 'dark' : props.mode === 'red' ? 'danger' : props.mode === 'green' ? 'success' : 'primary'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" onClick={() => document.title = "TextUtils - Home"} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" onClick={() => document.title = "TextUtils - Home"} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => document.title = "TextUtils - About"}>{props.aboutText}</Link>
            </li>
          </ul>

          <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input className="form-check-input" onClick={() => props.toggleMode("light")} type="radio" name="radioDefault" id="ligthMode" checked={props.mode === "light"}/>
            <label className="form-check-label" htmlFor="ligthMode">
              LightMode
            </label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input className="form-check-input" onClick={() => props.toggleMode("dark")} type="radio" name="radioDefault" id="darkMode"/>
            <label className="form-check-label" htmlFor="darkMode">
              DarkMode
            </label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input className="form-check-input" onClick={() => props.toggleMode("red")} type="radio" name="radioDefault" id="redMode"/>
            <label className="form-check-label" htmlFor="redMode">
              RedMode
            </label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input className="form-check-input" onClick={() => props.toggleMode("green")} type="radio" name="radioDefault" id="greenMode"/>
            <label className="form-check-label" htmlFor="greenMode">
              GreenMode
            </label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input className="form-check-input" onClick={() => props.toggleMode("blue")} type="radio" name="radioDefault" id="blueMode"/>
            <label className="form-check-label" htmlFor="blueMode">
              BlueMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {title: PropTypes.string,
                    aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};
