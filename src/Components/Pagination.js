import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination  pagination-xs flex-xs-wrap">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              id="pagination"
              onClick={() => paginate(number)}
              className="page-link"
            >
              <u>{number}</u>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
