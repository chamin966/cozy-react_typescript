import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { cozy_imagesInDB } from '../DB/db';

const HeaderContainer = styled.div`
  height: 30vh;
  width: 100vw;
  background-color: #faf9f7;
`;

const HeaderNavigation = styled.nav`
  position: fixed;
  width: 100%;
  background-color: #faf9f7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  height: 50px;
  z-index: 1;

  #cozy-logo {
    font-family: 'Bodoni Moda', serif;
    font-size: 1.2rem;
    color: #e4742a;
    transition: all linear 0.3s;
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

    &:hover {
      cursor: pointer;
    }
  }

  box-shadow: ${(props) => {
    if (props.position > 166) return `rgba(0, 0, 0, 0.1) 0px 4px 4px`;
    else return `none`;
  }};
`;

const LoginAndCartDiv = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

const CozyLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 18px;
  padding-top: 55px;

  img:hover {
    opacity: 0.6;
  }
`;

const CartCountCircle = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  right: -22px;
  top: 1px;
  height: 18px;
  width: 18px;
  font-size: 0.8rem;
  line-height: 1.2rem;
  background-color: #e4742a;
  border-radius: 50%;
`;

function Header({ productInCart }) {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  const onScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderNavigation position={position}>
        <div></div>
        <div id='cozy-logo' onClick={onScrollToTop}>
          Cozytable
        </div>
        <LoginAndCartDiv>
          <Link to={'/signin'}>Singin</Link>
          <Link to={'/cart'}>Cart</Link>
          <CartCountCircle>{Object.keys(productInCart).length}</CartCountCircle>
        </LoginAndCartDiv>
      </HeaderNavigation>
      <CozyLogoDiv>
        <Link to={'/'}>
          <img src={cozy_imagesInDB[0].imgUrl} alt='제목없음' />
        </Link>
      </CozyLogoDiv>
    </HeaderContainer>
  );
}

function mapStateToProps(state, ownProps) {
  return { productInCart: state.cartReducer };
}

export default connect(mapStateToProps)(Header);
