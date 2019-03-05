# Quest 02. Hello, CSS


## Introduction
* CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics
* CSS 기초 문법
* CSS를 HTML에 적용하는 세 가지 방법
  * Inline Style
  * `<style>`
  * `<link rel="stylesheet" href="...">`
* 레이아웃을 위해 몇 가지 중요한 속성들
  * `position`
  * `left`/`top`
  * `display`
  * `width`/`height`
  * `display: flex;`
  * `display: grid;`
  * CSS Box Model
* 브라우저별 Developer tools

## Resources
* [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
* [모던 웹 디자인을 위한 HTML5+CSS3 입문](http://www.yes24.com/24/Goods/15683538?Acode=101), 한빛미디어
* [웹 디자인 2.0 고급 CSS](http://www.yes24.com/24/Goods/2808075?Acode=101), 에이콘출판사
* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist
* CSS를 HTML에 적용하는 세 가지 방법의 장단점은 무엇인가요?
  * Inline Style -> HTML 태그의 style 속성에 CSS 코드를 넣는 방법입니다.
    * 여러 tag에 한번에 적용이 안됨. 직관적으로 보기에는 좋음. 가능한 사용하지 않는것이 좋음..
  * `<style>` -> HTML 문서 안의 `<style>`과 `</style>` 안에 CSS 코드를 넣는 방법입니다.
    * HTML 문서 안의 여러 요소를 한번에 꾸밀 수 있다는 장점, 또 다른 HTML 문서에는 적용할 수 없다는 단점 
  * `<link rel="stylesheet" href="...">` -> 별도의 CSS 파일을 만들고 HTML 문서와 연결하는 방법입니다.
    * 이 방법의 장점은 여러 HTML 문서에 사용할 수 있다는 것, style.css를 적용시키고 싶은 문서에 `<link>` 태그로 연결만 해주면 됩니다. -> 가장 최선의 방법
* 여러 개의 CSS 규칙이 한 개의 대상에 적용될 때, 어떤 규칙이 우선순위를 가지게 되나요?
  * CSS => Cascading StyleSheet. 즉 가장 마지막에 선언된 규칙이 적용된다.
  * 만약 !important 가 적용된 규칙이 있다면, 그 규칙이 적용된다
* 어떤 박스가 `position: absolute;`인 속성을 갖는다면, 그 위치의 기준점은 어디가 되나요?
  * 가장 가까운 곳에 위치한 조상 엘리먼트에 상대적으로 위치가 지정 -> "위치가 지정된" 엘리먼트는 position이 static으로 지정되지 않은 엘리먼트
* 가로나 세로로 여러 개의 박스가 공간을 채우되, 그 중 한 개의 박스만 가변적인 크기를 가지고 나머지 박스는 고정된 크기를 갖게 하려면 어떻게 해야 할까요?
  * flex 이용
  * 박스들을 display: flex; 를 가진 레퍼로 감싼다.
  * 고정된 크기의 박스는 flex: none; 를, 가변 크기의 박스에는 flex: auto; 를 선언한다.
* `float` 속성은 왜 좋지 않을까요?
  * 페이지 흐름의 일부로 남아 엘리먼트가 '뜬' 상태를 표현
  * 흐름에서 제거되는 absolute와 달리 위치 지정에 영향을 줌.
  * 따라서 float를 이용한 레이아웃을 작성할때, 부모 요소가 자식 요소의 크기를 반영하지 못하는 문제가 생기게 된다.
* Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
  * Flex가 1차원 레이아웃이라면 Grid는 2차원 레이아웃.
  * 즉 flex는 레이아웃을 다룰때 한번에 하나의 차원 ( 행이나 열 )만을 다루고, grid는 행과 열을 한번에 조절한다.
  * 아무래도 사용성에서는 flex보다는 grid가 훨씬 강력한 기능이라고 생각.
  * 하지만, 브라우져 지원에 대해서는 flex보다 grid가 지원이 잘 안되고 있음. 2019년 3월 기준. https://caniuse.com/#search=grid, https://caniuse.com/#search=flex

## Quest
* 아래의 그림들은 모두 전체적으로 창의 크기에 꽉 차야 하며, 창의 크기가 일정 크기 이상일 경우 전체 창 크기가 어떻게 바뀌되더라도 그림에 맞게 각 박스의 크기가 조절되어야 합니다.
* **주의사항**
  * HTML 파일은 수정하면 안됩니다.
  * `float` 속성과 `calc()`함수를 사용하지 않고 해 보세요!
* [이 그림](layout1.png)을 Flexbox를 쓰지 않고 구현해 보세요. `skeletons/layout1.html` 파일에 링크된 `skeletons/layout1.css` 파일을 수정하면 됩니다.
* [이 그림](layout2.png)을 Flexbox를 쓰지 않고 구현해 보세요. `skeletons/layout2.html` 파일에 링크된 `skeletons/layout2.css` 파일을 수정하면 됩니다.
* [이 그림](layout3.png)을 Flexbox를 쓰지 않고 구현해 보세요. `skeletons/layout3.html` 파일에 링크된 `skeletons/layout3.css` 파일을 수정하면 됩니다.
* 위의 세 번째 그림을 Flexbox를 써서 구현해 보세요. `skeletons/layout4.html` 파일에 링크된 `skeletons/layout4.css` 파일을 수정하면 됩니다.
* 위의 세 번째 그림을 CSS Grid를 써서 구현해 보세요. `skeletons/layout5.html` 파일에 링크된 `skeletons/layout5.css` 파일을 수정하면 됩니다.
