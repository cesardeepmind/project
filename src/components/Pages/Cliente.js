import React from "react";
import Cards from "../Card/Cards";
import Header from "../Header/Header";


import './Cliente.css'


function Cliente() {
  return (
    <>
      <Header />
      <div className="container-card">
        <Cards />
      </div>

    </>
  );
}

export default Cliente;