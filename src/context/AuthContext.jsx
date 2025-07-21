import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const guardado = localStorage.getItem('usuario');
        if (guardado) {
            setUsuario(JSON.parse(guardado));
        }
    }, [])

    const login = (usuarioEncontrado) => {
        setUsuario(usuarioEncontrado);
        localStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
    }

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('usuario');
    }

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}