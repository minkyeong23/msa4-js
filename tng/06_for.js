for(let i = 0; i < 5; i++) {
  // console.log('*****');
  let d = "";
  for(let z = 1; z <= 5; z++) {
    d += "*";
  }
  console.log(d);
}

let st = '';
for(let p = 1; p <= 5; p++) {
  st += '*';
  console.log(st);
}

for(let a = 0; a < 5; a++) {
  let s = "";
  for(let g = 0; g <= a; g++) {
    s += "*"; // s = s.concat('*');
  }  
  console.log(s);
}  

for (let ii = 0; ii < 5; ii++) {
  let space = '';
  for(let zz = 5; zz > ii + 1; zz--) {
    space += ' ';
  }
  
  let star = '';
  for(let y = 0; y <= ii; y++){
    star += '*';
  }
  
  console.log(`${space}${star}`);
}