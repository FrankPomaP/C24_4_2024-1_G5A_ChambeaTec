import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/LOGO2.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg custom-bg text-color"  style={{ backgroundColor: '#0c1746' }} >
        <div class="container-fluid" style={{ color: '#ffffff' }}>
          <img
            src={logo}
            height="75"
            width="auto"
            class="d-inline-block align-top"
            alt=""
            style={{ borderRadius: '50%' }}
          />
          <Link to="/" class="navbar-brand">
            <i>
              <b className="text-color-second ms-2"  style={{ color: '#ffffff' }}>CHAMBEATEC</b>
            </i>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/aboutus" class="nav-link active" aria-current="page">
                  <b className="text-color"  style={{ color: '#ffffff' }}>Sobre Nosotros</b>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contactus" class="nav-link active" aria-current="page">
                  <b className="text-color"  style={{ color: '#ffffff' }}>Contactanos</b>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
