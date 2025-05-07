import React from 'react';

import Form1 from './Form1';
import Form2 from './Form2';
function Form(props) {
  return (
    <>
      <h3 className='title3'>React Form</h3>
      <p>html에서 폼태그와 마찬가지로 REact에서도 사용자가 웹페이지에서 상호작용
        (Interaction)을 할 수 있도록 할 수 있다.
      </p>
      <ul>
        <li>nameChange : 이름 변경을 위한 함수명</li>
        <li>e.target.value : 이벤트 객체의 매개변수 e의 값</li>
        <li>state : 자기 자신의 콤포넌트에서 변경이 되는 값을 저장하기 위한 곳</li>
        <li></li>
      </ul>
      <Form1 />
      <hr />
      <Form2 />
    </>
  );
}

export default Form;