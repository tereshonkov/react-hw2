import React from 'react'
import styles from './ModalClose.module.scss'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShow } from '../../../redux/slices/modalSlices';

export default function ModalClose({componentName}) {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.showModal.isShow);
  return (
    <div className={styles.close} onClick={() => {
      if (componentName === 'ModalText') {
        dispatch(setIsShow(false));
      } else if(componentName === 'ModalImage') {
        dispatch(setIsShow(fasle));
      }
    }}>
    </div>
  )
}

ModalClose.propTypes = {
  setIsShow: PropTypes.func,
  setIsShowSecond: PropTypes.func,
  componentName: PropTypes.oneOf(['ModalText', 'ModalImage']),
};