import { useEffect, useState } from "react";

export function Recomendados() {

  const [recomendados, setRecomendados] = useState([]);

  useEffect(() => {
    fetch("/data/Productos.json")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const productosRecomendados = data.filter(
          (producto) => producto.Recomendado === true
        );

        setRecomendados(productosRecomendados);
      });
  }, []);

  return (
    <div>
      {recomendados.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>${producto.precio}</p>
        </div>
      ))}
    </div>
  );
}