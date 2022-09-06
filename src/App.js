import React from 'react';
//import Producto from './Components/Producto'
//import './App.css';
//import Navbar from './Components/Navbar';
import { Header } from './Components/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import {Paginas} from './Components/Paginas';
import {DataProvider} from "./Context/Dataprovider";
import {Carrito }from "./Components/Carrito/Carrito";
import 'boxicons'
import { Footer } from './Components/Footer';



function App() {
  return (
    <DataProvider>
     <div className="App">
         <Router>
          <Header/>
          <Carrito/>
          
          <Paginas/>
          
          <Footer/>

          </Router>
      
      
      
      
      
      </div>
    </DataProvider>
    
  );
}

export default App;
