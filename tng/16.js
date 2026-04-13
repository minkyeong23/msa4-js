const btn = document.querySelector('#btn');
btn.addEventListener('click', () =>{
  alert('안녕하세요.\n숨어있는 div를 찾아주세요.');
});

const hidden = box => box.style.backgroundColor === 'transparent';

const box = document.querySelector('.box');
box.addEventListener('mouseenter', () => {
  if(hidden(box)) {
  alert('두근두근');
  }
});

box.addEventListener('click', () => {
  if(hidden(box)) {
  alert('들켰다');
  box.style.backgroundColor = '#8282f1';
  } else {
  alert('숨는다');
  box.style.backgroundColor = 'transparent';
  }
});

