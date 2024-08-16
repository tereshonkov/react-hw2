import React from 'react'
import styles from './ModalHeader.module.scss'
import PropTypes from 'prop-types';

export default function ModalHeader({children}) {
  return (
    <div className={styles.header}>
        {children}
    </div>
  )
}

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired
};