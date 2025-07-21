import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ProductContext } from '../context/ProductContext'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify';

const DetalleProducto = () => {
    const { id } = useParams()
    const { productos } = useContext(ProductContext)
    const { agregarAlCarrito } = useContext(CartContext)
    const { usuario } = useContext(AuthContext);

    const [producto, setProducto] = useState(null)
    const [cantidad, setCantidad] = useState(1)

    useEffect(() => {
        const encontrado = productos.find(p => p.id === parseInt(id))
        setProducto(encontrado)
    }, [id, productos])

    if (!producto) return <p className="container my-5">Cargando producto...</p>

    const promedio = producto.calificaciones?.length > 0
        ? producto.calificaciones.reduce((a, b) => a + b, 0) / producto.calificaciones.length
        : 4

    const renderCalificacion = (rating) => {
        if (rating <= 1) return '/img/1estrellas.png'
        if (rating <= 2) return '/img/2estrellas.png'
        if (rating <= 3) return '/img/3estrellas.png'
        if (rating <= 4) return '/img/4estrellas.png'
        return '/img/5estrellas.png'
    }

    const handleAgregar = () => {
        if (!usuario || usuario.rol !== 'cliente') {
            toast.error('Debés iniciar sesión para agregar al carrito');
            return;
        }

        agregarAlCarrito({ ...producto, cantidad });
        toast.success('Producto agregado al carrito');
    }

    return (
        <div className="container my-5">

            <div className="row d-none d-lg-flex justify-content-between">
                <div className="col-6">
                    <p>Todos / {producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <p className="me-4">ID Producto: {producto.id}</p>
                    <p>Origen: {producto.origen || 'Argentina'}</p>
                </div>
            </div>

            <div className="d-lg-none col-10 d-flex flex-column px-5 my-2">
                <h2>{producto.nombre}</h2>
                <h2>${producto.precio}</h2>
            </div>

            <div className="row d-flex flex-column flex-lg-row">
                <div className="col-12 col-lg-6 d-flex justify-content-center mb-4">
                    <img className="img-fluid" src={`/img/${producto.imagen}`} alt={producto.nombre} />
                </div>

                <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
                    <h2 className="d-none d-lg-block">{producto.nombre}</h2>
                    <h2 className="fw-bold d-none d-lg-block">${producto.precio}</h2>
                    <hr className="col-9 border border-warning border-1" />

                    <div className="d-flex col-9 justify-content-between">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-star me-1"></i>
                            <p className="fw-semibold mb-0">{promedio.toFixed(1)}</p>
                        </div>
                        <p className="mb-0">
                            {producto.reviews?.length > 0
                                ? `${producto.reviews.length} opiniones`
                                : 'Aún no hay opiniones'}
                        </p>
                    </div>

                    <div className="d-flex col-9 justify-content-between mt-2">
                        <p className="mb-0">{producto.vendidos || Math.floor(Math.random() * 100)} vendidos</p>
                        <p className={`mb-0 ${producto.stock > 0 ? '' : 'text-success'}`}>
                            {producto.stock > 0 ? 'En stock' : 'En stock'}
                        </p>
                    </div>

                    <div className="col-9 mt-3">
                        <p>Color: <span className="fw-semibold">{producto.colour}</span></p>
                    </div>

                    <div className="col-9 mt-2">
                        <p>Descripción:</p>
                        <p className="fw-bold">{producto.descripcion}</p>
                    </div>

                    {usuario?.rol !== 'admin' &&
                        (
                            <div className="col-9 mt-3 mb-4">
                                <label htmlFor="cantidad" className="form-label">Cantidad:</label>
                                <input
                                    type="number"
                                    id="cantidad"
                                    className="form-control"
                                    min="1"
                                    max={producto.stock}
                                    value={cantidad}
                                    onChange={e => setCantidad(parseInt(e.target.value))}
                                    placeholder={`${producto.stock} disponibles`}
                                    required
                                />
                            </div>
                        )}

                    {usuario?.rol !== 'admin' && (
                        <div className="col-9 mb-5 d-flex gap-2">
                            <button className="btn boton-cta p-2 w-100" onClick={handleAgregar}>
                                <i className="fa-solid fa-cart-shopping"></i> Agregar al carrito
                            </button>
                        </div>
                    )}

                </div>
            </div>

            <div className="col-12 mt-5">
                <div className="col-10 mx-auto">
                    <h3>Opiniones</h3>

                    {producto.reviews?.map((comentario, i) => (
                        <div key={i} className="review-border rounded p-3 mb-3">
                            <img
                                className="col-4 col-md-2 col-lg-1"
                                src={renderCalificacion(promedio)}
                                alt={`Rating promedio: ${promedio}`}
                            />
                            <p className="mt-2">{comentario}</p>
                        </div>
                    ))}

                    <div className="mt-4">
                        <h3>Nueva opinión</h3>
                        <form className="row">
                            <div className="col-12 col-md-9 mb-3">
                                <label htmlFor="comment" className="form-label">Comentario:</label>
                                <textarea className="form-control" id="comment" required></textarea>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <label htmlFor="rating" className="form-label">Puntaje:</label>
                                <select className="form-control" id="rating" required>
                                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn boton-cta p-2 w-100">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalleProducto