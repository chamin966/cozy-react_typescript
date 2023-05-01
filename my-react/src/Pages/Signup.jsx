import styled from 'styled-components';

const SignupContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 45vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px 0px;
  text-align: center;

  input {
    margin-top: 10px;
    width: 300px;
    text-align: center;
    height: 2.2rem;
    border-radius: 20px;
    border: 1px solid gainsboro;

    &:hover {
      border: 1px solid #e4742a;
    }

    &:focus {
      outline: none;
      border: 1px solid #e4742a;
    }

    transition: all ease 0.3s;
  }
`;

const SignupFont = styled.div`
  font-size: 2rem;
  color: #e4742a;
  margin: 30px 0px;
`;

const SignupSubmitBtn = styled.button`
  background-color: #e4742a;
  border: none;
  width: 300px;
  border-radius: 20px;
  height: 2.2rem;
  margin: 40px 0px;
`;

function Signup() {
  return (
    <SignupContainer>
      <SignupFont>회원가입</SignupFont>
      <div>
        <div>아이디</div>
        <input type='text' placeholder='영문, 숫자 조합으로 6~12자를 입력해주세요' />
      </div>
      <div>
        <div>Email</div>
        <input type='text' placeholder='이메일을 입력해주세요' />
      </div>
      <div>
        <div>비밀번호</div>
        <input type='password' placeholder='최소 8자 이상의 비밀번호를 입력해주세요' />
      </div>
      <div>
        <div>비밀번호 확인</div>
        <input type='password' placeholder='비밀번호를 한 번 더 입력해주세요' />
      </div>
      <SignupSubmitBtn>회원가입</SignupSubmitBtn>
    </SignupContainer>
  );
}

export default Signup;
