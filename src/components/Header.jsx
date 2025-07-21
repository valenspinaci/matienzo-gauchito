import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const { usuario, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    const esAdmin = usuario?.rol === 'admin'
    const esCliente = usuario?.rol === 'cliente'

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-transparent">
                <div className="container-fluid mx-3">
                    <Link className="text-decoration-none color-texto-navbar me-5" to="/">
                        matienzo
                    </Link>

                    <button
                        className="custom-toggler navbar-toggler"
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
                            <li className="nav-item mx-2">
                                <Link className="text-decoration-none color-texto-navbar" to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="text-decoration-none color-texto-navbar" to="/productos">
                                    Productos
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="text-decoration-none color-texto-navbar" to="/contacto">
                                    Contacto
                                </Link>
                            </li>

                            {/* Mobile: opciones según estado de login */}
                            {!usuario && (
                                <li className="nav-item mx-2 d-lg-none">
                                    <Link className="text-decoration-none color-texto-navbar" to="/login">
                                        Iniciar sesión
                                    </Link>
                                </li>
                            )}

                            {usuario && (
                                <>
                                    {esCliente && (
                                        <li className="nav-item mx-2 d-lg-none">
                                            <Link className="text-decoration-none color-texto-navbar" to="/carrito">
                                                Carrito
                                            </Link>
                                        </li>
                                    )}
                                    <li className="nav-item mx-2 d-lg-none">
                                        <Link className="text-decoration-none color-texto-navbar" to="/perfil">
                                            Mi perfil
                                        </Link>
                                    </li>
                                    {esAdmin && (
                                        <li className="nav-item mx-2 d-lg-none">
                                            <Link className="text-decoration-none color-texto-navbar" to="/admin">
                                                Administración
                                            </Link>
                                        </li>
                                    )}
                                    <li className="nav-item mx-2 d-lg-none">
                                        <button
                                            className="text-decoration-none color-texto-navbar bg-transparent border-0"
                                            onClick={handleLogout}
                                        >
                                            Cerrar sesión
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Dropdown solo si está logueado */}
                    {usuario ? (
                        <div className="btn-group dropstart d-none d-lg-flex">
                            <button
                                type="button"
                                className="btn bg-transparent color-texto-navbar dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Menú
                            </button>
                            <ul className="dropdown-menu background-dropdown">
                                <li>
                                    <Link className="dropdown-item background-dropdown-item" to="/perfil">
                                        Mi perfil
                                    </Link>
                                </li>
                                {esCliente && (
                                    <li className="d-md-none">
                                        <Link className="dropdown-item background-dropdown-item" to="/carrito">
                                            Carrito
                                        </Link>
                                    </li>
                                )}
                                {esAdmin && (
                                    <li>
                                        <Link className="dropdown-item background-dropdown-item" to="/admin">
                                            Administración
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <button
                                        className="dropdown-item background-dropdown-item bg-transparent border-0 text-start"
                                        onClick={handleLogout}
                                    >
                                        Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        // Si NO está logueado: mostrar solo "Iniciar sesión" en desktop
                        <ul className="navbar-nav d-none d-lg-flex">
                            <li className="nav-item">
                                <Link className="text-decoration-none color-texto-navbar" to="/login">
                                    Iniciar sesión
                                </Link>
                            </li>
                        </ul>
                    )}

                    {/* Icono carrito (solo si es cliente) */}
                    {esCliente && (
                        <ul className="navbar-nav mx-2 d-none d-lg-flex flex-row">
                            <li className="nav-item align-self-center mx-2">
                                <Link className="text-decoration-none color-texto-navbar" to="/carrito">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header