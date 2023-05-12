import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch } from 'src/store';
import { setToken, tokenState } from 'Slices/setTokenSlice';
import { useNavigate } from 'react-router-dom';

interface KakaoCallBackProps {
  setTokensAtKakaoCallBack: (tokenObj: tokenState) => void;
}

function KakaoCallBack({ setTokensAtKakaoCallBack }: KakaoCallBackProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const client_id = `${process.env.REACT_APP_REST_API_KEY}`;
    const REDIRECT_URI = `${process.env.REACT_APP_REST_REDIRECT_URL}`;

    try {
      axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then((res) => {
          const data = res.data;
          setTokensAtKakaoCallBack({
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
          });
          navigate('/');
        });
    } catch (e) {
      console.log('로그인 실패', e);
      throw e;
    }
  });

  return <></>;
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    setTokensAtKakaoCallBack: (tokenObj: tokenState) =>
      dispatch(setToken(tokenObj)),
  };
}

export default connect(null, mapDispatchToProps)(KakaoCallBack);
