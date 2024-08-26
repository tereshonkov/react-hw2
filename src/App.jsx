import { useEffect} from 'react';
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
  
  return (
  <div className="container">
    <Headers></Headers>
    <HeadersLogo></HeadersLogo>
    <AppRouttes />
    <Footer></Footer>
  </div>
  )
}

export default App
