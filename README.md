## 소개

해당 프로젝트는 javascript로 만든cozy-react 프로젝트를 typescript로 리팩토링하면서
redux-persist, 카카오 로그인, 반응형 최적화 기능 등을 추가한 프로젝트입니다.

[결과물 확인하기](https://chamin966.github.io/cozy-react_typescript/)

## 최종결과물

### Home
![메인](https://github.com/chamin966/cozy-react_typescript/assets/98478661/85f11d04-b0e1-4824-a635-dab26c0c3070)

### **Product List - New Arrivals**
![신제품](https://github.com/chamin966/cozy-react_typescript/assets/98478661/74aa2345-7c26-4a8e-bc2f-29338addca15)

### **Product List - Best Sellers**
![베스트셀러](https://github.com/chamin966/cozy-react_typescript/assets/98478661/ddbbbbc0-8fe4-4c3d-b63a-fe85209b827a)

### Product Detail
![상세 페이지](https://github.com/chamin966/cozy-react_typescript/assets/98478661/4f3c4164-7250-4dab-9215-4aac14e3a7c5)

### Cart
![장바구니](https://github.com/chamin966/cozy-react_typescript/assets/98478661/444d68df-8de0-4cee-b920-88492947e6b7)

### Signin
![로그인](https://github.com/chamin966/cozy-react_typescript/assets/98478661/cb4f7ee5-05c1-478e-bc33-bf1de2a7187b)

### Signup
![회원가입](https://github.com/chamin966/cozy-react_typescript/assets/98478661/4725dd17-c64d-40e1-82b6-9b2cc24c111b)

## 구현 기능

- pc,  mobile 환경에 대한 반응형 웹에 맞게 적용되어 있습니다.
    - 웹 화면의 경우, 스크롤 시 일정 범위 이상 내려오면 텍스트 로고가 생겨나고
    일정 범위 위로 올라가면 상단 텍스트 로고가 사라지고 이미지 로고만 보이게 됩니다.
    - 가로-세로폭이 좁은 모바일 환경에 경우,
    이미지 로고는 보이지 않으며 처음부터 텍스트 로고가 있는 헤더만 보여지게 됩니다.
    - 헤더에서 Login, Cart 링크는 폭이 좁아지는 모바일 환경에서는
    탭 버튼을 클릭 하면 정보가 표출되는 드롭다운으로 구현하였습니다.
- API에서 데이터를 가지고 오는 방식과 비슷하게 보이기 위해 DB 파일에 오브젝트 형식으로 상품에 대한 정보들을 저장하고, map 함수를 활용해 상품 정보를 가져와서 표시합니다.
- 상품 클릭 시 상품 상세 페이지로 이동하여,
해당 상품의 정보(상품명, 가격, 수량 등)를 가져와 화면에 보여주었습니다.
    - 상세 페이지에서 수량을 변경하면 총 금액과 총 개수가 보여지고,
    변경한 개수 만큼 카트에 담을 수 있습니다.
    - 이미 장바구니에 담긴 제품이라면 수량 변경은 장바구니 페이지에서만 가능합니다.
- 리덕스를 이용해 add cart를 클릭 시 상품을 장바구니에 추가하고,
header에 cart에 담겨있는 상품의 개수를 보여줍니다.
    - redux-persist를 사용하여 해당 장바구니에 담긴 개수 표시는 페이지 새로고침 시에도
    state가 초기화 되지 않도록 처리하였습니다.
- 장바구니 페이지에서 추가된 상품의 수량 및 가격 정보를 확인할 수 있고,
담은 상품을 삭제하거나 수량을 수정할 수 있습니다.
    - 총 개수와 합산 금액은 체크 박스로 체크한
    즉, 구매 예정인 제품들의 총 개수와 합산 금액을 보여줍니다.
    - 전체 체크 기능이 가능하며, 전체 체크 후 하나라도 체크 되지 않은 상품이 있다면
    전체 체크 박스는 체크 표시가 사라집니다.
- 회원가입 폼을 만들어 정보를 입력하면 각각의 형식에 따른 유효성 검사를 하고,
검사 결과를 즉시 입력창 아래에 메시지로 확인할 수 있습니다.
    - 유효성 검사가 모두 통과 되면 회원가입 버튼이 활성화되어
    회색에서  테마 색상에 맞게 바뀌게 되며, 그 후에야 회원가입 버튼을 클릭할 수 있습니다.
    - 회원가입이 완료되면 Home 페이지로 돌아가게 됩니다.
- 로그인 기능에는 Kakao login API를 사용하여 소셜 연동 로그인이 가능합니다.
    - git-page 배포의 특성 상 리액트 라우팅을 지원하지 않기 때문에,
    카카오 리다이렉션 시에 404 에러가 뜨는 오류가 존재합니다.
    해당 문제를 해결하기 위해 일반적인 페이지 라우팅 방식이 아닌,
    리액트 훅과 리덕스를 활용하여 해당 페이지 내에서
    정보를 받고 넘길 수 있도록 구현하였습니다.

## javascript에서 typescript로의 점진적 전환을 선택한 이유

- 처음부터 타입스크립트로 프로젝트를 시작하지 않고 자바스크립트에서 타입스크립트로의 점진적 변환을 활용하는 이유는 크게 두 가지입니다. 첫 번째 이유는 자바스크립트와 타입스크립트 코드의 차이점을 확실히 이해하기 위한 학습의 목적이고, 두 번째 이유는 실무적으로 코드 변환작업 경험이 더 쓸모 있을 것이라 판단했기 때문입니다. 판단 근거는 대부분의 기업들은 이미 자체적인 웹 사이트를 가지고 있으며, 레거시 코드들은 과거의 자바스크립트 환경에서 작성되었을 가능성이 높기에, 자바스크립트에서 타입스크립트로 코드를 점진적으로 변환하는 경험이 도움이 될  것이라 생각했기 때문입니다.

## 주요 사용 기능

### React

- useState: 변수들의 상태를 업데이트합니다.
- useEffect
    - 스크롤이 위치에 따라 fixed 상태의 헤더에 텍스트 로고가 보이거나 보이지 않게 합니다.
    - Access Token의 유무에 따라 로그인 상태를 관리합니다.
    - 모바일 환경에서 드롭다운 버튼의 상태를 관리합니다.
- useNavigate
    - 회원가입, 로그인 등의 상황에서 작업이 끝나면 메인 홈으로 이동하게 합니다.
- react-router-dom
    - 헤더와 푸터를 제외한 페이지의 라우팅을 관리합니다.

### styled-component

- CSS 파일을 따로 만들지 않고, tsx 파일 내에서 props와 함께 CSS를 동시에 컨트롤합니다.

### Media Query

- PC, Tablet, Mobile 환경에서 사용자가 동일한 경험을 할 수 있도록 하기 위하여 사용하였습니다.

### React-Redux / Redux-Toolkit / Redux-persist

- Redux 및 Redux-Toolkit을 사용해 장바구니에 상품을 추가, 삭제하는 기능과 수량을 변경 했을 때 총 합계가 변경되고, 장바구니에 추가된 항목들을 로드해주는 기능을 적용했습니다.
- state의 로드 및 변경 함수는 모두 해당 기능을 카테고리화한 slice 파일과 store에서 관리되며,
필요한 위치에서만 connect 메서드를 활용하여 state를 불러오고 변경할 수 있습니다.
- Redux-persist의 활용으로 새로고침 시에도 데이터는 초기화되지 않습니다.

### React Hook Form

- 각 Input 태그에 id, email, password, passwordConfirm 입력을 필수로 받도록 합니다.
- 정규 표현식을 활용하여 유효성 검사를 진행하고 오류 메시지를
해당 입력창 아래에서 바로 텍스트로 보여줍니다.
- 모든 유효성 검사를 통과해야만 회원가입 버튼이 활성화됩니다.

### Kakao API

- Kakao API의 활용으로 카카오 계정을 활용한 로그인, 로그아웃이 가능합니다.

## **문제 사항**

- Git Pages 배포 후 리다이렉션 시 404 에러 발생
    - 홈페이지에서 다른 라우팅 페이지로 useNavigation을 활용한 이동은 문제가 없으나,
    URL이 직접적으로 변하여 페이지가 새로고침되는 리다이렉션의 경우 페이지를 찾을 수 없다는 404 에러가 발생
    - 해당 문제는 라우팅을 지양하고 최대한리액트 훅을 사용하여 기본적인 사용에는 문제가 없도록 만들었으나, Home 페이지 이외의 화면에서 새로고침 또는 URL 직접 변경시에는 여전히 404 에러가 발생합니다.
    - 이 문제는 Git Page에서 라우팅 기능을 제공하지 않기 때문이므로,
    실제 서버가 있는 실무에서의 배포는 원래대로 진행할 수 있도록 KakaoCallback.jsx 파일을
    사용하는 방법으로도 로컬 환경에서는 문제 없이 돌아감을 확인하였습니다.

## 레퍼런스

- [cozy-table 이미지 및 디자인 출처](https://cozytable.co.kr/)

## 배운 것 및 프로젝트 소감

개인 공부용 노션 웹 : https://organized-mantis-bc1.notion.site/ee22b322ce974f20b6c3b56e8e1ec92f
