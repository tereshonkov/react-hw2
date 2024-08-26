import React from 'react'
import styles from './Card.module.scss'
import StarIcon from '../../svg/StarIcon'
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toogleIsFavorite } from '../../redux/slices/productSlice';
import { setIsShow } from '../../redux/slices/modalSlices';

export default function index({children, img, name, price, setSelectedProduct, id}) {

  const array = useSelector(state => state.products.data);
  const dispatch = useDispatch();
  // const id = array.find(el => el.img === img && el.name === name).id;

  function clickFunc() {
    dispatch(setIsShow(true));
    setSelectedProduct(id);
  }

  return (
    <div className={styles.wrapper}>
        <div className={`${styles.star} ${array.filter(el => el.id === id).map(el => el.isFavorite ? styles.activ : "")}`} onClick={() => {dispatch(toogleIsFavorite(id))}}>
          <StarIcon/>
        </div>
        <img className={styles.img} src={img} alt="oops" />
        <div className={styles.nameP}>
        <p className={styles.name}>{name}</p>
        <div className={styles.price}>
            <p className={styles.priceText}>{price}</p>
        </div>
        </div>
        <Button type="button" onClick={() => {clickFunc()}}>{children}</Button>
    </div>
  )
}

index.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.number,
  toogleIsFavorite: PropTypes.func,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isFavorite: PropTypes.bool,
    })
  )
};