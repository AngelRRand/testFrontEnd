import React from 'react'
import './Styles/Container.css'
const Container = ({children, style, footer, nav}) => {

  if(!footer && !nav){
    return (
      <div className={style === true ? 'container container_styles' : 'container'}>
        {children}
      </div>
    )
  }else if(footer){
    return (
      <div className='container container_styles container_footer'>
        {children}
      </div>
    )
  }else if(nav){
    return (
      <div className='container container_styles container_nav'>
        {children}
      </div>
    )
  }

}

export default Container