// 원본 보존 오름차순 정렬
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
const copy = [...ARR1];
copy.sort((a, b) => a - b);
console.log(ARR1, copy);

const arr1  = [...ARR1];
const result1 = arr1.sort((a, b) => { return a - b });
console.log(ARR1, result1);


// 짝수 홀수 분리 각각 새로운 배열
const ARR2 = [5,7,3,4,5,1,2];
const even = ARR2.filter((item) => item % 2 === 0);
const odd = ARR2.filter((item) => item % 2 === 1);
// const odd = ARR2.filter((item) => item % 2 !== 0);
console.log(even, odd);


const ARR3 = [5,7,3,4,5,1,2,0];
console.log(ARR3.map(val => val % 3));

const arr3 = ARR3.map(num => num % 3);
console.log(arr3);

// ----------------------------
const arr4 = [5,7,3,4,5,1,2,0];
const result3 = test(arr4);
console.log(arr4, result3);

function test(arr) {
  return arr.sort((a, b) => a - b);
}