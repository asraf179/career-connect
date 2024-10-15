import './Pagination.css'
import PropTypes from "prop-types";
const Pagination = ({ onPageChange, skills, pageSize, currentPage }) => {
  const totalPages = Math.ceil(skills.length / pageSize);
  const returnPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) =>(
        <li
        className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
                <a href="#" onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
        </li>
      )
    );
  };
  return <ul className="pagination my-8 flex-wrap gap-4  mt-6">
        <li>
                <button onClick={()=>onPageChange(currentPage-1)} disabled= {currentPage===1}>Previous</button>
        </li>
        <div className='flex gap-4'>{returnPaginationLinks()}</div>
        <li>
                <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
        </li>
  </ul>;
};
Pagination.propTypes = {
  skills: PropTypes.array,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};
export default Pagination;
