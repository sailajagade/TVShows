import React from "react";

const Pagination = ({ postsPerPage, randomMeal, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination  pagination-xs flex-xs-wrap" >
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a id="atag" onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
