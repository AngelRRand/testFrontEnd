import React, { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import ArticleContext from '../../../Context/Article/ArticleContext.jsx';
import Spinner from './Spinner.jsx';

function ArticlesList() {


    const { articles, getArticles, } = useContext(ArticleContext)
    const [currentItems, setCurrentItems] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6
    useEffect(() => {
        getArticles()
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(articles.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(articles.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, articles]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % articles.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {   
                !currentItems? (
                    <Spinner/>
                ):
                currentItems.map(p =>{
                    return <p>{p.author}</p>
                })
            }
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default ArticlesList