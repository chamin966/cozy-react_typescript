import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25vh;
  width: 100%;
  background-color: #f3f2ed;
  font-size: small;
  padding-left: 40px;
  gap: 20px;
  div {
    margin-top: 10px;
  }
  div a {
    padding-right: 20px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>상호: 코지 | 대표: 000 | 개인정보관리책임자: 000 | 전화: 미입력 | 이메일: cozy@email.com</p>
      <p>주소: 서울특별시 000구 000000길 5-10 | 사업자등록번호: 125-56-123456 | 통신판매: 제 2222-0000-3333 호</p>
      <div>
        <a href='/'>이용약관 </a>
        <a href='/'>개인정보처리방침</a>
        <a href='/'>사업자정보확인</a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
