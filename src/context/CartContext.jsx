import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto) => {
        const existe = carrito.find(p => p.id === producto.id)
        if (existe) {
            setCarrito(carrito.map(p =>
                p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
            ))
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }])
        }
    }

    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(p => p.id !== id))
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}
