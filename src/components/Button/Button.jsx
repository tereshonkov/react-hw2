import React from 'react'
import styles from './Button.module.scss'
import PropTypes from 'prop-types';

export default function Button({type, onClick, children}) {

  return (
   <button type={type} className={styles.btn} onClick={onClick} >{children}</button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node,
};
