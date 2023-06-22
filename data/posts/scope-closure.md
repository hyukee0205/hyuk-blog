## 스코프 (Scope)

스코프란 변수를 참조할 수 있는 유효한 범위를 뜻한다. 클래스나 함수, 블럭 안에 선언된 것이 아닌 변수를 전역 스코프라 부른다. 상위 스코프와 하위 스코프들이 계층적으로 연결되어 있는 것을 스코프 체인이라고 한다. 이 때문에 하위 스코프에서 상위 스코프에 있는 변수를 참조할 수 있다.

**스코프 예제**

```jsx
// 전역 스코프
let globalVariable = '전역 변수';

function globalFunction() {
  // 함수 스코프
  let functionVariable = '함수 변수';

  if (true) {
    // 블록 스코프
    let blockVariable = '지역 변수';
    console.log(blockVariable); // 지역 변수
  }

  console.log(functionVariable); // 함수 변수
  console.log(globalVariable); // 전역 변수
}

globalFunction();
console.log(globalVariable); // 전역 변수
console.log(functionVariable); // ReferenceErro
console.log(blockVariable); // ReferenceError
```

- 각 상수, 변수들의 선언된 영역을 scope라고 한다.
- 클래스나 함수, 블럭 안에 선언된 것 아닌 변수를 **전역 변수**라고 한다.
- 전역 스코프에 있는 변수들은 코드 내 어디든 사용이 가능하다.
- 전역 변수와 블럭안의 변수의 선언 이름이 같을 땐, 내부에 있는 변수부터 사용하며, 점진적으로 외부 변수를 활용한다.
- 전역 변수는 충돌의 여부 버그등이 일어날 수 있기 때문에 사실상 사용하지 않는 것이 좋다.

### 스코프 체인

자바스크립트 엔진은 변수(식별자)를 찾을 때 일단 자신이 속한 스코프에서부터 찾아보고, 그 스코프에 찾는 변수가 없으면 상위 스코프를 타고 올라가며 차례대로 찾아 나간다. 이를 스코프 체인이라고 하며, 스코프가 중첩되어 있는 모든 상황에서 발생한다.

**스코프 체인 예제**

```jsx
function exterior() {
  let x = 10;

  function interior() {
    let y = 20;
    console.log(x + y);
  }

  interior();
}

exterior();
```

### 렉시컬 환경(Lexical Environment)

자바스크립트에선 실행 중인 함수, 코드 블럭, 스크립트 전체는 렉시컬 환경이라 불리는 내부 숨김 연관 객체(internal hidden associated object)를 갖는다. 렉시컬 환경 객체는 환경 레코드와 외부 환경 참조 두 부분으로 구성되었다. 각 블럭마다 렉시컬 환경이라는 내부 오브젝트를 갖고 있어, 블럭마다 어떤 변수들이 있는지 알 수 있고, 스코프 체이닝을 통해서 부모는 누구인지 정보를 알 수 있다.

**환경 레코드**

- 현재 블록의 정보를 담고있다.

**외부 환경 참조**

- 부모는 누구인지, 부모를 참조하는 정보를 갖고 있다.

## 클로저(Closure)

클로저는 함수와 그 함수를 감싸고 있는 렉시컬 환경의 조합을 뜻한다. 클로저의 핵심은 스코프를 이용해서 변수의 접근 범위를 지정하는 것이다. 클로저는 자신이 생성될 때의 렉시컬 환경을 기억하는 함수이며, 이를 통해 캡슐화와 정보은닉이 가능하다.(현재는 class를 사용)

**클로저 예제**

```jsx
function outerFunc() {
  var x = 10;
  var innerFunc = function () {
    console.log(x);
  };
  return innerFunc;
}

/**
 *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
 *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
 */
var inner = outerFunc();
inner(); // 10
```

- inner() 호출 시 10이 출력되는 이유는 innerFunc이 렉시컬 환경을 기억한 상태로 반환되었기 때문이다.

---

### Reference

[PoiemaWeb](https://poiemaweb.com/js-closure)
