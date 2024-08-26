import React from 'react'
import CartWrapper from '../../components/CartWrapper'

export default function index ({selectedProductId,  setSelectedProductId, renderCards,}) {
  return (
    <CartWrapper firstClick={() => (addToCart(selectedProductId))} firstText={"Add"} renderFemale={renderCards(el => el.isFavorite === true && el.sex === "female", "Add to Cart")} renderMale={renderCards(el => el.isFavorite === true && el.sex === "male", "Add to Cart")} selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId}></CartWrapper>
  )
}
