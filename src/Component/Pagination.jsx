import React from 'react'
import ReactPaginate from 'react-paginate';
import './Styles/Pagination.css'
const Pagination = ({arrowrigth, arrowleft, pageCount, handlePageClick}) => {
    return (
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
    )
}

export default Pagination