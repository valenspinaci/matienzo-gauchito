import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import fotoPerfil from '../assets/img/foto-perfil.png'

const Perfil = () => {
    const { usuario, logout } = useContext(AuthContext)

    const [nombre, setNombre] = useState(usuario?.nombre || '')
    const [apellido, setApellido] = useState(usuario?.apellido || '')
    const [email, setEmail] = useState(usuario?.email || '')
    const [telefono, setTelefono] = useState(usuario?.telefono || '')

    const handleSubmit = (e) => {
        e.preventDefault()
        const actualizado = { ...usuario, nombre, apellido, email, telefono }
        localStorage.setItem('usuario', JSON.stringify(actualizado))
        alert('Perfil actualizado (simulado)')
    }

    if (!usuario) return <p className="container my-5">Debés iniciar sesión</p>

    return (
        <>
            <div className="col-12 d-flex justify-content-center align-items-center">
                <img className="col-8 col-md-6 col-lg-5 my-5" src={fotoPerfil} alt="perfil" />
            </div>

            <div className="col-12 d-flex flex-row justify-content-center align-items-center py-3 my-3">
                <div className="col-10 d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <div className="col-12 col-md-5">
                        <form onSubmit={handleSubmit} className="col-12 d-flex flex-column align-items-center">

                            <div className="col-8 mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control inputs-background"
                                    id="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="col-8 mb-3">
                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                <input
                                    type="text"
                                    className="form-control inputs-background"
                                    id="apellido"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                            </div>

                            <div className="col-8 mb-3">
                                <label htmlFor="email" className="form-label">Mail</label>
                                <input
                                    type="email"
                                    className="form-control inputs-background"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="col-8 mb-3">
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input
                                    type="tel"
                                    className="form-control inputs-background"
                                    id="telefono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn boton-cta p-2 mt-4 col-8">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil