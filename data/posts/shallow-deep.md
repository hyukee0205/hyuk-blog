## 원시 타입(원시값): string, number, boolean, undefined, null, Symbol

- 원시값은 변경 불가능한 값이다. 여기서 변경 불가능한 값이라는 것은 변수가 아니라 값에 대한 원시값이 변수에 저장될 때에는 메모리 공간이 확보되어 그 공간에 값이 저장되고 변수는 그 주소를 참조한다.
  - 쉽게 설명하면, 변수에 원시값을 할당할 경우 변수는 원시값의 메모리 주소를 참조한다.
- 변수에 원시값을 할당하면 새로운 메모리 저장소를 생성하는 것이 아닌 저장된 원시값의 메모리 주소를 할당 받는다. 이러한 특성을 원시값의 **불변성**이라고 한다.

## 객체 타입(참조값): object, array, function

- 객체 타입은 원시값과 다르게 변경이 가능하다.
- 객체는 프로퍼티를 동적으로 추가, 삭제 등 변경이 가능하며, 메모리 공간또한 사전에 정해두지 않는다.
- 객체를 변수에 할당하면 실제 객체의 값은 별도의 메모리 공간에 저장되며, 그 공간을 참조하는 주소를 변수는 값으로 갖는다. 즉, 참조값은 생성된 객체가 저장된 메모리 공간의 주소를 의미한다.
- 객체를 할당한 변수를 다른 변수에 할당하면 객체값이 전달되는 것이 아닌 메모리 공간의 주소값을 복사하여 전달한다.

## 원시값과 참조값이 차이

- 원시값은 변경 불가능한 값이지만, 객체 타입(참조값)은 변경 가능한 값이다.
- 원시타입은 재할당을 통해서만 변수에 저장한 값을 변경할 수 있지만 객체타입은 재할당없이 객체를 직접 동적으로 추가, 삭제 갱신 등이 가능하다는 것이 제일 큰 차이점이다.
- 원시 값을 변수에 할당하면 확보된 메모리 공간에는 실제 값이 저장된다. 하지만 객체를 변수에 할당하면 확보된 메모리 공간에는 참조값이 저장된다.
- 원시값을 갖는 변수를 다른 변수에 할당하면 원본의 원시값이 복사되어 전달된다. 하지만 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조값이 복사되어 전달된다.

---

## **얕은 복사와 깊은 복사**

- 얕은 복사는 참조 타입 데이터가 저장한 ‘메모리 주소 값’을 복사한 것을 의미한다.
- 반대로 깊은 복사는 새로운 메모리 공간을 확보해 완전히 복사하는 것을 의미한다.

## **얕은 복사(Shallow Copy)**

객체를 복사 할 때 원본 값과 복사된 값이 참조(=메모리 주소)를 가리킨 것이다.
또한, 객체 안에 객체가 있을 경우에 한 개의 객체라도 원본 객체를 참조한다면 얕은 복사라고 볼 수 있다.

### **Object.assign()**

Object.assign()을 이용하면 **객체 자체는 깊은 복사**가 수행되지만, **2차원 이상의 객체는 얕은 복사**가 수행된다. 아래 예시에서 객체는 서로 다른 주소를 참조하고 있어 깊은 복사가 이루어졌지만 내부의 객체는 같은 주소를 참조하고 있다.

```jsx
/* Object.assign(생성할 객체, 복사할 객체) */
let origin = {
  a: 1,
  b: { c: 2 },
};

let copy = Object.assign({}, origin);
copy.b.c = 3;

console.log(origin === copy); // false
console.log(origin.b.c === copy.b.c); // true
```

### **전개 연산자**

전개 연산자도 assign()과 같이 **복사한 객체 자체는 깊은 복사**이지만 **내부의 객체는 얕은 복사**가 진행된다.

```jsx
let origin = {
  a: 1,
  b: { c: 2 },
};

let copy = { ...origin };
copy.b.c = 3;

console.log(origin === copy); // false
console.log(origin.b.c === copy.b.c); // true
```

## 깊은 복사(Deep Copy)

**깊은 복사**된 객체는 객체 안에 객체가 있을 경우에도 원본과의 참조가 완전히 끊어진 객체를 말한다.

### JSON 객체 이용

객체를 JSON 문자열로 변환 후, JSON.parse()를 이용해 다시 원래 객체(자바스크립트 객체)로 만들어준다.

```jsx
const source = { name: 'John', age: 30 };
const deepCopy = JSON.parse(JSON.stringify(source));

console.log(deepCopy); // { name: 'John', age: 30 }
```

### 재귀 함수

함수가 자신을 다시 호출하는 구조로 만들어진 함수이다. 재귀함수는 종료조건이 있어야 하며, 종료조건을 설정해주지 않으면 무한 반복을 하게된다. 재귀함수로 작성이 되는 코드는 반복문으로도 작성할 수 있다.

```jsx
let origin = {
  a: 1,
  b: { c: 2 },
};

function isCopyObj(origin) {
  let res = {};

  for (let key in origin) {
    if (typeof origin[key] === 'object') {
      res[key] = isCopyObj(obj[key]);
    } else {
      res[key] = origin[key];
    }
  }

  return res;
}

let copy = isCopyObj(origin);

copy.b.c = 3;
console.log(origin.b.c === copy.b.c); //false
```

### Lodash

Lodash는 JavaScript 라이브러리 중 하나이며 배열, 숫자, 객체, 문자열 등으로 작업할 때 번거로움을 없애고 쉽게 다룰 수 있게끔 하는데 사용된다.

```jsx
const _ = require('lodash');

// 복사할 객체
const originalObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
  },
};

// lodash를 사용하여 깊은 복사
const copiedObject = _.cloneDeep(originalObject);

// 복사된 객체 수정
copiedObject.name = 'Jane';
copiedObject.address.city = 'San Francisco';

// 원본 객체와 복사된 객체 출력
console.log('원본 객체:', originalObject);
console.log('복사된 객체:', copiedObject);
```
