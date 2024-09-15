import CartWrapper from '../../components/CartWrapper'
import { deleteCart } from '../../redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setIsShow } from '../../redux/slices/modalSlices';
import CheckOut from '../../components/CheckOut';

export default function index({ renderCards }) {
  const idProduct = useSelector(state => state.products.selectedProductId);
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(setIsShow(false));
    dispatch(deleteCart(idProduct));
  }
  return (
    // <CartWrapper firstClick={() => (handle())} firstText={"Delete"} renderFemale={renderCards(el => el.quantity > 0 && el.sex === "female", "Delete")} renderMale={renderCards(el => el.quantity > 0 && el.sex === "male", "Delete")} ></CartWrapper>
    <CheckOut />
  )
}
