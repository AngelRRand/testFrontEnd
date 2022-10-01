import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card';
const Cards = () => {
    const [cosas, setCosas] = useState();
    useEffect(() => {
        const ObtenerCosas = async () => {
            let response = await axios.get('https://servicepad-post-api.herokuapp.com/articles/')
            setCosas(response.data.data)
        }
        ObtenerCosas()
    }, []);
    console.log(cosas)
    return (
        <div>
            {!cosas? 
                (<p>Cargando</p>) 
                : 
                cosas.map(c =>{
                    return <Card author={c.author} img={c.image_url}/>
                })
            }
        </div>
    )
}

export default Cards