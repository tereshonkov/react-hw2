import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPages from './pages/CartPages'
import Favorite from './pages/Favorite'
import Home from './pages/Home'
import Card from './components/Card'
import { useSelector } from 'react-redux'

export default function AppRouttes() {

    const array = useSelector(state => state.products.data);
    

    const renderCards = (filterCondition, nameBtn) => {
        return array
          .filter(filterCondition)
          .map(el => (
            <Card
              key={el.sku}
              id={el.id}
              img={el.img}
              name={el.name}
              price={el.price}
              children={nameBtn}
            />
          ));
      };

  return (
    <Routes>
        <Route path='/' element={<Home renderCards={renderCards} />} />
        <Route path='/cart' element={<CartPages renderCards={renderCards} />} />
        <Route path='/favorite' element={<Favorite renderCards={renderCards} />} />
    </Routes>
  )
}