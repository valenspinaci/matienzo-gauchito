const AdminProductoCard = ({
    producto,
    onChange,
    onGuardar,
    onEliminar,
    expanded,
    onToggle
}) => {
    return (
        <div className="accordion col-12 my-3">
            <div className="accordion-item bg-transparent color-texto-admin">
                <h2 className="accordion-header">
                    <button
                        className={`accordion-button bg-transparent ${expanded ? '' : 'collapsed'}`}
                        onClick={onToggle}
                    >
                        <div className="d-flex gap-3 align-items-center">
                            <img
                                className="col-4 col-md-2"
                                src={`/img/${producto.imagen}`}
                                alt=""
                            />
                            <p className="fw-bold m-0 color-texto-admin">{producto.nombre}</p>
                            <p className="m-0 color-texto-admin">${producto.precio}</p>
                        </div>
                    </button>
                </h2>
                <div className={`accordion-collapse collapse ${expanded ? 'show' : ''}`}>
                    <div className="accordion-body d-flex flex-column flex-md-row gap-3">
                        <div className="col-12 col-md-6">
                            <label className="form-label">Nombre</label>
                            <input
                                className="form-control inputs-background"
                                value={producto.nombre}
                                onChange={(e) => onChange('nombre', e.target.value)}
                            />

                            <label className="form-label mt-3">Precio</label>
                            <input
                                type="number"
                                className="form-control inputs-background"
                                value={producto.precio}
                                onChange={(e) => onChange('precio', e.target.value)}
                            />

                            <label className="form-label mt-3">Color</label>
                            <input
                                className="form-control inputs-background"
                                value={producto.colour || ''}
                                onChange={(e) => onChange('colour', e.target.value)}
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label">Descripción</label>
                            <textarea
                                className="form-control inputs-background"
                                value={producto.descripcion}
                                onChange={(e) => onChange('descripcion', e.target.value)}
                            />

                            <label className="form-label mt-3">Stock</label>
                            <input
                                type="number"
                                className="form-control inputs-background"
                                value={producto.stock || 0}
                                onChange={(e) => onChange('stock', e.target.value)}
                            />

                            <button
                                className="btn boton-cta mt-4 col-12"
                                onClick={onGuardar}
                            >
                                Guardar cambios
                            </button>

                            <button
                                className="btn boton-oscuro mt-2 col-12"
                                onClick={onEliminar}
                            >
                                Eliminar producto
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProductoCard
