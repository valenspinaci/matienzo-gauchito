import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="mx-5">
                <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <h3 className="col-12 col-md-4 col-lg-4">¿Tenés alguna duda?</h3>
                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center col-12 col-md-8 col-lg-8">
                        <p className="col-lg-4">
                            Consultános por alguno de nuestros canales y nuestro equipo te asesorará de la mejor manera para mejorar tu experiencia mate.
                        </p>
                        <Link to="/contacto" className="col-12 col-md-4">
                            <button type="button" className="btn boton-cta boton-footer col-12">Contactanos</button>
                        </Link>
                    </div>
                </div>

                <hr />

                <div className="col-12 d-flex flex-row flex-wrap">
                    <div className="col-6 col-md-4">
                        <h4>Links</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><Link className="text-decoration-none color-texto-navbar" to="/">Inicio</Link></li>
                            <li><Link className="text-decoration-none color-texto-navbar" to="/productos">Productos</Link></li>
                            <li><Link className="text-decoration-none color-texto-navbar" to="/contacto">Contacto</Link></li>
                            <li><Link className="text-decoration-none color-texto-navbar" to="/perfil">Mi perfil</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4 px-md-3">
                        <h4>Redes Sociales</h4>
                        <ul className="d-flex flex-row list-unstyled gap-4 justify-content-between col-lg-8">
                            <li><a className="redes-footer" href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className='redes-footer' /></a></li>
                            <li><a className="redes-footer" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className='redes-footer' /></a></li>
                            <li><a className="redes-footer" href="https://www.facebook.com/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} className='redes-footer' /></a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-4">
                        <h4>Datos</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>Email: matienzo@gmail.com</li>
                            <li>Teléfono: +54 9 11 1234 5678</li>
                            <li>Dirección: Gallo 1234, CABA, Buenos Aires</li>
                        </ul>
                    </div>

                    <div className="col-12 mt-2">
                        <h4>Ubicación</h4>
                        <iframe
                            className="col-12"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3295534770873!2d-58.41413862403145!3d-34.59582725708191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca85feebf3a1%3A0x987885cb9893c9c7!2sGallo%201234%2C%20C1425EFB%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1714253041721!5m2!1ses!2sar"
                            width="400"
                            height="150"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de Matienzo"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column flex-md-row gap-md-5 align-items-center justify-content-center mt-3">
                <p>Políticas de cookies</p>
                <p>Términos y condiciones</p>
                <p>Políticas de privacidad</p>
            </div>
        </footer>
    )
}


export default Footer
