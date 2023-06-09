import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addProuct } from 'Slices/productsInCartSlice';
import { AppDispatch, RootState } from 'src/store';
import { IState } from 'Slices/productsInCartSlice';

const NewArrivalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

const ProductImg = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
  object-position: top;
  margin-bottom: 30px;
  &:hover {
    border-radius: 50%;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  }
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const AddCartBtn = styled.button`
  height: auto;
  width: fit-content;
  border: none;
  background-color: white;
  font-size: medium;
  &:hover {
    cursor: pointer;
  }
`;

const ProductInfo = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

interface NewArrivalsProps {
  productInCart: IState;
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  addCartAtHome: () => void;
}

interface NewArrivalsownProps {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
}

function NewArrivals({
  productInCart,
  id,
  imageUrl,
  price,
  title,
  addCartAtHome,
}: NewArrivalsProps) {
  const onClickAddCartBtn = () => {
    if (productInCart[id]) {
      alert('이미 장바구니에 담긴 상품입니다.');
    } else {
      addCartAtHome();
      alert('장바구니에 품목이 담겼습니다.');
    }
  };
  return (
    <NewArrivalsContainer>
      <Link
        to={`${process.env.PUBLIC_URL}/${id}`}
        state={{ id, imageUrl, price, title }}
      >
        <ProductImg src={imageUrl} alt='제목없음' />
      </Link>
      <ProductInfo>
        <div>{title}</div>
        <div>{price.toLocaleString()}원</div>
        <AddCartBtn onClick={onClickAddCartBtn}>add cart</AddCartBtn>
      </ProductInfo>
    </NewArrivalsContainer>
  );
}

function mapStateToProps(state: RootState) {
  return { productInCart: state.cartReducer };
}

function mapDispatchToProps(
  dispatch: AppDispatch,
  ownProps: NewArrivalsownProps
) {
  return {
    addCartAtHome: () =>
      dispatch(
        addProuct({
          id: ownProps.id,
          imageUrl: ownProps.imageUrl,
          price: ownProps.price,
          title: ownProps.title,
          count: 1,
        })
      ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewArrivals);
