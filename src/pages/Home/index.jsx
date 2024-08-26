import React from 'react'
import CartWrapper from '../../components/CartWrapper';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/productSlice';
import { setIsShow } from '../../redux/slices/modalSlices';

export default function Home({selectedProductId, setSelectedProductId, renderCards,}) {
  
    const dispatch = useDispatch();
    const handle = () => {
      dispatch(addToCart (selectedProductId))
      dispatch(setIsShow(false))
    }
  
  return (
    <CartWrapper firstClick={(handle)} firstText={"Add"} renderFemale={renderCards(el => el.sex === "female", "Add to Cart")} renderMale={renderCards(el => el.sex === "male", "Add to Cart")}  selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId}></CartWrapper>
  )
}