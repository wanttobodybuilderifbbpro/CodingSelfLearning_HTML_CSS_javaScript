## TIL pertaining to CSS

+ CSS 특징
  - 기본 스타일 시트는 웹 브라우저에 기본으로 내장된 스타일 시트
  - 적용 우선순위는 같은 태그에 스타일 속성이 중복으로 작성됐을 때, 어느 속성을 적용할지 결정하는 기준. 개별성 규칙의 점수에 따라 계산됨.
  - **상속**은 부모 요소의 속성을 자식 요소가 물려받는 것을 말함.
  - CSS에는 px, em, rem, #, WW, vh와 같은 다양한 단위가 있음.
  - 색상 표기법에는 키워드 표기법과 RGB표기법, HEX표기법이 있음. 
  
+ 박스 모델
  - 박스 모델은 모든 태그가 사각형 모양으로 구성되어 있음. 박스 모델은 ```margin```,  ```border```,  ```paddingn```, ```cont``` 영역으로 구성되며 각 영역마다 영역을 제어하는 속성이 있음. 


+ 배경 속성
  - 요소의 배경을 제어하는 속성.

+ 위치 속성
  - 요소를 기본 흐름에서 벗어나 원하는 곳에 배치하기 위한 속성.
  
+ 전환 효과 속성
  - 어떤 속성의 값이 다른 값으로 변경되는 것을 전환이라고 하며, 이런 효과를 지정하는 속성들을 전환 효과 속성이라고 함. 

+ 애니메이션 속성
  - 애니메이션 속성은 ```HTML``` 요소에 적용된 스타일을 다른 스타일로 부드럽게 전환하게 한다. 전환 효과 속성과 비슷하지만, 세부적으로 더 많은 기능을 내포하고 있다.

+ 변형 효과 속성
  - 어떤 요소에 위치 이동, 회전, 확대, 축소, 기울이기와 같은 효과를 지정해 변형하는 속성.
  - ```transform``` 속성을 사용하며 속성값에 변형 효과를 나타내는 함수를 지정함. 
  - 변형 효과의 기준점을 변경할 때는 ```transform-origin``` 속성을 사용함. 