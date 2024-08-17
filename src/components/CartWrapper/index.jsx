import React from 'react'
import styles from './CartWrapper.module.scss'
import Card from '../Card'
import ModalText from '../../components/ModalText/ModalText';
import PropTypes from 'prop-types';

export default function index({firstClick, firstText, setIsShowSecond, array, setSelectedProductId, selectedProductId, isShowSecond, toogleIsFavorite, addToCart, renderMale, renderFemale}) {
  return (
    <div className={styles.wrapper}>
    <div>
      <div className={styles.header}>
        <div className={styles.rectangle}></div>
        <h2>Categories For Men</h2>
      </div>
      <div className={styles.male}>
            {renderMale}
      </div>
    </div>
    <div>
    <div className={styles.header}>
    <div className={styles.rectangle}></div>
    <h2>Categories For Women</h2>
    </div>
    <div className={styles.female}>
            {renderFemale}
    </div>
    </div>
    <ModalText firstClick={firstClick} firstText={firstText} addToCart={addToCart} array={array} isShowSecond={isShowSecond} setIsShowSecond={setIsShowSecond} selectedProductId={selectedProductId}></ModalText>
    </div>
  )
}

index.propTypes = {
  setIsShowSecond: PropTypes.func,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sex: PropTypes.oneOf(['male', 'female']),
      img: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      sku: PropTypes.string,
    })
  ),
  setSelectedProductId: PropTypes.func,
  selectedProductId: PropTypes.string,
  isShowSecond: PropTypes.bool,
  toogleIsFavorite: PropTypes.func,
  addToCart: PropTypes.func,
};