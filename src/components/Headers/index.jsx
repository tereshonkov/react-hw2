import React from 'react';
import styles from './Headers.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function index() {
  const favorite = useSelector(state => state.products.data.filter(product => product.isFavorite).length);
  const quantity = useSelector(state => state.products.data.filter(product => product.quantity).length);
  return (
    <div className={styles.wrapper}>
        <h2>Homework</h2>
        <div className={styles.right}>
        <NavLink className={({isActive}) => isActive ? `${styles.home} ${styles.active}` : styles.home} to={"/"}>
              <span>Home</span>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.favor} ${styles.active}` : styles.favor} to={"/favorite"}>
              <span>{favorite}</span>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.cart} ${styles.active}` : styles.cart} to={"/cart"}>
              {quantity}
            </NavLink>
        </div>
    </div>
  )
}

Headers.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      isFavorite: PropTypes.bool,
      quantity: PropTypes.number,
    })
  )
};