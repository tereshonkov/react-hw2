import React from 'react'
import CartWrapper from '../../components/CartWrapper'

export default function index({deleteCart, addToCart, toogleIsFavorite, array, isShowSecond, selectedProductId, setIsShowSecond, setSelectedProductId, renderCards,}) {
  return (
    <CartWrapper firstClick={() => (deleteCart(selectedProductId))} firstText={"Delete"} renderFemale={renderCards(el => el.quantity > 0 && el.sex === "female", "Delete")} renderMale={renderCards(el => el.quantity > 0 && el.sex === "male", "Delete")} addToCart={addToCart} toogleIsFavorite={toogleIsFavorite} array={array} isShowSecond={isShowSecond} selectedProductId={selectedProductId} setIsShowSecond={setIsShowSecond} setSelectedProductId={setSelectedProductId}></CartWrapper>
  )
}
