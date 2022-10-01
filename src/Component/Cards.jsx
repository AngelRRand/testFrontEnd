import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';
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
                (<Spinner/>) 
                : 
                cosas.map(c =>{
                    return <Card author={c.author} key={c.id} img={c.image_url}/>
                })
            }
        </div>
    )
}

export default Cards