//Vova
localStorage.setItem('links', JSON.stringify(
    {
        id: 1,
        name: 'User1',
        pincode: 1111
    }
));
//

const user = JSON.parse(localStorage.getItem('links')); //Vova
const putBtn = document.querySelector(".put-btn"); //Vova
const changeBtn = document.querySelector(".change-btn"); //Vova
const takeMoneyBtn = document.querySelector('.takeMoneyBtn');
let currency = document.querySelector(".currency");
let deposite = document.querySelector(".deposite");
let pin = user.pincode;//Vova

let rate;
let currCurrency = 'UAH';
let newCurr =' ';

let balance = 0;

putBtn.addEventListener("click", putMoney);

//Daniil
document.querySelector('.USD').addEventListener('click', (() => {
    changeCurr('USD', currCurrency, newCurr, balance);
    currCurrency = 'USD';
    console.log(newCurr);

}));
document.querySelector('.EUR').addEventListener('click',(() => {
    changeCurr('EUR', currCurrency, newCurr, balance);
    currCurrency = 'EUR';
    console.log(newCurr);

}));
document.querySelector('.UAH').addEventListener('click',(() => {
    changeCurr('UAH', currCurrency, newCurr, balance);
    console.log(newCurr);
    currCurrency = 'UAH';
}));
//

//Vova
changeBtn.onclick = function() {
    changePinCode(pin);
}
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

takeMoneyBtn.addEventListener('click', function(){
    getMoney();
})

function getMoney() {
    console.log("getMoney");
    console.log(balance);
    alert('Ваш баланс ' + balance + ' UAH');
    let curencyCheck = prompt('Какую валюту вы хотите снять? (UAH, USD, EUR, GBP)', '');

    if(curencyCheck == 'USD'){
        let balanceUSD = (balance / 40);
        console.log(balanceUSD);
        cash = prompt('Сколько наличных вы хотите снять?', '');
        alert(`Вы хотите снять ${cash} usd`);
        console.log(cash);
        if(cash > balanceUSD){
        alert("Недостаточный баланс");
        } else if (cash <= balanceUSD){
        alert('Возьмите ваши наличные')
        }else{
        alert('ERROR 404');
        }
    
    }else if(curencyCheck == 'UAH'){
        //console.log(currency.uah);
        cash = prompt('Сколько наличных вы хотите снять?', '');
        alert(`Вы хотите снять ${cash} uah`);
        console.log(cash);
        if(cash > balance){
         alert("Недостаточный баланс");
        } else if (cash <= balance){
         alert('Возьмите ваши наличные')
        }else{
            alert('ERROR 404');
        }
    
    }else if(curencyCheck == 'EUR'){
        //console.log(currency.eur);
        let balanceEUR = (balance / 41);
        cash = prompt('Сколько наличных вы хотите снять?', '');
        alert(`Вы хотите снять ${cash} eur`);
        console.log(cash);
        if(cash > balanceEUR){
         alert("Недостаточный баланс");
        } else if (cash <= balanceEUR){
         alert('Возьмите ваши наличные')
        }else{
            alert('ERROR 404');
        }
    
    }else if(curencyCheck == 'gbp'){
        //console.log(currency.gbp);
        let balanceGBP = (balance / 42);
        console.log(balanceGBP);
        cash = prompt('Сколько наличных вы хотите снять?', '');
        alert(`Вы хотите снять ${cash} gbp`);
        console.log(cash);
        if(cash > balanceGBP){
         alert("Недостаточный баланс");
        } else if (cash <= balanceGBP){
         alert('Возьмите ваши наличные')
        }else{
            alert('ERROR 404');
        }
    
    }else{
        console.log('Wrong Curency!!!');
    }

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
        currency = `${balance * currencyRate[currentCurr]} ${changedCur}`;
        balance = balance * currencyRate[currentCurr];
        console.log(currency)
    }
    else{
        currency = `${balance * (1/currencyRate[currentCurr])} ${changedCur}`
        balance = balance * (1/currencyRate[currentCurr]);
        console.log(currency);
    }
}


function currCalc() {
    console.log("currCalc");
}

//Vova
function changePinCode(pincode) {
    localStorage.setItem("pin", `${Number(prompt("Введите новый пин-код"))}`);
    pincode = localStorage.getItem("pin");
    console.log(pincode);
    return pincode;
}
//





