import React from 'react';
import _ from 'lodash';
import { PropTypes } from 'prop-types';

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <div style={{ marginBottom: '50px' }}>
            <ul className="pagination justify-content-center">
                {pages.map(page => (
                    <li
                        className={
                            page === currentPage
                                ? 'page-item active'
                                : 'page-item'
                        }
                        key={page}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
