import React from 'react'
import CartWrapper from '../../components/CartWrapper'
import { useSelector } from 'react-redux';

export default function index ({renderCards,}) {
  const idProduct = useSelector(state => state.products.selectedProductId);
  return (
    <CartWrapper firstClick={() => (addToCart(idProduct))} firstText={"Add"} renderFemale={renderCards(el => el.isFavorite === true && el.sex === "female", "Add to Cart")} renderMale={renderCards(el => el.isFavorite === true && el.sex === "male", "Add to Cart")}></CartWrapper>
  )
}
