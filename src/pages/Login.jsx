import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import usuarios from '../data/usuarios.json'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [recordarme, setRecordarme] = useState(false)
    const [error, setError] = useState('')
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const usuario = usuarios.find(u => u.email === email && u.password === password)

        if (usuario) {
            login(usuario)
            navigate('/')
        } else {
            setError('Email o contraseña incorrectos')
        }
    }

    return (
            <div className="container fondo-app text-light my-5">
                <div className="d-flex row justify-content-center">
                    <div className="d-flex row col-12 col-md-8 col-lg-6">
                        <div className="card bg-transparent border-light">
                            <div className="card-header bg-transparent border-light text-light text-center">
                                Inicio de sesión
                            </div>

                            <div className="card-body px-4">
                                <form onSubmit={handleSubmit} className="mx-auto">

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label text-light">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control bg-transparent text-light"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoFocus
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label text-light">
                                            Contraseña
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control bg-transparent text-light"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="remember"
                                            checked={recordarme}
                                            onChange={() => setRecordarme(!recordarme)}
                                        />
                                        <label className="form-check-label text-light" htmlFor="remember">
                                            Recordarme
                                        </label>
                                    </div>

                                    {error && (
                                        <p className="text-danger">{error}</p>
                                    )}

                                    <div className="d-flex flex-column flex-sm-row gap-2 align-items-start align-items-sm-center mt-3">
                                        <button type="submit" className="btn btn-warning">
                                            Ingresar
                                        </button>
                                        <a className="btn btn-link text-light disabled">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login