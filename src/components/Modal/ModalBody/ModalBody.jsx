import React from 'react'
import styles from './ModalBody.module.scss'
import PropTypes from 'prop-types';

export default function ModalBody ({children}) {
  return (
    <div className={styles.body}>
        {children}
    </div>
  )
}

ModalBody.propTypes = {
  children: PropTypes.node.isRequired
};