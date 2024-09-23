import React from 'react'
import styles from './ModalClose.module.scss'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShow } from '../../../redux/slices/modalSlices';

export default function ModalClose() {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.showModal.isShow);
  return (
    <div data-testid='close' className={styles.close} onClick={() => {
        dispatch(setIsShow(false));
    }}>
    </div>
  )
}

ModalClose.propTypes = {
  setIsShow: PropTypes.func,
  setIsShowSecond: PropTypes.func,
  componentName: PropTypes.oneOf(['ModalText', 'ModalImage']),
};