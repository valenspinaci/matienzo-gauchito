import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import ProductoCard from "../components/ProductoCard";
import fotoProductos from "../assets/img/foto-productos.png";

const Productos = () => {
    const { productos } = useContext(ProductContext);

    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [categoria, setCategoria] = useState("todos");
    const [orden, setOrden] = useState("default");

    useEffect(() => {
        let filtrados = [...productos];

        if (categoria !== "todos") {
            filtrados = filtrados.filter(
                (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
            );
        }

        switch (orden) {
            case "precio-asc":
                filtrados.sort((a, b) => a.precio - b.precio);
                break;
            case "precio-desc":
                filtrados.sort((a, b) => b.precio - a.precio);
                break;
            case "nombre-asc":
                filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case "nombre-desc":
                filtrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
                break;
            case "calificacion":
                filtrados.sort((a, b) => {
                    const promA =
                        a.calificaciones.reduce((x, y) => x + y, 0) / a.calificaciones.length;
                    const promB =
                        b.calificaciones.reduce((x, y) => x + y, 0) / b.calificaciones.length;
                    return promB - promA;
                });
                break;
        }

        setProductosFiltrados(filtrados);
    }, [productos, categoria, orden]);

    const contadorProductos = () => {
        const count = productosFiltrados.length;
        if (count > 1) return `${count} productos encontrados`;
        if (count === 1) return "Un producto encontrado";
        return "No hay productos";
    };

    return (
        <div>
            <div className="col-12 d-flex justify-content-center align-items-center">
                <img className="col-8 my-5" src={fotoProductos} alt="foto-producto" />
            </div>

            <ul className="d-flex col-8 flex-row flex-wrap justify-content-around list-unstyled col-md-12 py-3 py-md-5">
                {[
                    { label: "Todo", value: "todos" },
                    { label: "Mates", value: "mates" },
                    { label: "Bombillas", value: "bombillas" },
                    { label: "Termos", value: "termos" },
                    { label: "Materas", value: "materas" },
                    { label: "Yerbas", value: "yerbas" },
                    { label: "Accesorios", value: "accesorios" },
                ].map(({ label, value }, i) => (
                    <li key={i}>
                        <button
                            className={`btn btn-link text-decoration-none ${
                                categoria === value ? "fw-bold" : ""
                            } color-texto-navbar`}
                            onClick={() => setCategoria(value)}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="col-12 d-flex flex-row justify-content-around px-4 px-md-5 py-2 py-md-5">
                <h4 className="col-6 col-md-8 fs-5">{contadorProductos()}</h4>

                <div className="dropdown col-6 col-md-4 d-flex flex-row justify-content-end">
                    <button
                        className="btn color-texto-navbar dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                    >
                        Ordenar por
                    </button>
                    <ul className="dropdown-menu background-dropdown">
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => setOrden("precio-asc")}
                            >
                                Menor precio
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => setOrden("precio-desc")}
                            >
                                Mayor precio
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => setOrden("nombre-asc")}
                            >
                                Nombre A-Z
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => setOrden("nombre-desc")}
                            >
                                Nombre Z-A
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => setOrden("calificacion")}
                            >
                                Mejor calificados
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="d-flex col-11 row wrap pt-3 pb-5 mx-auto">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <ProductoCard key={producto.id} producto={producto} />
                    ))
                ) : (
                    <div className="col-12 col-md-4 col-lg-3 mx-auto d-flex flex-column align-items-center justify-content-center">
                        <h3>¡Lo sentimos!</h3>
                        <p>No existen productos de esta categoría</p>
                        <Link
                            className="text-decoration-none color-texto-producto"
                            to="/productos"
                        >
                            <button className="btn boton-cta p-2 w-100">Ver otros</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Productos;