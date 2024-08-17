import { useEffect, useState } from 'react';
import './App.css';
import Headers from './components/Headers';
import HeadersLogo from './components/HeadersLogo';
import Footer from './components/Footer';
import AppRouttes from './AppRouttes';

function App() {
  const [isShowSecond, setIsShowSecond] = useState(false);
  const [array, setArray] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
      const products = localStorage.getItem(`products`);
      
      const fetchProducts = async () => {
      if(products) {
        setArray(JSON.parse(products));
      } else {
          try{
            const data = await fetch('/data.json').then(res => res.json());
            setArray(data);
          }catch(err){
            console.log(err);
          }
        }
      }
    fetchProducts();
  }, [])

  const toogleIsFavorite = (id) => {
    setArray(prev => {
      const newArr = structuredClone(prev);
      const index = newArr.findIndex(el => el.id === id);
      newArr[index].isFavorite = !newArr[index].isFavorite;
      localStorage.setItem(`products`, JSON.stringify(newArr));
      
      return newArr;
    })
  }

  const addToCart = (id) => {
    setArray(prev => {
      const carts = structuredClone(prev);
      const elemCart = carts.find(el => el.id === id);
      elemCart.quantity += 1;
      localStorage.setItem(`products`, JSON.stringify(carts));
      setIsShowSecond(false);

      return carts;
    })
  }

    const deleteCart = (id) => {
      setArray(prev => {
        const carts = structuredClone(prev);
        const elemCart = carts.find(el => el.id === id);
        elemCart.quantity = 0;
        localStorage.setItem(`products`, JSON.stringify(carts));
        setIsShowSecond(false);
  
        return carts;
      })
  }
  
  return (
  <div className="container">
    <Headers array={array}></Headers>
    <HeadersLogo></HeadersLogo>
    <AppRouttes deleteCart={deleteCart} addToCart={addToCart} toogleIsFavorite={toogleIsFavorite} array={array} isShowSecond={isShowSecond} selectedProductId={selectedProductId} setIsShowSecond={setIsShowSecond} setSelectedProductId={setSelectedProductId} />
    <Footer></Footer>
  </div>
  )
}

export default App
