// //Calc
// let gasPerMonth = 25;
// const gasTransport = 4;
// let gasTotal = gasPerMonth + gasTransport;

// let electricity = +prompt('Введіть кількість спожитих кВт у міс. :');
// let electricityTotal = electricity * 2.64;

// let internetCost = +prompt('Введіть місячний тарифний план домашнього інтернету, грн. :');
// const water = 500;

// let total = gasTotal + electricityTotal + internetCost + water;
// alert(`Ваші місячні витрати за комунальні послуги складають: ${total} грн.`);


//Завдання на синій пояс
const credentials = {
    login: 'admin',
    password: 'qwerty',
};

var login = document.getElementById('login');
var pass = document.getElementById('pass');
var DIV = document.getElementsById('command');


if (login == credentials.login) & (pass == credential.password) {
    DIV.style.display = 'block';
}

