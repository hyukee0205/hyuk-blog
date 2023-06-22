## 호이스팅

호이스팅이란 자바스크립트 엔진이 어플리케이션을 실행하기 전에 코드를 스캔하면서 변수, 함수, 클래스 선언을 제일 위에 있는 것 처럼 끌어올려주는 것을 말한다. 변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮긴다.

**자바스크립트 엔진에서 변수는 선언 → 초기화 → 할당을 거쳐 생성된다.**

**선언 단계**

- 변수를 실행 컨텍스트(실행 코드에 제공할 정보 객체)의 변수 객체에 등록한다.

**초기화 단계**

- 변수가 메모리에 적재되며 Undefined값을 가지게 된다.

**할당 단계**

- 실제 값을 변수에 할당한다.

### var 호이스팅

var 키워드로 선언된 변수는 호이스팅에 의해 선언과 동시에 undefined로 초기화된다. 따라서 변수 선언전에 사용하더라도 오류가 발생하지 않고, 값이 undefined로 나타낸다. 그러나 할당은 원래의 위치에서 이루어진다.

```jsx
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

### let, const 호이스팅

let과 const는 호이스팅이 되지만 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생한다. 실제 코드에 도달하기 전까지는 TDZ 영역에 존재하므로, 접근할 수 없기 때문에 ReferenceError가 출력된다.

```jsx
console.log(x); // ReferenceError: x is not defined
let x = 5;
console.log(x); // 5
```

### 함수 호이스팅

함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해준다. 함수의 선언문은 선언 이전에도 호출이 가능하다.

```jsx
hello(); // "Hello, world!"

function hello() {
  console.log('Hello, world!');
}
```

### 함수 표현식 호이스팅

함수 표현식은 호이스팅되지 않는다. hello값은 undefined이므로, 함수로 호출할 수 없어 TypeError가 발생한다.

```jsx
hello(); // TypeError: hello is not a function

var hello = function () {
  console.log('Hello, world!');
};
```

---

### 용어 정리

**TDZ(Temporal Dead Zone)**

TDZ는 스코프의 시작 지점부터 초기화 시작 지점까지의 사각지대 구간을 뜻한다. 비유하자면 선언 단계와 초기화 단계 사이에 잠시 머물러 있는 것이라고 할 수 있다.

---

### Reference

[[JS] 호이스팅(hoisting)](https://mong-blog.tistory.com/entry/JS-호이스팅hoisting)
