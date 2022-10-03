import React, { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import ArticleContext from '../../../Context/Article/ArticleContext.jsx';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import '../../../Styles/home/PaginationStyles.css'
import json from './articles.json'
import ArticlesListMap from './ArticlesListMap.jsx';
function ArticlesList() {


    const { articles, getArticles } = useContext(ArticleContext)
    const { data } = json
    const [currentItems, setCurrentItems] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6
    useEffect(() => {
        getArticles()
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    let arrowleft = () =>{
        return (
            <div className='arrow'>
                <AiOutlineArrowLeft/>
                <p>Previous</p>
            </div>
        )
    }
    let arrowrigth = () =>{
        return (
            <div className='arrow'>
                <p>Next</p>
                <AiOutlineArrowRight/>
            </div>
        )
    }
    return (
        <>
            <ArticlesListMap
                currentItems={currentItems}
            />
            <div className='centerPagination'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={arrowrigth()}
                    previousLabel={arrowleft() }
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    containerClassName='pagination'
                    pageClassName='containerPageNum'
                    pageLinkClassName='pageNum'
                    previousLinkClassName='arrowPaginationPrev'
                    nextLinkClassName='arrowPaginationNext'
                    activeLinkClassName='active'
                    breakLinkClassName='breakPagination'
                />
            </div>
        </>
    );
}

export default ArticlesList