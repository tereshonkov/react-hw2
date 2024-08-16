import React from 'react'
import styles from './CartWrapper.module.scss'
import Card from '../Card'
import ModalText from '../../components/ModalText/ModalText';
import PropTypes from 'prop-types';

export default function index({setIsShowSecond, array, setSelectedProductId, selectedProductId, isShowSecond, toogleIsFavorite, addToCart}) {
  return (
    <div className={styles.wrapper}>
    <div>
      <div className={styles.header}>
        <div className={styles.rectangle}></div>
        <h2>Categories For Men</h2>
      </div>
      <div className={styles.male}>
      {array.filter(el => el.sex === "male").map(el => <Card array={array} toogleIsFavorite={toogleIsFavorite} id={el.id} setSelectedProduct={setSelectedProductId} setIsShowSecond={setIsShowSecond} key={el.sku} img={el.img} name={el.name} price={el.price}/>)}
      </div>
    </div>
    <div>
    <div className={styles.header}>
    <div className={styles.rectangle}></div>
    <h2>Categories For Women</h2>
    </div>
    <div className={styles.female}>
    {array.filter(el => el.sex === "female").map(el => <Card array={array} toogleIsFavorite={toogleIsFavorite} id={el.id} setSelectedProduct={setSelectedProductId} setIsShowSecond={setIsShowSecond} key={el.sku} img={el.img} name={el.name} price={el.price}/>)}
    </div>
    </div>
    <ModalText addToCart={addToCart} array={array} isShowSecond={isShowSecond} setIsShowSecond={setIsShowSecond} selectedProductId={selectedProductId}></ModalText>
    </div>
  )
}

index.propTypes = {
  setIsShowSecond: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sex: PropTypes.oneOf(['male', 'female']).isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      sku: PropTypes.string.isRequired
    })
  ).isRequired,
  setSelectedProductId: PropTypes.func.isRequired,
  selectedProductId: PropTypes.string,
  isShowSecond: PropTypes.bool.isRequired,
  toogleIsFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
};