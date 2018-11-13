import React, { Component, Fragment } from 'react';
//React 모듈을 사용하겠다는 표시

import './App.css';

import MyComponent from './MyComponent';

//import MyName from './MyName';
import LifeCycle from './LifeCycle';
class App extends Component {
  state = {
    counter: 1,
    error: false
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  //실제로 잡지 못하는 error를 직접 잡을 수 있다
  //실제 유저에게는 에러가 났다고 알려줄 수 있다
  //에러가 발생할 수 있는 컴포넌트의 부모 컴포넌트에서 해 주어야 한다.
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);

    this.setState({
      error: true
    });
    //API를 통해서 서버로 오류 내용 보내거나 한다
  }

  render() {
    if (this.state.error) {
      return <div>에러가 났어요</div>;
    }
    return (
      <div>
        <LifeCycle />
        {/*<MyComponent value={this.state.counter} /> */}
        {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
