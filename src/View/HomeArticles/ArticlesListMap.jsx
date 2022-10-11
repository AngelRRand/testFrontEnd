import React from 'react'
import Spinner from '../../Component/Spinner.jsx';
import {  AiOutlineClose } from "react-icons/ai";
const ArticlesListMap = ({currentItems, getId , deletArticle}) => {
    return (
        <div className='containerListArtLast'>
            <p className='textCenterArt toplistArtPrevius'>AUTHOR NAME</p>
            <p className='toplistArtPrevius'>TITLE</p>
            <p className='toplistArtPrevius'>CONTENT</p>
            <p className='toplistArtPrevius'>DATE</p>
            <div></div>
            <div></div>
            {
                currentItems === undefined ?
                    (<Spinner />)
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
                                <span
                                    className={par === null ? inpar : par}
                                    onClick={() => getId(p.id)}
                                >edit</span>
                                <AiOutlineClose
                                    className='deletArticle'
                                    onClick={() => deletArticle(p.id)} />
                            </>
                        )
                    })
            }
        </div>
    )
}

export default ArticlesListMap