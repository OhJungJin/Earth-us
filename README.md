# Earth, us 🌎

## 🌳 Intro: 서비스 소개 
<br/>
<strong>Earth, us</strong>란 제로웨이스트를 위한 커뮤니티로 유저들의 일상과 노하우를 공유하고,<br/>
미션을 제공받아 완수하여 장기&지속적인 환경보호 운동 실천을 독려하고 개인 미션 수행완료를 통한 뱃지획득 기능으로 성취감을 부여하여 <br/>
일상에 자연스레 녹아드는 제로웨이스트를 추구하는 서비스입니다.

<br/>

### ⭐️ Feat: 주요 기능 소개 

#### 1) 데일리미션
매일 제로웨이스트를 실천할 수 있는 미션을 제공하며 사용자들이 미션을 달성 했는지 스스로 체크할 수 있습니다.
#### 2) 모임기능
제로웨이스트 관련 모임을 생성하고 참여할 수 있습니다.<br>
모임별 채팅을 통해 모임 참여자들끼리 소통할 수 있습니다.<br>
모임 참여 후기를 작성할 수 있습니다.
#### 3) 커뮤니티
게시글, 댓글 작성을 통해 자유롭게 소통할 수 있습니다.
#### 4) 뱃지
커뮤니티, 모임 활동 등을 통해 뱃지를 획득할 수 있습니다.<br>
유저 프로필을 통해 획득한 뱃지를 볼 수 있으며, 타인이 볼 수 있습니다.<br>
대표 뱃지를 설정할 수 있습니다.

<br/>
📅 <strong>프로젝트 기간</strong> : 2022.09.19 ~ 2022.10.27


## 🛠 Skills: 개발환경 및 기술스택 

🛠 <strong>Dev Tools</strong>

<p herf="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=vscode,github&perline=20"/>
</p>

🛠 <strong>Tools</strong>

<p herf="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=react,redux,styledcomponents,tailwindcss,js,html,css,figma&perline=20"/>
</p>

🛠 <strong>API</strong>

  <img src="https://img.shields.io/badge/AXIOS-F7DF1E?style=for-the-badge&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/kakao map-FFCD00?style=for-the-badge&logo=kakao&logoColor=black"> <img src="https://img.shields.io/badge/kakao login-FFCD00?style=for-the-badge&logo=kakao&logoColor=black"> 

## 📌 Trouble Shooting: 트러블 슈팅 

<details> <summary>➡️ 😛김민석: 새로고침시 데이터가 안불러와지는 문제가 있었습니다. </summary> <div markdown="1">
  <br/>

**`문제원인`**
  * 인터셉터를 사용하기에 토큰이 자동으로 담겨 서버에 요청을 보내는 줄 알았는데 새로고침을 할 경우 인터셉터가 실행되기전에 요청을 보내고 있었습니다. [개발자도구]의 [네트워크]에서 로그를 보고 토큰이 담겨지지 않은 것을 확인할 수 있었습니다. 
  
**`해결방안`**
  * useEffect를 통해 axios인스턴스를 실행시켜 데이터를 불러왔었는데, 인스턴스가 실행되기전에 sessionStorage.setItem으로 토큰을 담는 코드를 작성해주었습니다. 
  
**`자세한 내용`**
  * [React | 새로고침시 데이터가 안불러와지는 문제](https://velog.io/@shackstack/React-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%EC%8B%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B0%80-%EC%95%88%EB%B6%88%EB%9F%AC%EC%99%80%EC%A7%80%EB%8A%94-%EB%AC%B8%EC%A0%9C)


  </div>
  </details>

<details> <summary>➡️ 🥸오정진: React slick 각 자식요소에 Margin 및 Padding css 설정이 안 되는 이슈를 발견하였습니다. </summary> <div markdown="1">
  <br/>

**`문제원인`**
  * 라이브러리 특성상 기본적으로 설정되어 있는 css 파일들이 있기에, 기존의 설정되어 있는 css가 우선적으로 선언되어 내가 선언하는 css가 적용이 되지 않는 문제를 발견하였습니다.

  
**`해결방안`**
  * react slick build시 사용되는 slick.css와 slick-theme.css를 따로 빼와서 margin과 padding default 값을 삭제 해, 원하는 대로 css 수정을 가능하게 변경하였습니다.
  
  </div>
  </details>
 
 
## 🖥 Role: 담당 기능 

| 이름       | 포지션       | 담당 기능 구현          |
| ---------- | ------------ | ----------------------------------------|
|🥰심유선 | `FE` | `커뮤니티 게시글 및 댓글 CRUD, 무한스크롤, 좋아요 기능` `모임 소통의장 CRUD`| 
|😎오정진 | `FE` | `메인 페이지` `데일리 미션` `뱃지 시스템` `마이 페이지` `제로샵(온라인)` `구글 로그인` `자동 배포`| 
|😛김민석 | `FE` | `모임 페이지` `모임 CRUD` `카카오로그인` `제로샵(오프라인)` | 
|🤩박세은 | `FE` | `커뮤니티 댓글 CRUD` `모임 좋아요 및 태그조회` `커뮤니티 태그조회` `모임후기 CRUD` `커뮤니티, 모임 검색`| 


## 🗂 Directory: 디렉토리 구조 

![폴더구조](https://user-images.githubusercontent.com/102432453/194445813-de470884-7fb3-4421-a0b6-20a7acdd8b83.png)

`api` : 서버와의 통신을 위한 폴더입니다. axios를 활용한 작업을 주로 담당합니다. 

`assets` : 컴포넌트를 구성하는 이미지파일들을 저장하기위한 폴더 입니다. 

`components` : 페이지를 구성하는 컴포넌트들을 정리하기위한 폴더입니다.

`hooks` : 커스텀 훅을 정리하기 위한 폴더입니다.

`pages` : 서비스를 구성하는 페이지를 정리하기 위한 폴더입니다.

`redux` : 전역변수를 관리하는 store와 modules를 정리하기 위한 폴더입니다.

`shared` : 라우팅을 위한 폴더입니다. 서브라우터를 활용하여 더 세분화하여 정리하였습니다. 

`utils` : 유용하게 쓸 수 있는 함수와 글로벌하게 적용되는 컴포넌트들을 관리하기 위한 폴더입니다.


## 📔 Architecture: 서비스 아키텍쳐

![Slice 4](https://user-images.githubusercontent.com/102432453/194732437-e582ef0a-5d9a-4772-8f46-95208a556585.jpg)
