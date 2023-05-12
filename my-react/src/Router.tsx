import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Detail from './Pages/Detail';
import ScrollToTop from './Components/ScrollToTop';
import Cart from './Pages/Cart';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import KakaoCallBack from 'Pages/KakaoCallBack';

//react router v6 doesn't support exact anymore. This is because all paths match exactly by default.
// TODO: 이제 redux-persist 써서 새로고침 해도 데이터 안날라가게 하면 끝남

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/auth/kakao/callback' element={<KakaoCallBack />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
