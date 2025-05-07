import React from 'react';

function Class0(props) {
  return (
    <>
    <h2>1일차 - 리엑트_nodejs설치</h2>
      <h3>NODE.js설치와 리엑트 프로젝트 실행방법</h3>
      <ol>
    <li>nodejs 사이트에 방문하여 lts(안정화)버전을 다운로드하여 설치</li>
    <li>내컴퓨터 〉 시작 〉 실행 〉 cmd(명령프롬프트) 실행</li>
    <li>node, npm 버전확인 node -v, npm -v</li>
    <li>프로젝트 설치하고자 하는 폴더로 이동 :  cd 폴더명</li>
    <li>npx 전역 설치(execute npm package binaries) : npm i npx -g</li>
    <li>npx버전확인 : npx -v</li>
  </ol>
  <h3>1. 명령프롬프트에서 사용하는 명령어</h3>
  <ul>
    <li>cd 폴더명: change directory의 약자로서 지정한 폴더로 이동한다.</li>
    <li>dir : 폴더, 파일 리스트 출력하기 위한 명령어.</li>
    <li>cd\ : 최상위 폴더로 이동하는 명령어</li>
    <li>cd.. : 이전 상위 폴더로 이동하는 명령어(현재폴더 나가기)</li>
    <li>cls : clear의 약자로서 화면을 깨끗하게 비우는 명령어</li>
    <li>cd 드라이브명 : 현재 폴더위치에서 다른 폴더로 이동하기 위한 명령어</li>
  </ul>

  <h3>2. vs code에서 cmd등록하여 리액트 프로젝트 설치하기</h3>
  <ul>
    <li>상단 메뉴에서 '터미널'메뉴 클릭</li>
    <li>새 터미널 생성되면 오른쪽 메뉴 '+'옆 화살표 클릭하여 '기본 프로필선택'하면 vs code에서 항상 cmd창이 나오게 된다.</li>
    <li>드라이브명을 전환하여 프로젝트를 설치할 드라이브(폴더)로 이동한다.</li>
    <li>cmd창에서 npx create-react-app 프로젝트명(폴더명)</li>
    <li>cmd창에서 npx create-react-app kdt  =〉 프로젝트 설치함. 에러가 나오면 다</li>
  </ul>

  <h3>3. 리액트 프로젝트 실행</h3>
  <p>리액트 프로젝트 폴더가 생성되고, 설치가 완료되면 'npm run start' or 'npm start'명령어로 프로젝트를 실행한다.</p>

  <h3>4. 리액트 프로젝트 종료</h3>
  <p>프로젝트를 종료하고자 할 때는 브라우저 창만 종료하지 말고 vs code 'cmd'창에서 반드시 'ctrl + C'키를 눌러서 안정적으로 종료를 한다.</p>

  <h3>5. 리액트 프로젝트 작업시 유용한 플러그인 설치</h3>
  <ul>
    <li>Reactjs code snippets : 리액트 코드 작성시 단축키로 빠르게 코드를 작성할 수 있도록 도와주며 문법체크해 줌.</li>
    <li>tailwind intellisence : 리액트 프로젝트 작성시 css코드를 빠르게 작성하도록 도와주는 플러그인.</li>
  </ul>
  <p>자바스크립트 '컴파일러'이며 최신 자바스크립트 문법이라든지, 리액트가 사용하는 jsx문법을 브라우저가 이해할 수 있도록 자바스크립트 문법으로 변환시켜주는 역할을 한다.</p>

  <h3>2. 리액트 앱개발을 위한 환경 구축</h3>
  <p>node.js : 자바스크립트로 개발 할 수 있는 서버환경을 구축해줌.</p>
  <p>node.js는 공식사이트에서 '안정화'버전(LTS)을 클릭하여 다운로드 하고 설치하여 사용한다.</p>

  <h3>3. node.js장점</h3>
  <ul>
    <li>크롬 V8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임</li>
    <li>웹브라우저 환경이 아닌 곳에서도 자바스크립트를 이용한 연산이 가능</li>
    <li>리액트 프로젝트를 준비하기 위해 필요한 webpack, babel 등의 도구들을 실행하는데에 사용</li>
    <li>패키지 매니저 도구인 npm(node package manager)이 자동 설치</li>
    <li>npm(node package manager)으로 수많은 개발자가 만든 패키지(재사용 가능한 코드)를 설치하고 관리할 수 있음</li>
  </ul>  
    </>
  );
}

export default Class0;