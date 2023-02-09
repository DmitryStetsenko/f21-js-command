let balance = 1000;
let currency = 'uah';

while (true) {
    const userChoose = prompt('1. balance, 2.get money, 3.put money, 4.exit');
    if (userChoose == '1') {
        getBalance();
    } else if (userChoose == '2') {
        getMoney();
    } else if (userChoose == '3') {
        putMoney()
    } else if (userChoose == '4') {
        break;
    } else {
        alert('Error type');
    }
}


function getBalance() {
    alert(balance);
}
function getMoney() {
    alert('getMoney');
}
function putMoney() {
    alert('putMoney');
}
