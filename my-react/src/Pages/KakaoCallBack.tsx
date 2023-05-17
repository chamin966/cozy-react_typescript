import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch } from 'src/store';
import { setToken, tokenState } from 'Slices/setTokenSlice';
import { useNavigate } from 'react-router-dom';

// 깃 배포시에 페이지 라우팅을 하면 404 에러가 발생하기 때문에 해당 파일은 배포 시에 사용되지 않습니다만
// 깃 배포가 아니라면 해당 파일로 리다이렉팅이 가능하기 때문에 코드를 남겨놓았습니다.

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
          navigate(`${process.env.PUBLIC_URL}/`);
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
