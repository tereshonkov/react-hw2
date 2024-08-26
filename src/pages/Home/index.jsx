import React from 'react'
import CartWrapper from '../../components/CartWrapper';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/productSlice';
import { setIsShow } from '../../redux/slices/modalSlices';
import { useSelector } from 'react-redux';

export default function Home({renderCards,}) {
    const idProduct = useSelector(state => state.products.selectedProductId);
    const dispatch = useDispatch();
    const handle = () => {
      dispatch(addToCart (idProduct))
      dispatch(setIsShow(false))
    }
  
  return (
    <CartWrapper firstClick={(handle)} firstText={"Add"} renderFemale={renderCards(el => el.sex === "female", "Add to Cart")} renderMale={renderCards(el => el.sex === "male", "Add to Cart")} ></CartWrapper>
  )
}