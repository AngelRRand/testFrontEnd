import React from 'react'
import '../../../Styles/Home.css'
import ImageHome from '../../../Assets/image.png'
import Vector1 from '../../../Assets/Vector1.png'
import Vector2 from '../../../Assets/Vector2.png'
const Presentation = () => {
  return (
    <>
    
      <div className='textHome'>
        <h2>Next generation digital banking</h2>
        <span>Take your financial online. Your Easybank account will be a one-stop for spendin, saving budgeting, nvesting, and much more</span>
        <button className='btnNav'>
          Request Invite
        </button>
      </div>
      <div className='containerImages'>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={ImageHome} alt="" />
      </div>

    </>
  )
}

export default Presentation