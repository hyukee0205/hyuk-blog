### GET

GET은 클라이언트에서 서버로 데이터를 요청하기 위해 사용되는 메서드이다. get을 통한 요청은 URL 주소 끝에 파라미터로 포함되어 전송되며, 이 부분을 쿼리 스트링이라고 부른다.

- 요청 URL 길이에 제한이 있다.
- 전송 데이터 노출에 따른 위험 (보안성 위험)
- GET 방식으로 전송을 하면 http request header 프로토콜 형식에 맞춰서 데이터를 만들고 서버에 전송하게 된다. (body에는 값이 없고, header에서 값이 전송된다.)
- GET 요청은 idempotent 하다.

### POST

POST는 클라이언트에서 서버로 리소스를 생성하거나 업데이트하기 위해 데이터를 보낼 때 사용되는 메서드이다. post는 http request body에 데이터를 담아서 서버로 전송한다.

- 데이터 전송 길이에 대한 제한이 없다.
- http request body에 데이터를 담아서 전송하므로 header와 다르게 노출되지 않는다.
  (보안성을 높이려면 https를 사용)
- POST 요청은 idempotent 하지 않다.

### GET과 POST의 차이

GET은 Idempotent, POST는 Non-idempotent하게 설계되었다. Idempotent것은 동일한 연산을 여러 번 수행하더라도 동일한 결과가 나타나야 한다는 것을 의미한다. GET은 서버에게 동일한 요청을 여러 번 전송하더라도 동일한 응답이 돌아와야 한다는 것을 의미한다. 주로 조회를 할 때 사용한다. POST는 서버에게 동일한 요청을 여러번 전송해도 응답은 항상 다를 수 있다. 그러므로 요청의 이미를 정확하게 하기 위해선 RESTful한 API를 사용해야 한다. (조회는 GET, 생성 POST, 수정 PUT 또는 PATCH, 삭제 DELETE)

---

### 용어 정리

**파라미터(parameter)**

- 요청과 함께 전달되는 데이터들을 파라미터(parameter)라고 한다.

**Idempotent**

- 연산을 여러 번 적용하더라도 결과가 달라지지 않는 성질
- idempotent는 멱등법칙(冪等法則) 또는 멱등성(冪等性)이란 뜻으로, 수학이나 전산학에서 연산의 한 성질을 나타내는 것으로, 연산을 여러 번 적용하더라도 결과가 달라지지 않는 성질을 의미한다.

---

### **Reference**

[GET과 POST의 차이](https://hongsii.github.io/2017/08/02/what-is-the-difference-get-and-post/)
