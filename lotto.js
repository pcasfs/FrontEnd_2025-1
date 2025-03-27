function randomNum() {
  let array = [];
  while (array.length < 6) {
    let num = parseInt(Math.random() * (45 - 1) + 1);
    if (!array.includes(num)) {
      array.push(num);
    }
  }
  return array.sort((a, b) => a - b); //오름차순 정렬
}

console.log(randomNum());
