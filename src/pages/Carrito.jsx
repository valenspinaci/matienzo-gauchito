import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import fotoCarrito from '../assets/img/foto-carrito.png';
import CarritoItem from '../components/CarritoItem';
import ResumenCompra from '../components/ResumenCompra';
import ModalResumen from '../components/ModalResumen';
import ModalConfirmacion from '../components/ModalConfirmacion';

const Carrito = () => {
    const { carrito, vaciarCarrito } = useContext(CartContext);
    const [mostrarResumen, setMostrarResumen] = useState(false);
    const [compraConfirmada, setCompraConfirmada] = useState(false);

    const envioFijo = 8000;
    const totalProductos = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    const totalFinal = totalProductos + (carrito.length > 0 ? envioFijo : 0);
    const envioPorItem = carrito.length > 0 ? Math.round(envioFijo / carrito.length) : 0;

    return (
        <div className="my-5">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <img className="col-6" src={fotoCarrito} alt="Carrito" />
            </div>

            {carrito.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <div className="col-10 col-md-6 text-center">
                        <h3>¡El carrito está vacío!</h3>
                        <p>Recorre la tienda de Matienzo y seguro encontrás algo que te guste.</p>
                        <Link to="/productos">
                            <button className="btn boton-cta p-2 col-12">Ver productos</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="w-100 px-2 px-md-5 my-5 d-flex flex-column flex-lg-row justify-content-between gap-3">
                    <div className="col-12 col-lg-8 d-flex flex-column gap-3">
                        {carrito.map((item, index) => (
                            <CarritoItem key={index} item={item} envioPorItem={envioPorItem} />
                        ))}
                    </div>

                    <ResumenCompra
                        totalProductos={totalProductos}
                        envioFijo={envioFijo}
                        totalFinal={totalFinal}
                        onContinuar={() => setMostrarResumen(true)}
                        onVaciar={vaciarCarrito}
                    />
                </div>
            )}

            {mostrarResumen && (
                <ModalResumen
                    carrito={carrito}
                    envioFijo={envioFijo}
                    totalFinal={totalFinal}
                    onCancelar={() => setMostrarResumen(false)}
                    onConfirmar={() => {
                        setCompraConfirmada(true);
                        vaciarCarrito();
                        setMostrarResumen(false);
                    }}
                />
            )}

            {compraConfirmada && <ModalConfirmacion onCerrar={() => setCompraConfirmada(false)} />}
        </div>
    );
};

export default Carrito;
