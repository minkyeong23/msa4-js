// async/await

const timePromise = (str, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      if(typeof str === 'string') {
        console.log(str);
        resolve('성공');
      } else {
        reject(new Error('실패'))
      }
    }, ms);
  });
}
// Promise.all( 
//   [
//   timePromise('A', 1000),
//   timePromise('B', 1000),
//   timePromise('C', 1000)
//   ]
// )
// .then(() => console.log('모든 작업완료'));

async function test() {
  try {
    await timePromise('A', 1000);
    await timePromise('B', 1000);
    await timePromise('C', 1000);
    await timePromise(1, 1000);
  } catch(error) {
    console.log(error);
  }
}

test();