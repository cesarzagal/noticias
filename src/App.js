import React, {Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
function App() {
    //definir la categoria y noticia
    const [categoria, guardaCategoria] = useState('sports');
    const [noticias, guardarNoticias] = useState([]);
    useEffect( () => {
        const consultarAPI = async () => {
            const key='KEY';
            const url=`https://newsapi.org/v2/top-headlines?country=us&language=es&category=${categoria}&apiKey=${key}`;
            const respuesta = await fetch(url);
            const noticias = await respuesta.json();

            guardarNoticias(noticias.articles);
        } 
        consultarAPI();
    }
    ,[categoria]);
    return (
        <Fragment>
            <Header
                titulo="Buscador de Noticias"
            />
            <div className="container white">
                <Formulario
                    guardaCategoria={guardaCategoria}
                ></Formulario>
                <ListadoNoticias
                    noticias={noticias}
                />
            </div>
        </Fragment>
    );
}

export default App;
