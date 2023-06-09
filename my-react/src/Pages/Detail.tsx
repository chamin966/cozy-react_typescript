import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { IAddPayload, IState, addProuct } from 'Slices/productsInCartSlice';
import { AppDispatch, RootState } from 'src/store';

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 20px;
`;

const DetailBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 100px 0px;
  gap: 30px;
  width: 1000px;
`;

const ProductImage = styled.img`
  max-height: auto;
  max-width: 100%;
  right: 0px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInfoBox = styled.div`
  h1 {
    margin: 15px 0px;
  }
  div {
    margin-bottom: 30px;
  }

  border-bottom: 1px solid gainsboro;
`;

const EaInfoBox = styled.div`
  display: flex;
  gap: 10px;
  height: 1.2rem;
  input {
    width: 35px;
  }
`;

const PayInfoBox = styled.div`
  margin-top: 30px;
`;

const PayInfoBoxPriceAndTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PayButtonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
  button {
    height: 40px;
    background-color: #e57428;
    color: white;
    border: none;
    border-radius: 12px;
  }
  button:hover {
    cursor: pointer;
  }
`;

interface DetailProps {
  productInCart: IState;
  addCartAtDetail: (productInfoObj: IAddPayload) => void;
}

interface RouteState {
  state: {
    id: string;
    imageUrl: string;
    price: number;
    title: string;
  };
}

function Detail({ productInCart, addCartAtDetail }: DetailProps) {
  const location = useLocation() as RouteState;
  const productInfo = location.state;
  const [productCount, setProductCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productInfo.price);

  const onClickAddCartBtn = () => {
    if (productInCart[productInfo.id]) {
      alert(
        '이미 장바구니에 담긴 상품입니다.\n수량 변경은 장바구니 페이지에서 가능합니다.'
      );
    } else {
      addCartAtDetail({
        id: productInfo.id,
        imageUrl: productInfo.imageUrl,
        price: totalPrice / productCount,
        title: productInfo.title,
        count: productCount,
      });
      alert('장바구니에 품목이 담겼습니다.');
    }
  };

  const onChangeProductCount = (e: ChangeEvent<HTMLInputElement>) => {
    setProductCount(parseInt(e.target.value));
    setTotalPrice(productInfo.price * parseInt(e.target.value));
  };

  return (
    <DetailContainer>
      <DetailBox>
        <ProductImage src={productInfo.imageUrl} alt='제목없음' />
        <InfoBox>
          <TextInfoBox>
            <h1>{productInfo.title}</h1>
            <div>{productInfo.price.toLocaleString()}원</div>
            <div>{productInfo.title}</div>
            <EaInfoBox>
              <div>수량</div>
              <input
                type='number'
                value={productCount}
                min={1}
                max={99}
                onChange={onChangeProductCount}
              />
            </EaInfoBox>
          </TextInfoBox>
          <PayInfoBox>
            <PayInfoBoxPriceAndTotal>
              <div>Total Price</div>
              <div>{totalPrice.toLocaleString()} 원</div>
            </PayInfoBoxPriceAndTotal>
            <PayInfoBoxPriceAndTotal>
              <div>Total Item</div>
              <div>{productCount} ea</div>
            </PayInfoBoxPriceAndTotal>
          </PayInfoBox>
          <PayButtonBox>
            <button onClick={onClickAddCartBtn}>ADD CART</button>
            <button>ORDER</button>
          </PayButtonBox>
        </InfoBox>
      </DetailBox>
    </DetailContainer>
  );
}

function mapStateToProps(state: RootState) {
  return { productInCart: state.cartReducer };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    addCartAtDetail: (productInfoObj: IAddPayload) =>
      dispatch(addProuct(productInfoObj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
