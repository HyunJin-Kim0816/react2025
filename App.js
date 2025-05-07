import './App.css';
import Class0 from './0428/Class0';
import Class1 from './0429/Class1';
import Class2 from './0429/Class2';
import Class3 from './0430/Class3';
import Class4 from './0430/Class4';
import Kullyjp from './0430/Kullyjp';
import Kully from './0430/Kully';
import Class5 from './0501/Class5';
import Class6 from './0501/Class6';
import Event from './0501/Event';
import Form from './0501/Form';
import Array1 from './0507/Array1';
import Yellow from './0507/Yellow';//노랑풍선 상품목록 출력하기

function App() {
  return (
    <>
      <header className="App">
       <h1 className=''>리엑트학습하기</h1>
      </header>

      <main>
        <h2 className='title3'>1일차 학습</h2>
        <Class0 />
        <hr />
        <h2 className='title3'>2일차 학습</h2>
        <Class1 />
        <hr />
        <Class2 />
        <h2 className="title3">3일차 학습</h2>
        <Class3 />
        <hr />
        <Class4 />
        <hr />
        <hr />
        <Kullyjp />
        <Kully />
        <hr />
        <h2 className='title3'>4일차 학습 0551</h2>
        <Class5 />
        <hr />

        <Class6 />
        <hr />
        <Event />
        <hr />
        <Form />
        <hr />
        <h2 className='title3'>6일차 학습 0507 = 배열데이터 </h2>
        <Array1 />
        <hr />

        <Yellow />
       
      </main>


      <footer className='footer'>
      <address>
          Copyright&Copy;2025 Kully
          CORP. ALL RIGHTS RESERVED
        </address>
      </footer>

      
    </>
  );
}

export default App;
