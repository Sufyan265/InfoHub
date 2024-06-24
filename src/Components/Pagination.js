import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        const { totalPages, currentPage, handlePageChange, handleNextPage, handlePrevPage } = this.props;

        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
        const displayedPages = pageNumbers.slice(Math.max(0, currentPage - 3), currentPage + 2);
        if (displayedPages[0] > 1) {
            displayedPages.unshift(1, '...');
        }
        if (displayedPages[displayedPages.length - 1] < totalPages) {
            displayedPages.push('...', totalPages);
        }

        return (
            <>
                <div className="paginationSection">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage > 1 ? "" : "disabled"}`} onClick={handlePrevPage}><p className="page-link" href='#'>Previous</p></li>

                            {displayedPages.map((pageNumber, index) => (
                                <li key={index} onClick={() => typeof pageNumber === 'number' ? handlePageChange(pageNumber) : null} className={`"page-item" ${pageNumber === currentPage ? "active" : ""} ${typeof pageNumber !== 'number' ? "disabled" : ""}`}><p className="page-link" href='#'>{pageNumber}</p></li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} onClick={handleNextPage}><p className="page-link" href='#'>Next</p></li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    }

}

export default Pagination;
