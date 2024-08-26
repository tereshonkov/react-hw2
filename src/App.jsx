import { useEffect, useState } from 'react';
import './App.css';
import Headers from './components/Headers';
import HeadersLogo from './components/HeadersLogo';
import Footer from './components/Footer';
import AppRouttes from './AppRouttes';
import { useDispatch } from 'react-redux';
import {fetchProducts} from './redux/slices/productSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  },[])

  // const [isShowSecond, setIsShowSecond] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  
  return (
  <div className="container">
    <Headers></Headers>
    <HeadersLogo></HeadersLogo>
    <AppRouttes selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} />
    <Footer></Footer>
  </div>
  )
}

export default App
