import { useState } from "react";
import styles from "./TarjetaProducto.module.css"
import { Link } from "react-router-dom";

export function TarjetaProducto({nombre,imagen,precio, disponible,id}){

    //agregar al carrito 
    const [cantidad,setCantidad]=useState(0);
    const carrito=[{nombre, precio, cantidad}]
    const incrementar=()=>{
        if(disponible!=false){
            setCantidad(cantidad+1);
        }
    };
    //eliminar del carrito
    const decrementar=()=>{
        if(cantidad>0){
            setCantidad(cantidad-1);
        }
    };
    const CompraClick=()=> {
        if(cantidad >0){
            
            alert(`¡Agregaste ${cantidad} unidades de ${nombre} al carrito!`); //ahora nuestro boton respondera al click, es un onChange
        }
        
    };
    return(
        <div className={styles.tarjetaProducto}>
            <h2>{nombre}</h2>
            <img src={imagen} alt="" />
            <p>Precio: ${precio}</p>
            <p>Stock Disponible: {disponible}</p>
            {/* manejando los estados con los clicks */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:
                'center', margin: '10px 0' }}>
                <button onClick={decrementar}>-</button>
                <p style={{ margin: '0 10px' }}>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>
            <button onClick={CompraClick}>Agregar al carrito</button> 
            <Link to={`/producto/${id}`}> Ver detalle </Link>
        </div>
    );
}