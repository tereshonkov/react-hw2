import React from 'react'
import CartWrapper from '../../components/CartWrapper';

export default function Home({addToCart, toogleIsFavorite, array, isShowSecond, selectedProductId, setIsShowSecond, setSelectedProductId, renderCards,}) {
  return (
    <CartWrapper firstClick={() => (addToCart(selectedProductId))} firstText={"Add"} renderFemale={renderCards(el => el.sex === "female", "Add to Cart")} renderMale={renderCards(el => el.sex === "male", "Add to Cart")} addToCart={addToCart} toogleIsFavorite={toogleIsFavorite} array={array} isShowSecond={isShowSecond} selectedProductId={selectedProductId} setIsShowSecond={setIsShowSecond} setSelectedProductId={setSelectedProductId}></CartWrapper>
  )
}