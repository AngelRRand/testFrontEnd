import React from 'react'

const Alma = ({cosas}) => {
  return (
    <div>
        {!cosas?
        <p>nada</p>
        :
        cosas.map(p => {
          return <p>{p.author}</p>
        }
        )}
    </div>
  )
}

export default Alma