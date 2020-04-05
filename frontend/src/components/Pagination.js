import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate, curPage, pagesAtTime}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (curPage <= Math.ceil(pagesAtTime / 2)) {
    for (let i = 1; i <= pagesAtTime; i++) {
      pageNumbers.push(i);
    }
  }
  else if (curPage <= totalPages - Math.ceil(pagesAtTime / 2)) {
    for (let i = curPage - Math.floor(pagesAtTime / 2); i <= curPage + Math.floor(pagesAtTime / 2); i++) {
      pageNumbers.push(i);
    }
  }
  else {
    for (let i = totalPages - (pagesAtTime - 1); i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  return(
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page_item'>
            <a onClick={() => paginate(number)} href={'#' + number} className='page_link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;