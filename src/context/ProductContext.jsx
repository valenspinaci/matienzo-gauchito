import { createContext, useEffect, useState } from "react"
import productosJSON from "../data/productos.json"
import { toast } from "react-toastify"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos(productosJSON)
    }, [])

    const obtenerProductos = () => productos

    const obtenerDestacados = () => {
        const promedio = (arr) => arr.reduce((acc, v) => acc + v, 0) / arr.length
        return [...productos]
            .filter(p => p.calificaciones.length > 0)
            .sort((a, b) => promedio(b.calificaciones) - promedio(a.calificaciones))
            .slice(0, 3)
    }

    const filtrarPorCategoria = (categoria) => {
        if (!categoria || categoria === "todos") return productos
        return productos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase())
    }

    const agregarProducto = (nuevoProducto) => {
        const idNuevo = Math.max(...productos.map(p => p.id)) + 1
        const producto = { ...nuevoProducto, id: idNuevo }
        setProductos(prev => [...prev, producto])
        toast.success('Producto creado correctamente');
    }

    const editarProducto = (id, data) => {
        setProductos(prev =>
            prev.map(p => (p.id === id ? { ...p, ...data } : p))
        )
        toast.success('Producto actualizado');
    }

    const eliminarProducto = (id) => {
        setProductos(prev => prev.filter(p => p.id !== id))
        toast.success('Producto eliminado');
    }

    return (
        <ProductContext.Provider
            value={{
                productos,
                obtenerProductos,
                obtenerDestacados,
                filtrarPorCategoria,
                agregarProducto,
                editarProducto,
                eliminarProducto
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}
