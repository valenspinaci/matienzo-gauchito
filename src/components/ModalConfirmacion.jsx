import { Link } from 'react-router-dom'

const ModalConfirmacion = ({ onCerrar }) => (
    <>
        <div className="modal-backdrop show"></div>
        <div className="modal d-block" tabIndex="-1" onClick={onCerrar}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-content fondo-app">
                    <div className="modal-header">
                        <h5 className="modal-title">¡Gracias por tu compra!</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onCerrar} />
                    </div>
                    <div className="modal-body text-center">
                        <p className="fs-5">Tu pedido fue procesado con éxito 🎉</p>
                        <p className="text-secondary">Pronto nos pondremos en contacto para coordinar la entrega.</p>
                        <img src="/img/confirmacion.png" alt="Compra confirmada" className="img-fluid my-3" />
                    </div>
                    <div className="modal-footer">
                        <Link to="/productos" className="btn boton-cta" onClick={onCerrar}>
                            Seguir comprando
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default ModalConfirmacion;