import React, {useState } from 'react';
import Listing from "../components/Listing";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Search from "../components/Search";
import "../styles/ModelPage.css";

const MAX_PER_PAGE = 12;

const ModelPage = (props) => {
  const {
    model,
    instances,
    pagesAtTime,
    filters,
    isLoading
  } = props;
  const [curPage, setCurPage] = useState(1);

  let pages = [];
  for (let i = 0; i < instances.length; i += MAX_PER_PAGE) {
    pages.push(instances.slice(i, i + MAX_PER_PAGE));
  }

  const paginate = (pageNumber) => setCurPage(pageNumber);
  const totalPages = Math.ceil(instances.length / MAX_PER_PAGE);

  return(
    <div>
      <Search type={model} filters={filters} paginate={paginate}/>
      {instances.length !== 0 &&
        <div className="model-container">
          <h1 className="model-header">{model + "s"}</h1>
          <div className="listing_container">
            {pages[curPage - 1].map((instance, index) => {
              return <Listing key={index} type={model} instance={instance}/>
            })}
          </div>
          <Pagination postsPerPage={MAX_PER_PAGE} totalPosts={instances.length} paginate={paginate} curPage={curPage} pagesAtTime={(totalPages >= pagesAtTime ? pagesAtTime : totalPages)}/>
          <p align="center"> Page {curPage} / {totalPages}</p>
        </div>
      }
      {isLoading && <Loader />}
      {!isLoading && instances.length === 0 &&
        <div className="error" align="center">
          <h1>No results found</h1>
        </div>
      }
    </div>
  );
}

export default ModelPage;