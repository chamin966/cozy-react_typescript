import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeProduct } from '../products-in-cart-slice';
import ProductInCart from '../Components/ProductInCart';
import { addOrder, removeOrder } from '../order-slice';

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 45vh;
  padding: 150px 20px;
  font-size: 0.8rem;
`;

const CartContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 1000px;
  h1 {
    font-family: 'Bodoni Moda', serif;
    color: #e4742a;
  }
`;

const ProductTextTable = styled.table`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid black;
  border-collapse: collapse;

  th,
  tr {
    border-bottom: 1px solid black;
    padding: 10px;
  }
`;

const ProductTextLower = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  width: 100%;
  align-items: center;
  text-align: start;
  gap: 20px;
  border: none;
  padding-top: 10px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0px;
    margin-bottom: 0px;
  }
`;

const ChooseBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const PriceAndEaBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    gap: 15px;
    padding: 20px 0px;
    border-bottom: none;
  }
`;

const OderButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CozyOrderBtn = styled.button`
  height: 40px;
  border: 1px solid #e57428;
  background-color: white;
  color: #e57428;
  border-radius: 12px;
  padding: 0px 15px;
  box-sizing: content-box;
  font-size: 1rem;
  transition: all ease 0.3s;

  &:hover {
    background-color: #e57428;
    color: white;
    border-radius: 35px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CozyCancleBtn = styled(CozyOrderBtn)`
  background-color: #194b44;
  border: none;
  color: white;

  &:hover {
    background-color: #194b44;
    color: white;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

function Cart({ products, checkedToOrder, removeP, removeO, addO }) {
  const onClickChecksAll = (e) => {
    if (e.target.checked) {
      Object.keys(products).forEach((v) => {
        let tempObj = {};
        Object.assign(tempObj, products[v]);
        tempObj['id'] = v;
        addO(tempObj);
      });
    } else {
      Object.keys(products).forEach((v) => {
        removeO(v);
      });
    }
  };

  const onClickCancleProducts = (e) => {
    if (window.confirm('선택된 상품을 삭제하시겠습니까?')) {
      Object.keys(checkedToOrder).forEach((v) => {
        removeO(v);
        removeP(v);
      });
    }
  };

  const onClickOrderProducts = (e) => {
    if (window.confirm('선택된 상품을 주문하시겠습니까?')) {
      Object.keys(checkedToOrder).forEach((v) => {
        removeO(v);
        removeP(v);
      });
      window.alert('주문이 완료되었습니다.');
    }
  };

  return (
    <CartContainer>
      <CartContentBox>
        <h1>Cart</h1>
        <ProductTextTable>
          <tbody>
            <tr>
              <th>
                <input
                  type='checkbox'
                  name='checkboxForOrder'
                  checked={
                    Object.keys(checkedToOrder).length === Object.keys(products).length && Object.keys(products).length !== 0
                  }
                  onChange={onClickChecksAll}
                />
              </th>
              <th>
                전체선택 {Object.keys(checkedToOrder).length}/{Object.keys(products).length}
              </th>
              <th>상품정보</th>
              <th>수량</th>
              <th>가격</th>
            </tr>
            {Object.keys(products).map((v, i) => (
              <ProductInCart key={i} id={v} />
            ))}
          </tbody>
        </ProductTextTable>
        <ProductTextLower>
          <ChooseBox>
            <div>
              전체선택 {Object.keys(checkedToOrder).length}/{Object.keys(products).length}
            </div>
            <CozyCancleBtn onClick={onClickCancleProducts}>선택 취소</CozyCancleBtn>
          </ChooseBox>
          <PriceAndEaBox>
            <div>Total Price</div>
            <div>Total ({Object.keys(checkedToOrder).length} item)</div>
            <div>
              {Object.keys(checkedToOrder)
                .reduce((acc, cur) => acc + checkedToOrder[cur].count * checkedToOrder[cur].price, 0)
                .toLocaleString()}{' '}
              원
            </div>
          </PriceAndEaBox>
        </ProductTextLower>
        <OderButtonBox>
          <CozyOrderBtn onClick={onClickOrderProducts}>ORDER</CozyOrderBtn>
        </OderButtonBox>
      </CartContentBox>
    </CartContainer>
  );
}

function mapStateToProps(state, ownProps) {
  return { products: state.cartReducer, checkedToOrder: state.orderReducer };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    removeP: (id) => dispatch(removeProduct(id)),
    removeO: (id) => dispatch(removeOrder(id)),
    addO: (productsObj) => dispatch(addOrder(productsObj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
