import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detalle.module.css"

export function Detalle() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {

    fetch("/data/Productos.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {

        const productoEncontrado = datos.find(
          (producto) => producto.id == id
        );

        setProducto(productoEncontrado);

      });

  }, [id]);

  if (!producto) {
    return <p>Cargando producto...</p>;
  }

  return (

    <div className={styles.detalle}>
      <div>
        {/* muestra la info  */}
        <div>
          <h1>{producto.nombre}</h1>
          <div>
             <img src={producto.imagen} alt={producto.nombre}></img>
          </div>
          <h3>${producto.precio}</h3>

          <p>{producto.descripcion}</p>

          <p><strong>Categoría:</strong> {producto.categoria}</p>
        </div>

      </div>
    </div>

  );
}