import React from 'react';

function Event(props) {
  const shoot=()=>{
    alert('슛~')
  }
  const shoot2=(txt)=>{
    alert(txt);
  }
  return (  
    <>
      <h3 className='title3'>이벤트(EVENT)</h3>
      <dl>
        <dt>이벤트란?</dt>
        <dd>- 사용자가 웹브라우저에서 DOM요소들과 상호작용하는 것</dd>
        <dd>- React에서 이벤트는 HTML과 동일한 이벤트를 갖는다.</dd>
        <dd>- 이벤트는 DOM요소에서만 줄 수 있고, 우리가 생성한 콤포넌트에슨 줄 수 없습니다.</dd>
      </dl>

      <h4>1. HTML에서 이벤트</h4>
      <p>
      <p>요소  onclick='함수명();'</p>
      <p><button onClick={shoot}>눌러보세요</button></p>
      <p><button onClick={()=>shoot2('매개변수를 전달하여 출력도 가능')}>눌러보세요</button></p>
      </p>

      <h4>2. React에서 이벤트</h4>
      <pre>
      <p>요소 onClick={/*함수명*/}함수명</p>
      <p>요소 onClick={/*this.함수명*/}함수명</p>
        <p>class컴포넌트에서 함수가 메서드화 처리되는 것이므로 this를 반드시 작성해야함.</p>
      </pre>
    </>
  );
}

export default Event;