import React, { Component, Fragment } from 'react';
//React 모듈을 사용하겠다는 표시

import './App.css';

import MyName from './MyName';

class App extends Component {
  render() {
    return <MyName name="진조" />;
  }
}

export default App;
