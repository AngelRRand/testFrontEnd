import React from 'react'
import Spinner from './Spinner.jsx';
const ArticlesListMap = ({currentItems}) => {
    return (
        <div className='containerListArtLast'>
            <div className='textCenterArt toplistArtPrevius'><p>AUTHOR NAME</p></div>
            <div className='toplistArtPrevius'><p>TITLE</p></div>
            <div className='toplistArtPrevius'><p>CONTENT</p></div>
            <div className='toplistArtPrevius'><p>DATE</p></div>
            <div></div>
            {
                !currentItems ?
                    <Spinner />
                    :
                    currentItems.map((p, index) => {
                        let day = p.date.slice(0, 10)
                        let par = null
                        let inpar = null
                        if (index % 2 === 0) {
                            par = 'bgWhite'
                        } else {
                            inpar = 'bgGray'
                        }
                        return (
                            <>
                                <h4 className={par === null ? inpar : par}>{p.author}</h4>
                                <p className={par === null ? inpar : par}>{p.title}</p>
                                <p className={par === null ? inpar : par}>{p.content}</p>
                                <p className={par === null ? inpar : par}>{day}</p>
                                <span className={par === null ? inpar : par}>edit</span>
                            </>
                        )
                    })
            }
        </div>
    )
}

export default ArticlesListMap