import React from 'react'
import './Styles/Container.css'
const Container = ({children, style}) => {
  return (
    <section className={style === true ? 'container title' : 'container'}>
      {children}
    </section>
  )
}

export default Container