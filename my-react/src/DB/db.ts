// 이미지 절대경로 맨 앞에 슬래시 없으면 url의 pathname에 영향을 받아서 오류 발생 가능
// 이렇게 써야함 -> /images/cozy_logo.jpg
// process.env.PUBLIC_URL => package.json의 homepage 값으로 자동 링크 됨

export const cozy_imagesInDB = [
  {
    title: 'cozy_logo',
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_logo.jpg',
  },
  {
    title: 'cozy_main',
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_main.jpg',
    text1: '대충 차렸는데\n브런치 카페 느낌',
    text2: 'SYRACUSE MAPLE TABLEWARE',
  },
];

export const bestSellersInDB = [
  {
    id: '1001',
    title: '카네수즈 레트로 원형 플레이트 세트',
    price: 17200,
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_item1.jpg',
  },
  {
    id: '1002',
    title: '코지테이블 미우캣츠 투명 내열 유리컵',
    price: 8500,
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_item2.jpg',
  },
  {
    id: '1003',
    title: '오로라 홀로그램 내열 글라스 술잔',
    price: 14900,
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_item3.jpg',
  },
];

export const newArrivalsInDB = [
  {
    id: '1004',
    title: '화이트 도자기 화병',
    price: 16900,
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_new1.jpg',
  },
  {
    id: '1005',
    title: '시라쿠스 메이플 2인 홈세트',
    price: 119000,
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_new2.jpg',
  },
  {
    id: '1006',
    title: '모모 접시 그릇 세트',
    price: 33500,
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_new3.jpg',
  },
];

export const brandStoryInDB = [
  {
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_introduction1.jpg',
    title: 'with COZY',
    overview:
      '따뜻한 커피 한 잔으로 시작하는 아침,/여유로운 브런치와 맛있는 저녁 식사,/소중한 사람들과 함께하는 주말의 홈파티',
  },
  {
    imgUrl: process.env.PUBLIC_URL + '/images/cozy_introduction2.jpg',
    title: 'Better COZY',
    overview:
      '합리적인 가격으로/누구나 테이블을 아늑하게 꾸밀 수 있어요./가격 걱정은 코지테이블이 할테니 고객님은 쇼핑만 하세요.',
  },
];
