import React from 'react';
import styles from './Headers.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function index({array=[]}) {
  const favorite = array.filter(el => el.isFavorite).length;
  const quantity = array.filter(el => el.quantity > 0).length;
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