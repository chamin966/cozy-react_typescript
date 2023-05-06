import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  IAddPayload,
  IState,
  addProuct,
  removeProduct,
} from 'Slices/productsInCartSlice';
import { addOrder, removeOrder } from 'Slices/orderSlice';
import { AppDispatch, RootState } from 'src/store';

const ProductInCartContainer = styled.tr`
  height: 100px;
`;
const ProductImage = styled.img`
  height: 55px;
  width: 55px;
`;

const ProductInfoTd = styled.td`
  text-align: start;
  #product-info__name {
    font-weight: 600;
    font-size: 1.1rem;
    word-break: keep-all;
    margin-bottom: 5px;
  }
`;

const ProductCountTd = styled.td`
  label {
    margin-right: 5px;
  }
  input {
    width: 30px;
    padding-left: 5px;
  }
`;

const RemoveBtn = styled.button`
  background-color: white;
  border: none;
`;

interface ProductInCartProps {
  products: IState;
  checkedToOrder: IState;
  id: string;
  addP: (productObj: IAddPayload) => void;
  removeP: (id: string) => void;
  addO: (productObj: IAddPayload) => void;
  removeO: (id: string) => void;
}
function ProductInCart({
  products,
  checkedToOrder,
  id,
  addP,
  removeP,
  addO,
  removeO,
}: ProductInCartProps) {
  const onClickRemoveProductBtn = () => {
    removeP(id);
    removeO(id);
    window.alert('장바구니에서 해당 품목이 삭제 되었습니다.');
  };

  const onChangeProductCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    window.alert('수량이 변경되었습니다.');
    addP({
      id,
      imageUrl: products[id].imageUrl,
      price: products[id].price,
      title: products[id].title,
      count: Number(e.target.value),
    });
    if (checkedToOrder[id] !== undefined) {
      addO({
        id,
        imageUrl: products[id].imageUrl,
        price: products[id].price,
        title: products[id].title,
        count: Number(e.target.value),
      });
    }
  };

  const onChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      addO({
        id,
        imageUrl: products[id].imageUrl,
        price: products[id].price,
        title: products[id].title,
        count: products[id].count,
      });
    } else {
      removeO(id);
    }
  };

  return (
    <ProductInCartContainer>
      <td>
        <input
          type='checkbox'
          name='checkboxForOrder'
          checked={checkedToOrder[id] !== undefined}
          value={id}
          onChange={onChangeChecked}
        />
      </td>
      <td>
        <ProductImage src={products[id].imageUrl} alt='제목없음' />
      </td>
      <ProductInfoTd>
        <div id='product-info__name'>{products[id].title}</div>
        <div>{products[id].price.toLocaleString()}￦</div>
      </ProductInfoTd>
      <ProductCountTd>
        <label htmlFor='productCount'>수량</label>
        <input
          type='number'
          id='productCount'
          min={1}
          max={99}
          value={products[id].count}
          onChange={onChangeProductCount}
          itemID={id}
        />
      </ProductCountTd>
      <td>{(products[id].count * products[id].price).toLocaleString()}￦</td>
      <td>
        <RemoveBtn onClick={onClickRemoveProductBtn}>
          <span className='material-symbols-outlined'>close</span>
        </RemoveBtn>
      </td>
    </ProductInCartContainer>
  );
}

function mapStateToProps(state: RootState) {
  return { products: state.cartReducer, checkedToOrder: state.orderReducer };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    addP: (productInfoObj: IAddPayload) => dispatch(addProuct(productInfoObj)),
    removeP: (id: string) => dispatch(removeProduct(id)),
    addO: (productInfoObj: IAddPayload) => dispatch(addOrder(productInfoObj)),
    removeO: (id: string) => dispatch(removeOrder(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInCart);
