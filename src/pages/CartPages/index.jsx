import React from 'react'
import CartWrapper from '../../components/CartWrapper'

export default function index({addToCart, toogleIsFavorite, array, isShowSecond, selectedProductId, setIsShowSecond, setSelectedProductId, renderCards,}) {
  return (
    <CartWrapper renderFemale={renderCards(el => el.quantity > 0 && el.sex === "female")} renderMale={renderCards(el => el.quantity > 0 && el.sex === "male")} addToCart={addToCart} toogleIsFavorite={toogleIsFavorite} array={array} isShowSecond={isShowSecond} selectedProductId={selectedProductId} setIsShowSecond={setIsShowSecond} setSelectedProductId={setSelectedProductId}></CartWrapper>
  )
}
