import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  padding: 50px 0px;

  @media (max-width: 768px) {
    min-height: 70vh;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: large;

  button,
  input {
    height: 40px;
    width: 300px;
  }

  input {
    height: 40px;
    width: 300px;
    border-radius: 5px;
    background-color: #fafafa;
    border: 1px solid gainsboro;
    padding-left: 10px;
  }
`;

const NomalLoginBtn = styled.button`
  font-size: 1rem;
  height: 45px;
  width: 300px;
  border-radius: 12px;
  border: none;
  background-color: #e4742a;
  margin-bottom: 10px;
  color: white;
`;

const KaKaoLoginBtn = styled.button`
  border: none;
  border-radius: 12px;

  img {
    border-radius: 12px;
    height: 45px;
    width: 300px;
  }
`;

const SignupLinkBox = styled.div`
  padding: 10px 0px;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
`;

function Signin() {
  const client_id = `${process.env.REACT_APP_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REST_REDIRECT_URL}`;
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${REDIRECT_URI}`;

  const onClickKakaLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(kakaoURL);
    console.log(window.location);
    window.location.href = kakaoURL;
  };

  const onClickLogin = (e: React.MouseEvent) => {
    window.alert('일치하는 아이디/비밀번호 정보가 없습니다.');
  };
  return (
    <SigninContainer>
      <LoginForm>
        <input type='text' placeholder='아이디' />
        <input type='password' placeholder='비밀번호' />
        <SignupLinkBox>
          <Link to={`${process.env.PUBLIC_URL}/signup`}>회원가입</Link>
        </SignupLinkBox>
        <NomalLoginBtn onClick={onClickLogin}>로그인</NomalLoginBtn>
        <KaKaoLoginBtn onClick={onClickKakaLogin}>
          <img
            src={process.env.PUBLIC_URL + '/images/kakao_login_large_wide.png'}
            alt='카카오 로그인 버튼'
          />
        </KaKaoLoginBtn>
      </LoginForm>
    </SigninContainer>
  );
}

export default Signin;
