import React from 'react'
import styles from './Button.module.scss'
import PropTypes from 'prop-types';

export default function Button({type, onClick, children}) {

  return (
   <button type={type} className={styles.btn} onClick={onClick} >{children}</button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
