import React from 'react'
import Spinner from '../../Component/Spinner.jsx';
import { AiOutlineClose } from "react-icons/ai";
const ArticlesListMap = ({ currentItems, getId, deletArticle }) => {
    return (
        <div className='list__container'>
            <p className='list__top list__centerText'>AUTHOR NAME</p>
            <p className='list__top'>TITLE</p>
            <p className='list__top'>CONTENT</p>
            <p className='list__top'>DATE</p>
            <div></div>
            <div></div>
            {
                currentItems === undefined ?
                    (<Spinner />)
                    :
                    currentItems.map((p, index) => {
                        let day = p.date.slice(0, 10)
                        let par = false
                        if (index % 2 === 0) {
                            par = true
                        }
                        return (
                            <>
                                <h4 className={par ? 'bgGray list__centerText list__font' : 'list__font'}>{p.author}</h4>
                                <p className={par ? 'bgGray list__font' : 'list__font'}>{p.title}</p>
                                <p className={par ? 'bgGray list__font' : 'list__font'}>{p.content}</p>
                                <p className={par ? 'bgGray list__font' : 'list__font'}>{day}</p>
                                <p
                                    className={par ? 'bgGray list__edit list__font' : 'list__edit list__font'}
                                    onClick={() => getId(p.id)}
                                >edit</p>
                                <p className={par ? 'bgGray list__font' : 'list__font'}>
                                    <AiOutlineClose
                                        className='deletArticle'
                                        onClick={() => deletArticle(p.id)} />
                                </p>
                            </>
                        )
                    })
            }
        </div>
    )
}

export default ArticlesListMap