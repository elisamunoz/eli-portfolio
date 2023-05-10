import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Pagination.module.scss';

const PaginationDot = ({
  isActive = false,
  onClick
}) => (
  <div 
    className={classnames(styles.paginationDot, isActive && styles.isActive)} 
    onClick={onClick}
  />
)

const Pagination = ({
  currentPage = 0,
  totalPages = 1,
  onClick
}) => (
  <div 
    className={classnames(styles.pagination)}
  >
    {Array(totalPages)
        .fill("")
        .map((value, i) => (
          <PaginationDot
            key={i}
            isActive={currentPage === i}
            onClick={() => onClick(i)}
          />
        ))}
    
  </div>
);

export default Pagination;