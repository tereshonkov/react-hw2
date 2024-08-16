import React from 'react';
import styles from './Headers.module.scss';
import PropTypes from 'prop-types';

export default function index({array=[]}) {
  const favorite = array.filter(el => el.isFavorite).length;
  const quantity = array.filter(el => el.quantity > 0).length;
  return (
    <div className={styles.wrapper}>
        <h2>Homework</h2>
        <div className={styles.right}>
            <div className={styles.favor}>
              <span>{favorite}</span>
            </div>
            <div className={styles.cart}>
              {quantity}
            </div>
        </div>
    </div>
  )
}

Headers.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      isFavorite: PropTypes.bool.isRequired,
      quantity: PropTypes.number.isRequired
    })
  )
};