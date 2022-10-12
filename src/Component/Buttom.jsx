import React from 'react'
import './Styles/Buttom.css'
const Buttom = ({ text, action, setAction, form, infoArticle }) => {

  if (!form) {
    return (
      <button
        className='btn'
        onClick={() => setAction(!action)}
      >
        {text}
      </button>
    )
  } else {
    return(
      <input
        type="submit"
        className='btn btnfrom'
        value={infoArticle.length > 0 ? 'Edit' : 'Save'}
      />
    )
  }
}

export default Buttom