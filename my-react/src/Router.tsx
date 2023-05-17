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
// BrowserRouter에 basename 으로 process.env.PUBLIC_URL을 넣어버리면 카카오 로그인 시에 인증 페이지로 넘어갈 수 없음

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/:id`} element={<Detail />} />
        <Route path={`${process.env.PUBLIC_URL}/cart`} element={<Cart />} />
        <Route path={`${process.env.PUBLIC_URL}/signin`} element={<Signin />} />
        <Route path={`${process.env.PUBLIC_URL}/signup`} element={<Signup />} />
        <Route path={'/auth/kakao/callback'} element={<KakaoCallBack />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
