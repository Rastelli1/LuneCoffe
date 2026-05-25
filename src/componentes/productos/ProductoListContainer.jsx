
import { ProductoList } from "./productoList/ProductoList";
import styles from "./ProductoListContainer.module.css"
import React, { useState, useEffect } from 'react';

export function ProductoListContainer({ Mensaje, recomendado }) {

    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        fetch("/data/Productos.json")

            .then((respuesta) => {

                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }

                return respuesta.json();
            })

            .then((datos) => {

                // fitra los datos de productos recomendados
                const productosFiltrados = recomendado
                    ? datos.filter((producto) => producto.Recomendado === true)
                    : datos;

                setProductos(productosFiltrados);
            })

            .catch((error) => {
                setError(error.message);
            })

            .finally(() => {
                setCargando(false);
            });

    }, [recomendado]);

    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2 className={styles.subtitulo}>{Mensaje}</h2>

            <div className={styles.productos}>
                <ProductoList productos={productos} />
            </div>
        </div>
    );
}