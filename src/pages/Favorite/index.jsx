import React from 'react'
import CartWrapper from '../../components/CartWrapper'

export default function index ({addToCart, toogleIsFavorite, array, isShowSecond, selectedProductId, setIsShowSecond, setSelectedProductId, renderCards,}) {
  return (
    <CartWrapper firstClick={() => (addToCart(selectedProductId))} firstText={"Add"} renderFemale={renderCards(el => el.isFavorite === true && el.sex === "female", "Add to Cart")} renderMale={renderCards(el => el.isFavorite === true && el.sex === "male", "Add to Cart")} addToCart={addToCart} toogleIsFavorite={toogleIsFavorite} array={array} isShowSecond={isShowSecond} selectedProductId={selectedProductId} setIsShowSecond={setIsShowSecond} setSelectedProductId={setSelectedProductId}></CartWrapper>
  )
}
