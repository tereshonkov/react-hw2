import CartWrapper from '../../components/CartWrapper'
import { deleteCart } from '../../redux/slices/productSlice';
import { useDispatch } from 'react-redux';

export default function index({selectedProductId,  setSelectedProductId, renderCards}) {
  const dispatch = useDispatch();
  return (
    <CartWrapper firstClick={() => (dispatch(deleteCart(selectedProductId)))} firstText={"Delete"} renderFemale={renderCards(el => el.quantity > 0 && el.sex === "female", "Delete")} renderMale={renderCards(el => el.quantity > 0 && el.sex === "male", "Delete")}  selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId}></CartWrapper>
  )
}
