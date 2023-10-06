//Number Age
let year = prompt('Вкажіть поточний рік:');
let age = prompt('Укажіть свій вік:');
let isBirthdayAlready = confirm('У Вас вже було День Народження цього року?');
if (isBirthdayAlready) {
    let birthYear = year - age;
    alert(`Ваш рік народження: ${birthYear}`);
} else {
    let birthYear = year - age - 1;
    alert(`Ваш рік народження: ${birthYear}`);
}

//Number Temperature
let tempC = prompt('Введіть температуру у градусах по Цельсію:');
let convertToF = tempC * 1.8 + 32;
alert(`Ваша вказана температура по Цельсію буде складати по Фаренгейту: ${convertToF}`);

let request = confirm('Ви хочете порахувати температуру з Фаренгейту у Цельсії?');
if (request) {
    let tempF = prompt('Введіть температуру у градусах по Фаренгейту:');
    let convertToC = (tempF - 32) / 1.8;
    alert(`Ваша вказана температура по Фаренгейту буде складати по Цельсію: ${convertToC}`);
}
alert('Дякую за увагу!');

//Number: divide
let firstDigit = prompt('Вкажіть чисельник:');
let secondDigit = prompt('Вкажіть знаменник:');

let result = alert(Math.ceil(firstDigit / secondDigit));

//Number: currency
const rate = prompt('Введіть поточний курс долара:');
let amount = prompt('Введіть кількість гривень/ доларів, яку Ви хочете продати:');

let confirmed = confirm('Ви хочете купити долари?');

if (confirmed) {
    let result = +amount / +rate;
    let resultToFixed = result.toFixed(2);
    alert(`Ви можете купити: ${resultToFixed} дол.`);
} else {
    let result = +amount * +rate;
    let resultToFixed = result.toFixed(2);
    alert(`Ви отримаєте: ${resultToFixed} грн.`);
}

//Number: RGB
let red = +prompt('Введіть значення червоного кольору (від 0 до 255):');
let green = +prompt('Введіть значення зеленого кольору (від 0 до 255):');
let blue = +prompt('Введіть значення синього кольору (від 0 до 255):');

let rr = red.toString(16);
let gg = green.toString(16);
let bb = blue.toString(16);


if (rr.length == 1) {
    rr = (`0${rr}`);
};
if (gg.length == 1) {
    gg = (`0${gg}`);
};
if (bb.length == 1) {
    bb = (`0${bb}`);
};

alert(`# ${rr}${gg}${bb}`)

//Number: flats
let floorCount = +prompt('Введіть кількість поверхів у Вашому будинку:');
let flatCount = +prompt("Введіть кількість квартир на одному поверсі:");

let flatNumber = +prompt("Введіть номер Вашої квартири:");

let flatsInEntrance = floorCount * flatCount;
let whichEntrance = Math.ceil(flatNumber / flatsInEntrance);
let whichFloor = Math.ceil((flatNumber % flatsInEntrance) / flatCount);
let flatInFloor = flatNumber % flatCount;

if (flatInFloor == 0) {
    flatInFloor = flatCount;
}

alert(`Ваша квартира ${flatNumber} знаходиться в ${whichEntrance} під'їзді, 
на ${whichFloor} поверсі (${flatInFloor} квартира на поверсі)`);



