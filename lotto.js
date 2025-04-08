let pcArray = [];
const createNum = document.querySelector(".num-create-btn");
createNum.disabled = true;

createNum.style.background = "#A0B3E0";

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

function lotto() {
  const winningNum = randomNum();
  create(winningNum);
  showResult(winningNum);
}

function create(winningNum) {
  const wrapperResult = document.createElement("div");
  wrapperResult.className = "wrapper-result";

  const winResult = document.createElement("div");
  winResult.className = "winning-result";
  winResult.innerText = "당첨 결과 확인";

  const weekResult = document.createElement("div");
  weekResult.className = "winning-result-text1";
  weekResult.innerText = "이번 주 당첨 번호:";

  const wrapperBall = document.createElement("div");
  wrapperBall.className = "wrapper-ball";

  winningNum.forEach((num, index) => {
    const ball = document.createElement("div");
    ball.className = `ball ball-0${index + 1}`;

    const ballNum = document.createElement("div");
    ballNum.className = "ball-number";
    ballNum.innerText = num;

    ball.appendChild(ballNum); //밑에거랑 순서 바뀌면 안됨
    wrapperBall.appendChild(ball);
  });

  wrapperResult.appendChild(winResult);
  wrapperResult.appendChild(weekResult);
  wrapperResult.appendChild(wrapperBall);

  const plusResult = document.querySelector(".plus-result-01");
  plusResult.innerHTML = ""; //초기화
  plusResult.appendChild(wrapperResult);
}

function purchase() {
  // pcArray = [];

  const ea = document.querySelector("#purchase-ea").value;

  const price = document.querySelector(".total-price");
  if (ea > 0) {
    price.innerText = `총 금액: ${(
      ea * 1000
    ).toLocaleString()}원 (1장당 1,000원)`;
  }

  for (let i = 0; i < ea; i++) {
    createNum.disabled = false;
    if (!createNum.disabled) {
      createNum.style.background = "#4B89DC";
    }
    let pcArray2 = [];

    while (pcArray2.length < 6) {
      let num = parseInt(Math.random() * (45 - 1) + 1);
      if (!pcArray2.includes(num)) {
        pcArray2.push(num);
      }
    }

    pcArray2.sort((a, b) => a - b);
    pcArray.push(pcArray2);
  }
  pcShow(pcArray);
  if (pcArray.length === 0) {
    alert("로또를 구매해주세요");
  }
}

function pcShow(pcNum) {
  if (pcArray.length > 0) {
    const wrapperResult = document.createElement("div");
    wrapperResult.className = "wrapper-result";
    const text2 = document.createElement("div");
    text2.className = "winning-result-text2";
    text2.innerText = "내가 구매한 번호:";

    wrapperResult.appendChild(text2);

    pcNum.forEach((lottoNumbers) => {
      const wrapperBall = document.createElement("div");
      wrapperBall.className = "wrapper-ball";

      lottoNumbers.forEach((num, index) => {
        const ball = document.createElement("div");
        ball.className = `ball ball-0${index + 1}`;

        const ballNum = document.createElement("div");
        ballNum.className = "ball-number";
        ballNum.innerText = num;

        ball.appendChild(ballNum);
        wrapperBall.appendChild(ball);
      });
      wrapperResult.appendChild(wrapperBall);

      const identify = document.createElement("div");
      identify.className = "show-winning-result1";
      identify.innerText = "";

      wrapperResult.appendChild(identify);
    });
    const plusResult2 = document.querySelector(".plus-result-02");
    plusResult2.innerHTML = "";
    plusResult2.appendChild(wrapperResult);
  }
}

function showResult(winningNum) {
  if (pcArray.length === 0) {
    alert("로또를 구매해주세요");
  }

  const matchResult = document.querySelectorAll(".show-winning-result1");
  //document.querySelectorAll()이 NodeList를 반환
  for (let i = 0; i < pcArray.length; i++) {
    let count = 0;
    for (let j = 0; j < 6; j++) {
      if (winningNum.includes(pcArray[i][j])) {
        count++;
      }
    }
    if (count === 6) {
      matchResult[i].innerText = `결과:${count}개 일치- 당첨`;
    } else {
      matchResult[i].innerText = `결과:${count}개 일치`;
    }
  }
  // console.log(matchResult);
  // console.log(matchResult[0]);
}
