const game = document.createElement('li');
game.textContent = '장기';

const ul = document.querySelector('#ul');
const apple = document.querySelector('#apple');
ul.appendChild(game);
ul.insertBefore(game, apple);

const backcolor = document.querySelector('li:nth-child(10)');
backcolor.setAttribute('style', 'background-color: beige;');

const color = document.querySelectorAll('#ul li');
color.forEach((item, key) => {
  if(key % 2 === 0) {
    item.style.color = 'blue';
  } else {
    item.style.color = 'red';
  }
})



// // 정답
//  const parentUl = document.querySelector('#ul');

// // 1. '사과 게임' 위에 '장기' 콘텐츠를 가진 li 태그 삽입
// // 넣을 위치 지정할노드 선택
// const appleLi = document.querySelector('#apple');
// //새로운 노드(장기 li) 생성
// const newKoreachess = document.createElement('li');
// newKoreachess.textContent = '장기';
// // '장기' 노드 삽입
// parentUl.insertBefore(newKoreachess, appleLi);

// // 2. '어메이징브릭'에 베이지 배경색 추가
// const ulChildeList = document.querySelectorAll('#ul > li');
// ulChildeList.forEach(item =>  {
//  if(item.textContent === '어메이징브릭') {
//  item.style.backgroundColor = 'beige';
//  }
// });

// // 3. 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정
// ulChildeList.forEach((item, key) =>{
//   // 인덱스가 0부터 시작하니까 +1해서 사용
//   if((key + 1) % 2 === 0) {
//     item.style.color = 'red';
//   } else {
//     item.style.color = 'blue';
//   }
// });

// function setLineColor() {
//   try {
//   const ulChildeList = document.querySelectorAll('#ul > li');
//   if(ulChildeList && ulChildeList.length === 0){
//     throw new Error('노드 없음');
//   }
//   ulChildeList.forEach((item, key) =>{
//   // 인덱스가 0부터 시작하니까 +1해서 사용
//   if((key + 1) % 2 === 0) {
//     item.style.color = 'red';
//   } else {
//     item.style.color = 'blue';
//   }
// });
//   } catch(err){
//     console.log(err);
//   }
// }
// setLineColor();

// // 요소 추가시 주의 사항
// const starcreft = document.createElement('li');
// starcreft.textContent = '스타';
// parentUl.insertBefore(starcreft, appleLi);
// setLineColor();
