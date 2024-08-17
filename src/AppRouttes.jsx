import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPages from './pages/CartPages'
import Favorite from './pages/Favorite'
import Home from './pages/Home'
import Card from './components/Card'

export default function AppRouttes({addToCart, toogleIsFavorite, array = [], isShowSecond, selectedProductId, setIsShowSecond, setSelectedProductId}) {

    const renderCards = (filterCondition) => {
        return array
          .filter(filterCondition)
          .map(el => (
            <Card
              key={el.sku}
              array={array}
              toogleIsFavorite={toogleIsFavorite}
              id={el.id}
              setSelectedProduct={setSelectedProductId}
              setIsShowSecond={setIsShowSecond}
              img={el.img}
              name={el.name}
              price={el.price}
            />
          ));
      };

  return (
    <Routes>
        <Route path='/' element={<Home renderCards={renderCards} addToCart={addToCart} toogleIsFavorite={toogleIsFavorite} array={array} isShowSecond={isShowSecond} selectedProductId={selectedProductId} setIsShowSecond={setIsShowSecond} setSelectedProductId={setSelectedProductId}/>} />
        <Route path='/cart' element={<CartPages renderCards={renderCards} addToCart={addToCart} toogleIsFavorite={toogleIsFavorite} array={array} isShowSecond={isShowSecond} selectedProductId={selectedProductId} setIsShowSecond={setIsShowSecond} setSelectedProductId={setSelectedProductId}/>} />
        <Route path='/favorite' element={<Favorite renderCards={renderCards} addToCart={addToCart} toogleIsFavorite={toogleIsFavorite} array={array} isShowSecond={isShowSecond} selectedProductId={selectedProductId} setIsShowSecond={setIsShowSecond} setSelectedProductId={setSelectedProductId}/>} />
    </Routes>
  )
}