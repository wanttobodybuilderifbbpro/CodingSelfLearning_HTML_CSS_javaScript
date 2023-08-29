const array = [10, 120, 30, 50, 20];
array.sort(function(a,b){
  if(a < b) {
    return 1;
  } else if (a > b){
    return -1;
  } else {
    return 0;
  }
})

console.log(array[0]);

//Array의 sort() 메서드를 이용해서 배열을 내림차순으로 정렬하고 제일 첫 번째 인덱스의 요소를 출력하게 하는 방법임. 