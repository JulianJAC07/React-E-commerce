import React, {useContext,useState,useEffect }from 'react'
import { DataContext } from '../Context/Dataprovider'
import {useParams} from 'react-router-dom';
import { ProductoItem } from './ProductoItem';





export const ProductoDetalle = ()=> {
    const value=useContext(DataContext)
    const [productos]=value.productos;
    const addCarrito=value.addCarrito;
    const [detalle,setDetalle]=useState([])
    const [url,setUrl]=useState(0)
    const [images,setImages]=useState('')
    const params=useParams();
    let item=0;

    useEffect(()=>{
        productos.forEach(producto=>{
            item=0;
            if(producto.id===parseInt(params.id)){//parseamos para que sean los dons enteros sino no funciona
            setDetalle(producto);
            setUrl(0);

        }
    })
        
    },[params.id,productos])

    useEffect(()=>{
        const values=`${detalle.img1}${url}${detalle.img2}`
        setImages(values);
    },[url,params.id])
    
    
    const handleInput =e=>{
        const number =e.target.value.toString().padStart(2,'01');
        setUrl(number)
        console.log(number)
        
    }


    if (detalle.length<1){
        return null;
    }




  return (
    <>
        {

            <div className='detalles'>
                <h2>{detalle.title}</h2>
                <p className='price'>${detalle.price}</p>
                <div className='grid'>
                    <p className='nuevo'>Nuevo</p>
                    <div className='size'>
                        <select placeholder='Tamaño'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="">6</option>

                        </select>
                        <p>Tamaño</p>
                    </div>
                </div>
                <buttom onClick={()=>{addCarrito(detalle.id)}}>Añadir al carrito</buttom>
                {url ? <img src={images} alt={detalle.title}/>:<img src={detalle.image} alt={detalle.title}/> }
                
                <input type="range"  min="1" max="36" value={url} onChange={handleInput}/>
               <div className='descripcion'> 
                   <p>
                     <b>descripcion:</b> 
                     lorem ipsun solor sit etc........................................................................................................................... <b/>sdasfusdfjidsisoadgsdjafjasdjvcsjdaiosvj oisjdoivjoisdajgvsdajovjsadijvisadjiogvjiofejvboihsuivfoiv
                  </p>
                    </div>
            </div>
        }
        <h2 className='relacionados'>Prouctos Relacionados</h2>
         <div className='productos'>
        {productos.map((producto)=>{
            if((item<6)&&(detalle.category===producto.category)){
                item++;
                return<ProductoItem key={producto.id} id={producto.id} title={producto.title} price={producto.price} image={producto.image} category={producto.category} cantidad={producto.cantidad}/>
            }

        })
            
        
        }
        
          

           
       </div> 
    
    
    
    </>
    
  )
}
