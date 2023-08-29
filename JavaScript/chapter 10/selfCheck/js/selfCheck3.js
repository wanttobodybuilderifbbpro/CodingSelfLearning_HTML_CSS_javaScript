const BMI_calculator = (height, weight) => {
  const h = height / 100;
  const bmi = weight / (h * h);
  if(bmi > 25){
    return "Obese";
  } else if(bmi > 24 && bmi <= 25){
    return "overweight";
  } else if(bmi > 18.5 && bmi <= 23){
    return "normal";
  } else{
    return "underweight";
  }
}

const bmi = BMI_calculator(100, 70);

console.log("BMI is : " + bmi);

/* 
Tips: 키는 cm 단위로 전달받으니까 100으로 나눠서 m 단위로 변환하고, 문제에 주어진 
BMI 공식에 따라서 키를 제곱하고 이 값으로 몸무게를 나누어 BMI를 구함 
이때, 조건문을 사용하여 조건(BMI 점수)에 따른 결과를 반환(console.log)하게 하면 됨 */ 