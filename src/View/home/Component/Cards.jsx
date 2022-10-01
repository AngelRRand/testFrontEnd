import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';
import axios from 'axios'
import Card from './Card';
import '../../../Styles/Home.css'
const Cards = () => {

    
    const [info, setInfo] = useState();
    useEffect(() => {
        const getInfo = async () => {
            let response = await axios.get('https://servicepad-post-api.herokuapp.com/articles/')
            setInfo(response.data.data)
        }
        getInfo()
    }, []);

    return (
        <div className='containerCards'>
            {!info ?
                (<Spinner />)
                :
                info.map(c => {
                    return <Card author={c.author} key={c.id} img={c.image_url} />
                })
            }
        </div>
    )
}

export default Cards