import React, { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import ArticleContext from '../../../Context/Article/ArticleContext.jsx';
import Spinner from './Spinner.jsx';
import '../../../Styles/home/PaginationStyles.css'
import json from './articles.json'
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

    return (
        <>
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

                            if(2 % index === 0){

                            }
                            return (
                                <>
                                    <h4 className=''>{p.author}</h4>
                                    <p className=''>{p.title}</p>
                                    <p className=''>{p.content}</p>
                                    <p className=''>{day}</p>
                                    <p className='editTextList'>edit</p>
                                </>
                            )
                        })
                }
            </div>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName='pagination'
                    pageLinkClassName='pageNum'
                    previousLinkClassName='pageNum'
                    nextLinkClassName='pageNum'
                    activeLinkClassName='active'
                />
            </div>
        </>
    );
}

export default ArticlesList