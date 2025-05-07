import React from 'react';
import main1 from '../images/main1.jpg';
function Class4(props) {
  return (
    <>
      <h3 className='title03'>리엑트에서 이미지 삽입하는 방법</h3>
      <ul>
        <li>public 폴더에서 이미지 가져옥 위한 3가지 방법</li>
        <ol>
          <li>src={`${process.env.PUBLIC_URL}/폴더명/파일명.확장자`}</li>
          <li>src={'/폴더명/파일명.확장자'}</li>
          <li>src={'폴더명.파일명.확장자'}</li>
        </ol>
        <li>1. src폴더에 있는 이미지 : import</li>
        <ol>
          <li>import logo from "./src/폴더명/파일명.확장자"</li>
          <li>img src={} alt=""식으로 작성</li>
        </ol>
        <li>2. src 폴더에 있는 이미지 : require
        <p>img src={require('../images/logo.png').default} alt=""</p>
        </li>
        <li>3. css에서 이미지 경로 설정
        <ol>
          <li>background 속성으로 url:("이미지 경로명/파일명.확장자");</li>
          <li>background: url("폴더명/파일명.확장자");</li>
          <li>background: url("./폴더명/파일명.확장자");</li>
        </ol>
        </li>
      </ul>
    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="모두투어 로고"/>
    <img src={main1} alt="여행상품"/>
    <img src={require('../images/main2.png')} alt=""/>
    <img src="" alt=""/>
    <p>jsx파일에서 절대경로는 public 폴더를 기준으로 함.</p>
    <p>css파일에서는 절대경로는 src폴더를 기준으로 함.</p>
    <p>리엑트에서는 jsx파일로 작성시 환경변수 PUBLIC_URL을 사용할 것을 권장.(github에 업로드
      시에도 PUBLIC_URL로 설정된 이미지가 정상적으로 노출됨)</p>
    </>

  );
}

export default Class4;