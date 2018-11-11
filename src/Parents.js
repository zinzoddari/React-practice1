import Reace, { Component } from 'react';

class Parents extends Component {
  //컴포넌트 만드는 방법중 하나인 Class로 만든다 2번째 방법은 함수를 통해 만듬
  render() {
    // = method, 꼭 jsx 형식으로 return 해야된다
    //jsx는 일반 HTML 코드와 같이 보이지만, js코드로 변환이 된다.
    //jsx의 규칙
    //1. 태그는 꼭 닫아야한다 ex) <div>를 열었으면 </div> 로 닫아야한다.
    //  - input을 안닫을 때도 있는데 꼭 닫아줘야함 self closing <input type='text' '/>'
    //2. return 쪽에 하나의 엘리먼트로 감싸져야 한다
    //  - <div> Hello </div>
    //  - <div> Hello2 </div> 이렇게 하면 두개의 엘리먼트가 존재하게 됨
    //  - 꼭 2개 엘리먼트를 return 하고 싶다하면 React 16.2 버전에서 Fragment 기능이 추가가 되었다.
    //    - import React, { Component, Fragment } from 'react';로 새 <div>로 감싸지말고 <Fragment>로 감싸주면 된다.
    const name = '니얼굴이다';
    // function foo(){        기존 var를 쓰게 되면
    //    var a = 'hello';
    //    if(true){
    //      var a = 'bye';
    //      console.log(a);   전에 a의 값을 bye로 바꿔주었기 때문에 bye가 출력이 된다
    //    }
    //    console.log(a);  블록이 끝났기 때문에 hello가 출력이 되어야하는데 bye가 출력이 된다.
    //  } //변수의 범위가 function 시작 괄호부터 끝날때 괄호까지기 때문에 값이 변경이 된 것

    // function foo(){      let으로 쓰게 되면
    //    let a = 'hello';
    //    if(true){
    //      let a = 'bye';  //bye로 바꿔준 a의 값이 유효한 것은 if문이 닫힐 때 까지
    //      console.log(a);    bye가 출력이 되고
    //    }
    //    console.log(a);     hello가 출력이 된다.
    //  }

    // let과 const의 단위는 block 단위다

    // var는 이제 더 이상 사용하지 않는다
    // const 한 번 선언 후 고정적인 값 (바뀌지 않는 값)
    // let 유동적인 값 (바뀔 수 있는 값)

    // 조건부 랜더링하는 법 (주로 삼항연산자)

    //css 적용법 style={객체이름}
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: 5 + 10 + 'px'
    };

    //React에서는 class는 className으로 사용
    //class로 사용해도 사용이 되지만 className을 주로 사용하자

    //주석사용법
    // return에 //나 /* */를 쓰면 모두 출력이 된다.
    // {/* */} 이렇게 사용하면 된다

    //props란 부모가 자식에게 값을 전달할 때 사용

    return (
      <div /*style={style}*/ className="App">
        <h1>hello {name}</h1>
        <p>/*주석 되냐*/</p>
        {/*<p>주석 사용하는 법</p>*/}
        <span //이렇게 써
        >
          {' '}
          또 다른 주석{' '}
        </span>
        {//조건부 랜더링 쓰는 법
        1 + 1 === 3 ? '맞다' : '틀리다'}
        {name === '니얼굴이다' && <div>엉덩인가!</div>}
        {(function() {
          if (name === '니얼굴이다') return <div>니얼굴ㅇㅇ</div>;
          if (name === '니얼굴아니다') return <div>니얼굴ㄴㄴ</div>;
          if (name === '니얼굴이냐') return <div>니얼굴?</div>;
          return <div>니얼굴 없는듯</div>;
        })() //바로 호출 해 줌
        }
        {//화살표 문법 (this, argument, super 개념이 없다)
        (() => {
          if (name === '니얼굴이다') return <div>니얼굴ㅇㅇ</div>;
          if (name === '니얼굴아니다') return <div>니얼굴ㄴㄴ</div>;
          if (name === '니얼굴이냐') return <div>니얼굴?</div>;
          return <div>니얼굴 없는듯</div>;
        })() //바로 호출 해 줌
        }
      </div>
    );
  }
}

export default Parents;
