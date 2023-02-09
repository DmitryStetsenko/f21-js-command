let currency = document.querySelector('.currency')
let deposite = document.querySelector('.deposite')
const putBtn = document.querySelector('.put-btn')
let rate ;
let balance = 0;

function auth(){
    console.log('auth')
}
function menu(){
    console.log('menu')
}

function getBalance(){
    console.log('getBalance')
}

function getMoney(){
    console.log('getMoney')
}


function currencyRate(){
rate = currency.value

} 
function putMoney(){   
balance = deposite.value * rate;
console.log(balance);
}

putBtn.addEventListener('click', currencyRate)
putBtn.addEventListener('click', putMoney)


function changeCurr(){
    console.log('changeCurr')
}
function currCalc(){
    console.log('currCalc')
}

function changePinCode (pincode) {
    localStorage.setItem('pin', `${Number(prompt('Введите новый пин-код'))}`);
    let pincode = localStorage.getItem('pin');
    console.log(pincode);
    return pincode;
}