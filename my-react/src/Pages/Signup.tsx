import React, { useState } from 'react';
import styled from 'styled-components';

const SignupContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  color: white;

  &:disabled {
    background-color: #d2d0cf;
  }
`;

const ConfirmMessageDiv = styled.div<{
  isCorrect: boolean;
}>`
  margin-top: 10px;
  ${(props) => {
    if (props.isCorrect) {
      return `
      color: #4a4a4a;
      `;
    } else {
      return `
        color: #ff2e2e;
      `;
    }
  }}
`;

function Signup() {
  const [id, setId] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const [idMessage, setIdMessage] = useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>('');

  const [isId, setIsId] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputId = e.target.value;
    const idRegex = /^(?=.*[A-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    setId(inputId);
    if (idRegex.test(inputId)) {
      setIdMessage('올바른 아이디 형식입니다 :)');
      setIsId(true);
    } else {
      setIdMessage('영문 , 숫자 조합으로 6~12자를 입력해주세요');
      setIsId(false);
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    const emailRex =
      /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(inputEmail);
    if (emailRex.test(inputEmail)) {
      setEmailMessage('올바른 이메일 형식입니다 :)');
      setIsEmail(true);
    } else {
      setEmailMessage('유효한 이메일 주소를 작성해주세요');
      setIsEmail(false);
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    const passwordRex = /^(?=.*[A-z])(?=.*\d)[A-z\d]{8,}/;
    setPassword(inputPassword);
    if (passwordRex.test(inputPassword)) {
      setPasswordMessage('사용 가능한 비밀번호입니다 :)');
      setIsPassword(true);
    } else {
      setPasswordMessage('영문, 숫자 조합 8자 이상을 입력해주세요');
      setIsPassword(false);
    }
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPasswordConfirm = e.target.value;
    setPasswordConfirm(inputPasswordConfirm);
    if (inputPasswordConfirm === password) {
      setPasswordConfirmMessage('비밀번호가 일치합니다 :)');
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage('비밀번호가 일치하지 않아요');
      setIsPasswordConfirm(false);
    }
  };

  const onSumitSignup = () => {
    window.alert('회원가입이 완료되었습니다!');
  };

  return (
    <SignupContainer onSubmit={onSumitSignup}>
      <SignupFont>회원가입</SignupFont>
      <div>
        <div>아이디</div>
        <input
          type='text'
          placeholder='영문, 숫자 조합으로 6~12자를 입력해주세요'
          onChange={onChangeId}
          value={id}
        />
        {id.length > 0 ? (
          <ConfirmMessageDiv isCorrect={isId}>{idMessage}</ConfirmMessageDiv>
        ) : (
          <></>
        )}
      </div>
      <div>
        <div>Email</div>
        <input
          type='text'
          placeholder='이메일을 입력해주세요'
          onChange={onChangeEmail}
          value={email}
        />
        {email.length > 0 ? (
          <ConfirmMessageDiv isCorrect={isEmail}>
            {emailMessage}
          </ConfirmMessageDiv>
        ) : (
          <></>
        )}
      </div>
      <div>
        <div>비밀번호</div>
        <input
          type='password'
          placeholder='최소 8자 이상의 비밀번호를 입력해주세요'
          onChange={onChangePassword}
          value={password}
        />
        {password.length > 0 ? (
          <ConfirmMessageDiv isCorrect={isPassword}>
            {passwordMessage}
          </ConfirmMessageDiv>
        ) : (
          <></>
        )}
      </div>
      <div>
        <div>비밀번호 확인</div>
        <input
          type='password'
          placeholder='비밀번호를 한 번 더 입력해주세요'
          onChange={onChangePasswordConfirm}
          value={passwordConfirm}
        />
        {passwordConfirm.length > 0 ? (
          <ConfirmMessageDiv isCorrect={isPasswordConfirm}>
            {passwordConfirmMessage}
          </ConfirmMessageDiv>
        ) : (
          <></>
        )}
      </div>
      <SignupSubmitBtn
        disabled={!(isId && isEmail && isPassword && isPasswordConfirm)}
      >
        회원가입
      </SignupSubmitBtn>
    </SignupContainer>
  );
}

export default Signup;
