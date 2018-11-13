import React, { Component } from 'react';

class LifeCycle extends Component {
  //LifeCycle API
  //1. Mounting  : 화면이 나타날 때
  //2. Updating : props나 state의 상태 변화 (화면이 업데이트 될 때)
  //3. Unmounting : 화면이 사라질 때 사이에 무언가를 할 때 LifeCycle API

  //Mounting
  //1) constructor : 생성자 함수, 만든 컴포넌트가 처음 브라우저에 나타나게 될 때 만들어지는 과정에서 가장 먼저 실행되는 함수
  //      - state 초기화나 먼저 해야할 행위를 처리한다
  //2) getDeriverdStateFromProps : props로 받은 값을 state에 그대로 동결 시킬 때 사용
  //3) render : 어떤 Dom이나 내부 태그에 어떤 값을 넣을지 정의
  //4) componentDidMount : 외부 라이브러리 : 차트 api나 ajax 요청 등이 가능

  //Updating
  //1) shouldComponentUpdate : 컴포넌트가 업데이트 되는 성능을 최적화 시킬 때 사용
  //      - 부모 컴포넌트가 reRendering이 되면 자식 컴포넌트도 render()함수 실행해야 함
  //      - render가 되면서 virtual Dom에 그리게 되면서 변경된 부분만 고치는데 이런 부분도 필요가 없어질 때 사용
  //      - true와 false를 반환하게 됨 false면 rendering을 하지 않고 화면에 반영도 하지 않음
  //2) getSnapshotBeforeUpdate : rendering 하고 브라우저에 반영되기 직전 단계
  //      - 스크롤 위치나 해당dom의 크기를 사전에 가져오고 싶다는 등 이런 행위를 할 때 사용
  //3) componentDidUpdate :

  //Unmounting
  //1) componentWillUnmount : Mounting의 componentDidMount에서 이벤트 리스닝 등을 설정한걸 없앨 수 있다

  constructor(props) {
    super(props); //상속받은 Component가 가진 생성자함수를 먼저 호출
    console.log('컴포넌트가 브라우저에 나타나기전 호출되는 : constructor');
  }

  componentDidMount() {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    // 특정 DOM에 이벤트 등록하기 등
    console.log('componentDidMount');
    console.log(this.myDiv.getBoundingClientRect()); // DOM의 크기나 좌표등을 가져올 수 있음
  }

  //특정 DOM에 무슨 작업을 할 땐 ref를 사용
  //id 부여와 비슷하지만 dom의 reference를 가져올 수 있다

  render() {
    return <div ref={ref => (this.myDiv = ref)}>hello</div>;
  }
}

export default LifeCycle;
