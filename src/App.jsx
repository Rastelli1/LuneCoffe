import { Layout } from "./componentes/layout/Layout";
import './App.css'
import { ProductoListContainer } from "./componentes/productos/ProductoListContainer";
import  Home from "./paginas/home/Home";
import { Detalle } from "./componentes/productos/detalleProducto/Detalle";
import Nosotros from "./paginas/nosotros/Nosotros"
import {Routes,Route} from "react-router-dom";

function App() {
  
  return(
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<ProductoListContainer Mensaje={"Productos destacados"}/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/producto/:id" element={<Detalle/>}
/>
      </Route>
    </Routes>
  );
}

export default App
