// Viacheslav
authorization();

//Vova
localStorage.setItem(
  "links",
  JSON.stringify({
    id: 1,
    name: "User1",
    pincode: 1111,
  })
);
//

const user = JSON.parse(localStorage.getItem("links")); //Vova
const putBtn = document.querySelector(".put-btn"); //Vova
const changeBtn = document.querySelector(".change-btn"); //Vova
const takeMoneyBtn = document.querySelector(".takeMoneyBtn");
const takeMoneyBtn2 = document.querySelector(".takeMoneyBtn2");
let currency = document.querySelector(".currency");
let deposite = document.querySelector(".deposite");
let pin = user.pincode; //Vova
const putMoneyBlock = document.querySelector(".put-money-block");

let rate;
let changedCur = "UAH";
let newCurr = " ";
let displayBalance = document.querySelector(".balance");

let balance = 0;

putBtn.addEventListener("click", putMoney);

//Daniil
document.querySelector(".USD").addEventListener("click", () => {
  changeCurr( "USD",changedCur,  newCurr, balance);
  changedCur = "USD";
  console.log(newCurr);
  
});
document.querySelector(".EUR").addEventListener("click", () => {
  changeCurr( "EUR", changedCur, newCurr, balance);
  changedCur = "EUR";
  console.log(newCurr);
});
document.querySelector(".UAH").addEventListener("click", () => {
  changeCurr("UAH", changedCur,  newCurr, balance);
  console.log(newCurr);
  changedCur = "UAH";
});
//

//Vova
changeBtn.onclick = function () {
  changePinCode(pin);
};
//

// Maxym

const crrncy = {
  EUR: { UAH: 40, USD: 0.83, GBP: 0.7 },
  USD: { UAH: 41, EUR: 1.2, GBP: 0.7 },
  UAH: { EUR: 0.024, USD: 0.023, GBP: 0.022 },
  GBP: { UAH: 45, USD: 1.3, EUR: 1.4 },
};

const btn = document.querySelector(".calculate-btn");
const baseCurrencyInput = document.getElementById("currency-1");
const secondCurrencyInput = document.getElementById("currency-2");
const amountInput = document.getElementById("amount");
const toShowAmount = document.querySelector(".given-amount");
const toShowBase = document.querySelector(".base-currency");
const toShowSecond = document.querySelector(".second-currency");
const toShowResult = document.querySelector(".final-result");
const putMoneyBtn = document.querySelector(".put-money-btn");
// Maxym

function auth() {
  console.log("auth");
}
function menu() {
  console.log("menu");
}

function getBalance() {
  console.log("getBalance");
}

takeMoneyBtn.addEventListener("click", function () {
  getMoney();
});
takeMoneyBtn2.addEventListener("click", function () {
  getMoney();
});

function getMoney() {
  console.log("getMoney");
  console.log(balance);
  alert("Ваш баланс " + balance + " UAH");
  let curencyCheck = prompt(
    "Какую валюту вы хотите снять? (UAH, USD, EUR, GBP)",
    ""
  );

  if (curencyCheck == "USD") {
    let balanceUSD = balance / 40;
    console.log(balanceUSD);
    cash = prompt("Сколько наличных вы хотите снять?", "");
    alert(`Вы хотите снять ${cash} usd`);
    console.log(cash);
    if (cash > balanceUSD) {
      alert("Недостаточный баланс");
    } else if (cash <= balanceUSD) {
      alert("Возьмите ваши наличные");
      dollarBill = cash * 40;
      balance = balance - dollarBill;
      displayBalance.innerText = balance;
    } else {
      alert("ERROR 404");
    }
  } else if (curencyCheck == "UAH") {
    //console.log(currency.uah);
    cash = prompt("Сколько наличных вы хотите снять?", "");
    alert(`Вы хотите снять ${cash} uah`);
    console.log(cash);
    if (cash > balance) {
      alert("Недостаточный баланс");
    } else if (cash <= balance) {
      alert("Возьмите ваши наличные");
      balance = balance - cash;
      displayBalance.innerText = balance;
    } else {
      alert("ERROR 404");
    }
  } else if (curencyCheck == "EUR") {
    //console.log(currency.eur);
    let balanceEUR = balance / 41;
    cash = prompt("Сколько наличных вы хотите снять?", "");
    alert(`Вы хотите снять ${cash} eur`);
    console.log(cash);
    if (cash > balanceEUR) {
      alert("Недостаточный баланс");
    } else if (cash <= balanceEUR) {
      alert("Возьмите ваши наличные");
      euroBill = cash * 41;
      balance = balance - euroBill;
      displayBalance.innerText = balance;
    } else {
      alert("ERROR 404");
    }
  } else if (curencyCheck == "gbp") {
    //console.log(currency.gbp);
    let balanceGBP = balance / 42;
    console.log(balanceGBP);
    cash = prompt("Сколько наличных вы хотите снять?", "");
    alert(`Вы хотите снять ${cash} gbp`);
    console.log(cash);
    if (cash > balanceGBP) {
      alert("Недостаточный баланс");
    } else if (cash <= balanceGBP) {
      alert("Возьмите ваши наличные");
      phuntBill = cash * 41;
      balance = balance - phuntBill;
      displayBalance.innerText = balance;
    } else {
      alert("ERROR 404");
    }
  } else {
    console.log("Wrong Curency!!!");
  }
}

//<olesia>

function putMoney() {
  rate = currency.value;
  balance += deposite.value * rate;
  deposite.value = "";
  displayBalance.innerText = balance;
}
putMoneyBtn.onclick = () => {
  putMoneyBlock.classList.remove("none");
};

//</olesia>

//Daniil
function changeCurr(currentCurr, changedCur, currency, balance) {
  const currencyRate = {
    USD: 36.72,
    EUR: 39.51,
  };
  if (changedCur == "UAH") {
    currency = `${balance * currencyRate[currentCurr]} ${changedCur}`;
    balance = balance * currencyRate[currentCurr];
    console.log(currency);
    displayBalance.innerHTML = `${currency} `
  } else {
    currency = `${balance * (1 / currencyRate[currentCurr])} ${changedCur}`;
    balance = balance * (1 / currencyRate[currentCurr]);
    console.log(currency);
    displayBalance.innerHTML = `${balance} ${currency} `
  }
}

// Maxym

function currCalc(event) {
  event.preventDefault();
  let amount = amountInput.value;
  let from = baseCurrencyInput.value;
  let to = secondCurrencyInput.value;
  let letresult = 0;

  try {
    if (from == to) {
      result = amount;
    } else {
      result = amount * crrncy[from][to];
    }
  } catch (err) {
    result = amount * (1 / crrncy[to][from]);
  }

  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + " = ";
  toShowSecond.textContent = to;
  toShowResult.textContent = result;
}

btn.addEventListener("click", currCalc);

// Maxym

//Vova
function changePinCode(pincode) {
  localStorage.setItem("pin", `${Number(prompt("Введите новый пин-код"))}`);
  pincode = localStorage.getItem("pin");
  console.log(pincode);
  return pincode;
}
//

// Viacheslav
function authorization() { 
	const attempt = 3;
	for (let i = 1; i <= attempt; i++) { 
		const pinCode = 1234;
		const pinInput = prompt('Введіть пін-код:');
		if (pinInput == pinCode) {
			alert('Вітаємо!');
			// ======= function "MENU" ========
			break
		} else { 
			if (i == 2 || i == 1) {
				alert(`Ви ввели не вірний пін-код!!!\nЗалишилося спроб - ${attempt - i}`);
			} else { 
				alert('Ви 3 рази ввели не вірний пін-код !!!\nВашу карту заблоковано !!!');
			}
		}
	}
}