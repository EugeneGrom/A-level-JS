//Calc
let gasPerMonth = 25;
const gasTransport = 4;
let gasTotal = gasPerMonth + gasTransport;

let electricity = +prompt('Введіть кількість спожитих кВт у міс. :');
let electricityTotal = electricity * 2.64;

let internetCost = +prompt('Введіть місячний тарифний план домашнього інтернету, грн. :');
const water = 500;

let total = gasTotal + electricityTotal + internetCost + water;
alert(`Ваші місячні витрати за комунальні послуги складають: ${total} грн.`);

