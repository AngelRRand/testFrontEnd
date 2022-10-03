import React from 'react'
import './../../../Styles/home/FormStyles.css'
const ArticlesFrom = () => {
    return (
        <form className='containerFormArticles'>
            <div className='divForm'>
                <label>Author</label>
                <input type="text" />
            </div>
            <div className='divForm'>
                <label>Blog Title</label>
                <input type="text" />
            </div>
            <div className='divForm'>
                <label>Blog Content</label>
                <textarea type="text" />
            </div>
            <button className='btnNav btnfrom'>
                Request Invite
            </button>
        </form>
    )
}

export default ArticlesFrom