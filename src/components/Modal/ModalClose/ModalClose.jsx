import React from 'react'
import styles from './ModalClose.module.scss'
import PropTypes from 'prop-types';

export default function ModalClose({setIsShow, setIsShowSecond ,componentName}) {
  return (
    <div className={styles.close} onClick={() => {
      if (componentName === 'ModalText') {
        setIsShowSecond(false);
      } else if(componentName === 'ModalImage') {
        setIsShow(false);
      }
    }}>
    </div>
  )
}

ModalClose.propTypes = {
  setIsShow: PropTypes.func.isRequired,
  setIsShowSecond: PropTypes.func.isRequired,
  componentName: PropTypes.oneOf(['ModalText', 'ModalImage']).isRequired
};