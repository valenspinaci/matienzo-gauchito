const ModalResumen = ({ carrito, envioFijo, totalFinal, onCancelar, onConfirmar }) => (
    <>
        <div className="modal-backdrop show"></div>
        <div className="modal d-block" tabIndex="-1" onClick={onCancelar}>
            <div className="modal-dialog fondo-app" onClick={e => e.stopPropagation()}>
                <div className="modal-content fondo-app">
                    <div className="modal-header">
                        <h5 className="modal-title">Resumen de la compra</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onCancelar} />
                    </div>
                    <div className="modal-body">
                        <h3>Productos:</h3>
                        {carrito.map(item => (
                            <p key={item.id}>
                                {item.nombre} (x{item.cantidad}) : <span className="fw-semibold">${item.precio * item.cantidad}</span>
                            </p>
                        ))}
                        <p>Envío: ${envioFijo}</p>
                        <hr />
                        <p className="fs-4">Total: <span className="fw-bold">${totalFinal}</span></p>
                        <div className="modal-footer">
                            <button type="button" className="btn boton-oscuro" onClick={onCancelar}>Cancelar</button>
                            <button type="button" className="btn boton-cta" onClick={onConfirmar}>Confirmar compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default ModalResumen;