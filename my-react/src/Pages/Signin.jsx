import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SigninContainer = styled.div`
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: large;

  button,
  input {
    height: 40px;
    width: 300px;
  }

  input {
    border-radius: 5px;
    background-color: #fafafa;
    border: 1px solid gainsboro;
    padding-left: 10px;
  }

  button {
    width: 100%;
    border-radius: 10px;
    border: none;
    background-color: #e4742a;
    margin-bottom: 10px;
  }
`;

const SignupLinkBox = styled.div`
  padding: 10px 0px;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
`;

function Signin() {
  return (
    <SigninContainer>
      <LoginForm>
        <input type='text' placeholder='아이디' />
        <input type='password' placeholder='비밀번호' />
        <SignupLinkBox>
          <Link to={'/signup'}>회원가입</Link>
        </SignupLinkBox>
        <button>로그인</button>
        <button>카카오 간편 로그인</button>
      </LoginForm>
    </SigninContainer>
  );
}

export default Signin;
