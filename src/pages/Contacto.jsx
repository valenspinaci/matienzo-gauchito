import { useState } from "react";
import { toast } from "react-toastify";
import fotoContacto from "../assets/img/foto-contacto.png";

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        mail: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success('Mensaje enviado correctamente');
        setFormData({
            name: '',
            lastname: '',
            mail: '',
            comment: ''
        });
    };

    return (
        <div>
            <div className="col-12 d-flex justify-content-center align-items-center">
                <img className="col-8 my-5" src={fotoContacto} alt="contacto" />
            </div>

            <div className="col-12 d-flex flex-column justify-content-center align-items-center mb-5">
                <form className="col-10 col-md-6 col-lg-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control inputs-background"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Apellido</label>
                        <input
                            type="text"
                            className="form-control inputs-background"
                            id="lastname"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mail" className="form-label">Mail</label>
                        <input
                            type="email"
                            className="form-control inputs-background"
                            id="mail"
                            name="mail"
                            value={formData.mail}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="comment" className="form-label">Comentario</label>
                        <textarea
                            className="form-control inputs-background"
                            id="comment"
                            name="comment"
                            rows="3"
                            value={formData.comment}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn boton-cta p-2 w-100">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
