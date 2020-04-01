import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate, curPage}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (curPage <= 3) {
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }
  }
  else if (curPage <= totalPages - 3) {
    for (let i = curPage - 2; i <= curPage + 2; i++) {
      pageNumbers.push(i);
    }
  }
  else {
    for (let i = totalPages - 4; i <= totalPages; i++) {
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