import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">
                    CHAMBEATEC
                  </h5>

                  <p>
                  ¡Bienvenido a CHAMBEATEC, tu Portal de Empleo en Línea! Aquí, tus sueños profesionales cobran vida. Ya sea que busques avanzar en tu carrera, explorar nuevos campos o encontrar el trabajo de tus sueños, te ofrecemos las herramientas y recursos necesarios para triunfar. Nuestro objetivo es facilitar tu búsqueda de empleo con una plataforma intuitiva, consejos de expertos y un apoyo constante para que cada aplicación sea un paso más hacia tu futuro profesional ideal. Únete a nuestra comunidad y descubre el empleo que te llevará al siguiente nivel.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">SOBRE NOSOTROS</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">CONTACTANOS</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">CARRERAS</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Links</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Inicia Sesión Desde Aqui!!</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Inicia Sesion
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2024 Copyright:
            <a class="text-color-3" href="">
              ChambeaTec.com.pe
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
