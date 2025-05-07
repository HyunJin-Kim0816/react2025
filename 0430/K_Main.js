import React from 'react'
import './Kully.css';
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function K_Main() {
  return (
    <>
       <div className='kully_wrap'>
      <h1>
         <img src={`${process.env.PUBLIC_URL}/images/kully_logo.svg`} alt="마켓컬리 로고"/>
      </h1>
      <h2>MD의 추천</h2>
        <ul>
          <li>채소</li>
          <li>과일&middot;견과&middot;쌀</li>
          <li>수산&middot;해산&middot;건어물</li>
          <li>정육&middot;계란</li>
          <li>국&middot;반찬&middot;메인 요리</li>
          <li>샐러드&middot;간편식</li>
          <li>면&middot;양념&middot;오일</li>
          <li>생수&middot;음료&middot;우유&middot;커피</li>
          <li>간식&middot;과자&middot;떡</li>
          <li>베이커리&middot;치즈&middot;델리</li>
          <li>건강식품</li>
          <li className='lili'>와인</li>
          <li>전통주</li>
          <li>생활용품&middot;리빙&middot;캠핑</li>
          <li>스킨케어&middot;메이크업</li>
          <li>헤어&middot;바디&middot;구강</li>
          <li>주방용품</li>
          <li>가전제품</li>
          <li>선물하기</li>
          <li>반려동물</li>
          <li>베이비&middot;키즈&middot;완구</li>
        </ul>
        <div className='kully_img_wrap'>
  <div className='img-container'>
    <img src={`${process.env.PUBLIC_URL}/images/k1.jpg`} alt="마켓컬리"/>
    <p>[2+1] [전주 베테랑] 칼국수</p>
    <p><span>33%</span> 3,933원</p>
  </div>
  <div className='img-container'>
    <img src={`${process.env.PUBLIC_URL}/images/k2.jpg`} alt="마켓컬리"/>
    <p>[거대곰탕] 곰탕</p>
    <p><span>20%</span> 12,000원</p>
  </div>
  <div className='img-container'>
    <img src={`${process.env.PUBLIC_URL}/images/k3.jpg`} alt="마켓컬리"/>
    <p>[KF365] 훈제오리 2종(2입)</p>
    <p><span>30%</span> 7,340원</p>
  </div>
  <div className='img-container'>
    <img src={`${process.env.PUBLIC_URL}/images/k4.jpg`} alt="마켓컬리"/>
    <p>[KF365]대추방울 토마토 750g</p>
    <p><span>58%</span> 6,990원</p>
  </div>
</div>
        </div>
    </>
  )
}

export default K_Main