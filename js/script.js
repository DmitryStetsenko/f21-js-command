let currCurrency = 'UAH';
function changeCurrency(currentCurr, changedCur, currency, balance){
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

document.querySelector('.USD').onclick(() => {
    changeCurrency('USD', currCurrency, currency, balance);
    currCurrency = 'USD';
})
document.querySelector('.EUR').onclick(() => {
    changeCurrency('EUR', currCurrency, currency, balance);
    currCurrency = 'EUR';
})
document.querySelector('.UAH').onclick(() => {
    changeCurrency('UAH', currCurrency, currency, balance);
    currCurrency = 'UAH';
})
