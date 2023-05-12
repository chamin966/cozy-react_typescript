import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { cozy_imagesInDB } from 'DB/db';
import { AppDispatch, RootState } from 'src/store';
import { IState } from 'Slices/productsInCartSlice';
import { setToken, tokenState } from 'Slices/setTokenSlice';
import axios from 'axios';

const HeaderContainer = styled.div`
  height: 30vh;
  width: 100vw;
  background-color: #faf9f7;
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const HeaderNavigation = styled.nav<{
  position: number;
  isOpenTogleMenu: boolean;
}>`
  position: fixed;
  width: 100%;
  background-color: #faf9f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  z-index: 1;

  #cozy-text-logo {
    font-family: 'Bodoni Moda', serif;
    font-size: 1.2rem;
    color: #e4742a;
    transition: all linear 0.3s;
    &:hover {
      cursor: pointer;
    }

    ${(props) => {
      if (props.position > 166)
        return `
        opacity: 1;
        visibility: visible;
      `;
      else
        return `
        opacity: 0;
        visibility: hidden;`;
    }};

    @media (max-width: 768px) {
      opacity: 1;
      visibility: visible;
      position: fixed;
    }
  }

  box-shadow: ${(props) => {
    if (props.position > 166) return `rgba(0, 0, 0, 0.1) 0px 4px 4px`;
    else return `none`;
  }};

  @media (max-width: 768px) {
    box-shadow: ${(props) =>
      props.isOpenTogleMenu ? 'none' : 'rgba(0, 0, 0, 0.1) 0px 4px 4px'};
    flex-direction: column;
    border-bottom: ${(props) =>
      props.isOpenTogleMenu ? '1px solid gainsboro' : 'none'};
  }
`;

const LoginAndCartDiv = styled.div<{ isOpenTogleMenu: boolean }>`
  position: absolute;
  right: 80px;
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    right: auto;
    display: ${(props) => (props.isOpenTogleMenu ? 'flex' : 'none')};
    text-align: center;
    flex-direction: column;
    justify-content: center;
    background-color: #faf9f7;
    margin-top: 150px;
    width: 100%;
    height: 99px; //1px는 border-bottom 자리
    gap: 20px;
    box-shadow: ${(props) =>
      props.isOpenTogleMenu ? 'rgba(0, 0, 0, 0.1) 0px 4px 4px' : 'none'};
  }
`;

const CozyLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 55px;
  img:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartCountCircle = styled.div`
  display: inline-block;
  margin-left: 3px;
  color: white;
  text-align: center;
  height: 18px;
  line-height: 18px;
  width: 18px;
  font-size: 0.8rem;
  background-color: #e4742a;
  border-radius: 50%;
`;

const ToggleSpansBtn = styled.div<{ isOpenTogleMenu: boolean }>`
  display: none;
  gap: 2px;
  cursor: pointer;
  span {
    display: block;
    background-color: #2b2b2b;
  }

  ${(props) => {
    if (props.isOpenTogleMenu) {
      return `
  flex-direction: row;
  span {
    height: 20px;
    width: 4px;
  }
    `;
    } else {
      return `
  flex-direction: column;
  span {
    height: 4px;
    width: 20px;
  }
    `;
    }
  }}

  @media (max-width: 768px) {
    position: absolute;
    right: 30px;
    display: flex;
  }
`;

interface HeaderPorps {
  productInCart: IState;
  tokens: tokenState;
  logoutAtHeader: (tokenObj: tokenState) => void;
}

function Header({ productInCart, tokens, logoutAtHeader }: HeaderPorps) {
  const [isLogin, setIslogin] = useState(false);
  const [position, setPosition] = useState(0);
  const [isOpenTogleMenu, setIsOpenTogleMenu] = useState(false);

  const onClickLogOut = () => {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const LOGOUT_REDIRECT_URI = process.env.REACT_APP_REST_LOGOUT_REDIRECT_URL;
    axios
      .get(
        `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        }
      )
      .then(() => {
        window.alert('성공적으로 로그아웃 되었습니다.');
        logoutAtHeader({
          accessToken: '',
          refreshToken: '',
        });
      });
  };

  const onClickToggle = () => {
    setIsOpenTogleMenu(!isOpenTogleMenu);
  };

  const onClickLink = () => {
    setIsOpenTogleMenu(false);
    window.scrollTo(0, 0);
  };

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (tokens.accessToken === '') setIslogin(false);
    else {
      setIslogin(true);
    }
  }, [tokens]);

  return (
    <HeaderContainer>
      <HeaderNavigation position={position} isOpenTogleMenu={isOpenTogleMenu}>
        <Link id='cozy-text-logo' to={'/'} onClick={onClickLink}>
          Cozytable
        </Link>
        <LoginAndCartDiv isOpenTogleMenu={isOpenTogleMenu}>
          {isLogin === false ? (
            <Link to={'/signin'} onClick={onClickLink}>
              Login
            </Link>
          ) : (
            <Link to={'/'} onClick={onClickLogOut}>
              Logout
            </Link>
          )}
          <div>
            <Link to={'/cart'} onClick={onClickLink}>
              Cart
            </Link>
            <CartCountCircle>
              {Object.keys(productInCart).length}
            </CartCountCircle>
          </div>
        </LoginAndCartDiv>
        <ToggleSpansBtn
          onClick={onClickToggle}
          isOpenTogleMenu={isOpenTogleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </ToggleSpansBtn>
      </HeaderNavigation>
      <CozyLogoDiv>
        {/* TODO: 로그인하면 이미지 깨지는 거 해결하기, code 리덕스에 추가하고 새로고침해도 되도록 막기*/}
        <Link to={'/'}>
          <img src={cozy_imagesInDB[0].imgUrl} alt='로고 이미지' />
        </Link>
      </CozyLogoDiv>
    </HeaderContainer>
  );
}

function mapStateToProps(state: RootState) {
  return { productInCart: state.cartReducer, tokens: state.tokenReducer };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    logoutAtHeader: (tokenObj: tokenState) => dispatch(setToken(tokenObj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
