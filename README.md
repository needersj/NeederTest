# NeederTest

* 이 테스트는 다음의 링크에서 참고해서 만들었습니다

  [kolodny/exercises](https://github.com/kolodny/exercises/tree/master/update)
  
	Thanks to @kolodny

## 문제설명
페이스북의 [Immutability Helpers](https://reactjs.org/docs/update.html)를 직접 구현해주세요. => [github](https://facebook.github.io/react/docs/update.html)


* 아래의 코드를 만족하는 js 파일을 작성해주세요.

```js
const update = require("./your-file"); // <- this is the file you make;

const state = { name: "Alice", todos: [] };
const nextState = update(state, {
  name: { $set: "Bob" }
});

console.log(nextState.name === "Bob"); // true
console.log(state.todos === nextState.todos); // true
```

## 원문

The basic idea is to have all object immutable, which means that once an object
is created it can never be change. At this point you're wondering how is it
possible to build an anything with this restriction. Well instead of mutating an
object we switch bindings to a very similar but slightly different object.
Switching bindings is just a fancy way of saying making a variable refer to a
different object

Let's say we have an App that contains something like this:

```js
const state = {
  myName: "Alice",
  todos: ["shopping", "cleaning"]
};
```

Now if we wanted to change the name instead of just changing `state.myName` we
would return a new object with just the `myName` property changed:

```js
const newState = {
  myName: "Bob",
  todos: state.todos
};
```

The problem is, this can start to get annoying, let's instead follow Facebook's
method and create an update function that takes
[certain commands](https://facebook.github.io/react/docs/update.html#available-commands)

Here's the basic usage of the file that you'll be creating:

```js
const update = require("./your-file"); // <- this is the file you make;

const state = { name: "Alice", todos: [] };
const nextState = update(state, {
  name: { $set: "Bob" }
});

console.log(nextState.name === "Bob"); // true
console.log(state.todos === nextState.todos); // true
```

More info: https://facebook.github.io/react/docs/update.html#available-commands


## How to do

* Github 나 Gitlab 에 private repository 를 만들어주세요.
* 모든 코드의 변경 과정을 잘 정리해서 commit 해주세요.
  * commit message 도 잘 적어주세요.
* 제한 시간 안에 마무리하신 후 해당 repository 에 needersj@gmail.com 계정을 collaborator(github), members(gitlab, reporter 이상의 권한 필요)로 추가해주신 후, Contact 중인 담당자 이메일로 repository 의 https 주소를 공유해주세요.
* 문제를 다 풀지 못하시더라도 꼭 제출해주세요! 정답보다 문제의 해결 과정과 코드를 보고싶습니다.

## More to do

* 위의 What to do 는 가장 최소로 해야하는 일입니다. 아래 일들은 여력이 된다면 수행해주세요.
* `test.js` 를 보면 , jest 사용을 가정한 test 파일이 있습니다. 가능한 많은 test case 를 통과시켜 주세요 
  * `npm test` 로 확인 가능
  * test case 의 추가 / 변경 / 삭제 등은 모두 자유롭게 해주세요(이유만 남겨주세요).

## Notes

* '얼마나 많은 양을 커버하는가' 보다 '어떻게 문제에 접근하는가' 를 더 중요하게 생각합니다.
* `More to do` 에 있는 것들은 말 그대로 optional 입니다. 더 많은 기능을 추가하기보다 더 읽기 쉽고 자신의 의도를 잘 드러내는 코드에 집중해주세요.

## References

* [kolodny/exercises/update](https://github.com/kolodny/exercises/tree/master/update)
* [kolodny/immutality-helper](https://github.com/kolodny/immutability-helper)
