import React from 'react'
import Button from '../../Button/Button'
import styles from './ModalFooter.module.scss'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function ModalFooter({firstText, secondaryText, firstClick, secondaryClick, componentName}) {
  const dispatch = useDispatch();
  return (
    <div className={styles.footer__btn}>
        <Button onClick={firstClick}>{firstText}</Button>
        {componentName === 'ModalImage' ? (
        <Button onClick={secondaryClick}>{secondaryText}</Button>
      ) : null}
    </div>
  )
}

ModalFooter.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  firstClick: PropTypes.func.isRequired,
  secondaryClick: PropTypes.func,
  componentName: PropTypes.oneOf(['ModalText', 'ModalImage']).isRequired
};