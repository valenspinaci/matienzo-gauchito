import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import ProductoCard from "../components/ProductoCard";
import fotoInicio from "../assets/img/foto-inicio.png";

const Home = () => {
    const { obtenerDestacados } = useContext(ProductContext);
    const [destacados, setDestacados] = useState([]);

    useEffect(() => {
        const destacadosActuales = obtenerDestacados();
        setDestacados(destacadosActuales);
    }, [obtenerDestacados]);

    return (
        <>
            <div className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="row h-75 col-12 d-flex justify-content-center align-items-center">
                    <div className="flex-column col-12 col-md-10 col-lg-9 d-flex justify-content-center align-items-center">
                        <img className="col-12 col-lg-10" src={fotoInicio} alt="inicio" />
                        <Link
                            to="/productos"
                            className="btn boton-cta my-5 p-2 col-6 col-md-4 col-lg-2 text-decoration-none color-texto-producto text-center"
                        >
                            Comprar
                        </Link>
                    </div>
                </div>
            </div>

            <div className="contenedor-oscuro h-100 d-flex flex-column flex-lg-row justify-content-around px-4 col-12">
                <div className="my-0 pb-5 col-12 col-lg-4 d-flex flex-column justify-content-around">
                    <h2>Nuestros productos en tendencia</h2>
                    <p>
                        Encuentra los diseños más innovadores, materiales de alta calidad y accesorios imprescindibles para la experiencia mate. Descubre lo mejor del mundo del mate en un lugar.
                    </p>
                    <Link to="/productos" className="btn boton-cta col-6 col-md-4">
                        Ver todos
                    </Link>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-around col-12 col-lg-7 mb-3">
                    {destacados.length > 0 ? (
                        destacados.map((product) => (
                            <ProductoCard key={product.id} producto={product} />
                        ))
                    ) : (
                        <p>Cargando productos...</p>
                    )}
                </div>
            </div>

            <div className="h-100 p-5 d-flex flex-column justify-content-around contenedor-claro">
                <h2>Nosotros</h2>
                <div className="d-flex flex-column flex-lg-row gap-5 col-12">
                    <div className="col-12 col-lg-6 pe-4 py-4">
                        <h3>¿Quiénes somos?</h3>
                        <p>
                            Somos apasionados del mate, dedicados a llevar la autenticidad y la excelencia a cada sorbo. Nuestra misión es ofrecerte no solo productos de calidad, sino también una experiencia única y enriquecedora en cada momento compartido con nuestro mate.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 p-4">
                        <h3>¿Cómo surgimos?</h3>
                        <p>
                            Surgimos en 2023 a partir de nuestra pasión compartida por el mate y el deseo de ofrecer a otros esa misma experiencia enriquecedora. Inspirados en la tradición y la innovación, creamos este espacio para compartir lo mejor del mundo del mate.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;