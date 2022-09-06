import React, { useContext } from 'react'
//import IMG from '../images/img01.jpg';
import { DataContext } from '../Context/Dataprovider';

import { ProductoItem } from './ProductoItem';


export const Productos = () => {
    const value =useContext(DataContext)
    const [productos]=value.productos
    console.log(productos);




  return (
    <>
     <h1 className='title'> P R O D U C T O S</h1>
      <div className='productos'>
        {productos.map(producto=>( <ProductoItem key={producto.id} id={producto.id} title={producto.title} price={producto.price} image={producto.image} category={producto.category} cantidad={producto.cantidad}/>))}
        
          

           
       </div> 
    </>
  )
}
