
let currency = document.querySelector(".currency");
let deposite = document.querySelector(".deposite");
const putBtn = document.querySelector(".put-btn");
let rate;
let currCurrency = 'UAH';

let balance = 0;

putBtn.addEventListener("click", putMoney);

//Daniil
document.querySelector('.USD').onclick(() => {
    changeCurr('USD', currCurrency, currency, balance);
    currCurrency = 'USD';
})
document.querySelector('.EUR').onclick(() => {
    changeCurr('EUR', currCurrency, currency, balance);
    currCurrency = 'EUR';
})
document.querySelector('.UAH').onclick(() => {
    changeCurr('UAH', currCurrency, currency, balance);
    currCurrency = 'UAH';
})
//

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

//Daniil
function changeCurr(currentCurr, changedCur, currency, balance){
    const currencyRate = {
        USD: 36.72,
        EUR: 39.51,
    }
    if (changedCur == 'UAH'){
        currency = `${balance * currencyRate[currentCurr]} ${changeCurrency}`;
        console.log(currency)
    }
    else{
        currency = `${balance * (1/currencyRate[currentCurr])} ${changeCurrency}`
        console.log(currency);
    }
}


function currCalc() {
    console.log("currCalc");
}
function chengePin() {
    console.log("chengePin");
}

function changePinCode(pincode) {
    localStorage.setItem("pin", `${Number(prompt("Введите новый пин-код"))}`);
    pincode = localStorage.getItem("pin");
    console.log(pincode);
    return pincode;
}







