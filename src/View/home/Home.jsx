import React, { useState, useEffect } from 'react'
import Spinner from './Component/Spinner.jsx';
import axios from 'axios'
import Card from './Component/Card';
import '../../Styles/Home.css'
const Home = () => {
  const [info, setInfo] = useState();
    useEffect(() => {
        const getInfo = async () => {
            let response = await axios.get('https://servicepad-post-api.herokuapp.com/articles/')
            setInfo(response.data.data)
        }
        getInfo()
    }, []);
  return (
    <main className='containerHome'>

      <div className='centerHome'>
        <div className='containerCards'>
          {!info ?
            (<Spinner />)
            :
            info.map(c => {
              return <Card author={c.author} key={c.id} img={c.image_url} />
            })
          }
        </div>
      </div>

    </main>
  )
}

export default Home