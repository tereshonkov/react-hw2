import React from 'react'
import styles from './ModalWrapper.module.scss'
import PropTypes from 'prop-types';

export default function ModalWrapper({children}) {
  return (
    <div className={styles.wrapper} onClick={(e) => { e.stopPropagation(); }}> {children} </div>
  )
}

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired
};