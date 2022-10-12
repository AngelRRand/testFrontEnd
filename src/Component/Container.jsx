import React from 'react'
import './Styles/Container.css'
const Container = ({children, style, footer, nav}) => {

  if(!footer && !nav){
    return (
      <div className={style === true ? 'container container__styles' : 'container'}>
        {children}
      </div>
    )
  }else if(footer){
    return (
      <div className='container container__styles container__footer'>
        {children}
      </div>
    )
  }else if(nav){
    return (
      <div className='container container__styles container__nav'>
        {children}
      </div>
    )
  }

}

export default Container