import React from 'react'
import styles from './Card.module.scss'
import StarIcon from '../../svg/StarIcon'
import Button from '../Button/Button';
import PropTypes from 'prop-types';

export default function index({img,name, price, setIsShowSecond, setSelectedProduct, id, toogleIsFavorite = () => {}, array = [],}) {

  const clickFunc = () => {
    setIsShowSecond(true);
    setSelectedProduct(id);
  }

  return (
    <div className={styles.wrapper}>
        <div className={`${styles.star} ${array.filter(el => el.id === id).map(el => el.isFavorite ? styles.activ : "")}`} onClick={() => {toogleIsFavorite(id)}}>
          <StarIcon/>
        </div>
        <img className={styles.img} src={img} alt="oops" />
        <div className={styles.nameP}>
        <p className={styles.name}>{name}</p>
        <div className={styles.price}>
            <p className={styles.priceText}>{price}</p>
        </div>
        </div>
        <Button type="button" onClick={() => {clickFunc()}}>Add Card</Button>
    </div>
  )
}

index.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setIsShowSecond: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
  id: PropTypes.number,
  toogleIsFavorite: PropTypes.func,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isFavorite: PropTypes.bool.isRequired
    })
  )
};