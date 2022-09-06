import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import { DataContext } from '../Context/Dataprovider';


export const ProductoItem = ({ id,title,price,image,category,cantidad}) => {
    const value =useContext(DataContext);
    const addCarrito=value.addCarrito;
  return (
           <div className='producto'>
              <Link to={`/producto/${id}`}> 
                    <div className='producto'>
                   
                     <img src={image} alt={title}/>

                    </div>
               </Link>

                <div className='producto__footer'>
                  <h1>{title}</h1>
                  <p>{category}</p>
                  <p className='price'>${price}</p>

                </div>
               <div className='button'>
                   <buttom className='btn' onClick={()=>addCarrito(id)}>
                     Añadir al carrito
                    </buttom>
            
                  <Link to={`/producto/${id}`} className='btn'>
                     Vista
                   </Link>

                </div>
            </div>
    
  )
}
