import React from 'react'
import Button from '../../Button/Button'
import styles from './ModalFooter.module.scss'
import PropTypes from 'prop-types';

export default function ModalFooter({firstText, secondaryText, firstClick, secondaryClick, componentName}) {
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