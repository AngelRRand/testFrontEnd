import React, { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import ArticleContext from '../../Context/Article/ArticleContext.jsx';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import '../../Styles/home/PaginationStyles.css';
import Spinner from '../../Component/Spinner.jsx';
function ArticlesList() {
    const { articles, getArticles, getInfoArticle, deletArticle, infoArticle } = useContext(ArticleContext)
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

    const getId = (idArticle) => {
        const info = articles.filter(a => a.id === idArticle)
        getInfoArticle(info)
    }

    return (
        <>
            <div className='containerListArtLast'>
                <div className='textCenterArt toplistArtPrevius'><p>AUTHOR NAME</p></div>
                <div className='toplistArtPrevius'><p>TITLE</p></div>
                <div className='toplistArtPrevius'><p>CONTENT</p></div>
                <div className='toplistArtPrevius'><p>DATE</p></div>
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


            <div className='centerPagination'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={arrowrigth()}
                    previousLabel={arrowleft()}
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