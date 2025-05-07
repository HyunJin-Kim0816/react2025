import React, { Component } from 'react';

import K_Header from './K_Header';
import K_Main from './K_Main';
import K_Footer from './K_Footer';
import './Kully.css';

class Kully extends Component {
  render() {
    return (
      <>
        {/*1. 메인슬라이드 컴포넌트*/}
          <K_Header />
        {/*2. 메인슬라이드 컴포넌트*/}

          <K_Main />
          <K_Footer />
      </>
    );
  }
}

export default Kully;