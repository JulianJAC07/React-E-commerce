import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {Inicio} from "./Inicio";
import {Productos} from './Productos';
import { ProductoDetalle } from './ProductoDetalle';

export const Paginas = () => {
  return (
    <section>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/producto/:id" element={<ProductoDetalle/>}/>
        </Routes>
    </section>
    
  )
}
