import React from 'react'
import CartWrapper from '../../components/CartWrapper';

export default function Home({addToCart, toogleIsFavorite, array, isShowSecond, selectedProductId, setIsShowSecond, setSelectedProductId, renderCards,}) {
  return (
    <CartWrapper renderFemale={renderCards(el => el.sex === "female")} renderMale={renderCards(el => el.sex === "male")} addToCart={addToCart} toogleIsFavorite={toogleIsFavorite} array={array} isShowSecond={isShowSecond} selectedProductId={selectedProductId} setIsShowSecond={setIsShowSecond} setSelectedProductId={setSelectedProductId}></CartWrapper>
  )
}