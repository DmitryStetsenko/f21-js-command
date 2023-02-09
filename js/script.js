let currency = document.querySelector(".currency");
let deposite = document.querySelector(".deposite");
const putBtn = document.querySelector(".put-btn");
let rate;
let balance = 0;

function auth() {
  console.log("auth");
}
function menu() {
  console.log("menu");
}

function getBalance() {
  console.log("getBalance");
}

function getMoney() {
  console.log("getMoney");
}


function putMoney() {
  rate = currency.value;
  balance = deposite.value * rate;
  console.log(balance);
}


putBtn.addEventListener("click", putMoney);

function changeCurr() {
  console.log("changeCurr");
}
function currCalc() {
  console.log("currCalc");
}
function chengePin() {
  console.log("chengePin");
}
