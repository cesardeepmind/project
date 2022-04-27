import React from 'react';
import Tabla from '../Tabla/Tabla';
import Slider from '../Slider/Slider';
import Header from '../Header/Header';


import './Proveedor.css'

const Proveedor = () => {
  return (
    <>
        <Header />
        <Slider />
        <h1 className='titulo'>Listado de Producto de: "Proveedor"</h1>
        <Tabla />
    </>
  )
}

export default Proveedor
