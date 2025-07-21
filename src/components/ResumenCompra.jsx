const ResumenCompra = ({ totalProductos, envioFijo, totalFinal, onContinuar, onVaciar }) => (
    <div className="col-12 col-lg-4">
        <div className="p-3 contenedor-oscuro rounded">
            <h4>Resumen</h4>
            <hr className="borde-resumen" />
            <div className="d-flex justify-content-between">
                <p>Productos</p>
                <p>${totalProductos}</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Envío</p>
                <p>${envioFijo}</p>
            </div>
            <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <h5>${totalFinal}</h5>
            </div>
        </div>
        <div className="d-flex flex-column gap-2 my-3">
            <button className="btn boton-cta" onClick={onContinuar}>Continuar compra</button>
            <button className="btn boton-oscuro" onClick={onVaciar}>Vaciar carrito</button>
        </div>
    </div>
)

export default ResumenCompra;