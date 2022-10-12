import React, { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import ArticleContext from '../../Context/Article/ArticleContext.jsx';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import ArticlesListMap from './ArticlesListMap.jsx';
import Pagination from '../../Component/Pagination.jsx';
function ArticlesList() {

    const { 
        articles, 
        getArticles, 
        getInfoArticle, 
        deletArticle, 
        infoArticle 
    } = useContext(ArticleContext)
    const [currentItems, setCurrentItems] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6

    useEffect(() => {
        getArticles()
    }, [articles, infoArticle]);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(articles.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(articles.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, articles]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % articles.length;
        setItemOffset(newOffset);
    };
    
    const getId = (idArticle) => {
        const info = articles.filter(a => a.id === idArticle)
        getInfoArticle(info)
    }

    let arrowleft = () => {
        return (
            <div className='arrow'>
                <AiOutlineArrowLeft />
                <p>Previous</p>
            </div>
        )
    }
    let arrowrigth = () => {
        return (
            <div className='arrow'>
                <p>Next</p>
                <AiOutlineArrowRight />
            </div>
        )
    }

    return (
        <>
            <ArticlesListMap 
                currentItems={currentItems} 
                getId={getId} 
                deletArticle={deletArticle}
            />

            <Pagination
                arrowrigth={arrowrigth}
                arrowleft={arrowleft}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            />
        </>
    );
}

export default ArticlesList