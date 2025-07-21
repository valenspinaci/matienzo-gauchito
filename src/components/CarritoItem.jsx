const CarritoItem = ({ item, envioPorItem }) => (
    <div className="contenedor-oscuro rounded d-flex flex-column p-3">
        <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-row align-items-center gap-3 col-8">
                <img src={`/img/${item.imagen}`} alt={item.nombre} className="col-3" />
                <h4 className="mb-0">{item.nombre}</h4>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center pe-3">
                <h4 className="mb-0">${item.precio}</h4>
                <h5 className="mb-0 ps-2">(x{item.cantidad})</h5>
            </div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center pt-3 pe-3 borde-producto-arriba">
            <h5 className="ps-4">Envío</h5>
            <h5>${envioPorItem}</h5>
        </div>
    </div>
)

export default CarritoItem;