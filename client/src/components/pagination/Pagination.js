import React from 'react';

function Pagination(props) {
    //Math.ceil(totalCountries / itemsPerPage)
    const { pageCount, paginate, prevPage, nextPage, currentPage } = props;
    // console.log(pageCount);
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav>
                <ul className="pagination">
                    <li><a className={(currentPage === 1) ? "page-link disabled" : "page-link"} href="!#" onClick={(e) => prevPage(e)}>Prev</a></li>
                    {pageNumbers.map(number => (
                        <li className="page-item" key={number} >
                            <a id={`pageLink${number}`} className={number === (currentPage) ? "page-link active" : "page-link"} href="!#" onClick={(e) => paginate(e, number)}>{number}</a>
                            {/* <a id={`pageLink${number}`} 
                            className="page-link active" href="!#" 
                            onClick={(e) => paginate(e, number)}>{number}</a> */}
                        </li>
                    ))}
                    <li><a className={(pageNumbers.length === currentPage) ? "page-link disabled" : "page-link"} href="!#" onClick={(e) => nextPage(e)}>Next</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;
