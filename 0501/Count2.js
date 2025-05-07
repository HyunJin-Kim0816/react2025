import React, { useState } from 'react';

//function Count2(props){
const Count2=(props)=>{

  //변수 초기값 지정
  const [num, setNum] = useState(1);
   const onPlus1=()=>{
    setNum(num+1);
  }
  const onMinus1=()=>{
    if(num===1){
      setNum(1)
  }else{
  setNum(num-1)
  }
}
    return (
      <>
       <p>+, -버튼을 클릭하면 숫자증가, 숫자 감소하는
          state값을 작성하기</p>

          <div>숫자출력 : {num}</div>
          <input type="button" value="+"  onClick={onPlus1}className="btn" />
          <input type="button" value="-"  onClick={onMinus1}className="btn" />
      </>
    );
  }

export default Count2;