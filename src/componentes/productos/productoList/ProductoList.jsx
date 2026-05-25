import { TarjetaProducto } from "../tarjetaProducto/TarjetaProducto";

export function ProductoList({productos}){
    return(
        <>
            {productos.map(prod => (
                <TarjetaProducto key={prod.id}{...prod}/>
            ))}
        </>
    );
}