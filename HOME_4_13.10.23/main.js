//Number: odd
//За допомогою prompt дізнайтесь число, 
//введене користувачем. За допомогою if перевірте, 
//чи число коректно перетворено з рядка. 
//У разі помилки виведіть повідомлення 
//Виведіть парне число чи ні, використовуючи if.

let request = +prompt('Введіть число:');
if (typeof (request) === 'number' && !(isNaN(request))) {
    alert('Ви молодець, здолали задачу');

    (request % 2 === 0)
        ? alert('Ви ввели парне число')
        : alert('Ви ввели непарне число');
} else {
    alert('Error');
}

//String: lexics
//Запитайте у користувача текст і перевірте його на наявність некоректного слова
//або кількох некоректних слів.
//Використовуйте метод indexOf (або includes) рядки:

let someWords = prompt('Введіть декілька слів, що приходять одразу на думку:');
if ((someWords.indexOf('блін') < 0) && (someWords.indexOf('мать') < 0)) {
    alert('Ви культурна людина, так тримати!');
} else {
    alert('Потребуєте навичок у самовираженні?');
}

//Boolean, //Boolean: if
{
    let age = confirm('Вам за 30 років?');
    if (age === true) {
        alert('Вам більше 30 років');
    } else {
        alert('Вам 30 або менше років');
    }

    let sex = confirm('Ви чоловік?');
    if (sex === true) {
        alert('Ви таки чоловік');
    } else {
        alert('Ви таки жінка');
    }
}

//Comparison: sizes
{
    let size = prompt('Введіть розмір панчох за європейською або британською системою:');

    if ((size === '') || (size === null)) {
        alert('Ви не ввели розмір');
    } else {
        if ((size >= 0) && (size <= 6)) {
            alert(`Ваш євророзмір у Британії буде: ${8 + (size*0.5) }`);
        } else if ((size >= 8) && (size <= 11)) {
            alert(`Ваш бриторозмір у Європі буде ${(size - 8) / 0.5}`);
        } else {
            alert('Ви ввели невірний розмір');
        }
    }
}

//Ternary
{
    let sex = confirm('Якщо ви чоловік, натисніть ОК, а якщо жінка - Cancel');
    (sex === true)
        ? alert('Ви таки чоловік')
        : alert('Ви таки жінка');
}

//Training
!!2 //true
!!0 //false
!!1 //true
// or
2 || 1 //2
2 || 0 //2 
//and
2 && 1 //1
1 && 2 //2
0 && 2 //0
// or and and difference
0 || 1 || 2 //1
0 && 1 && 2 //0
2 || 1 || 0 //2
2 && 1 && 0 //0
confirm('left') || confirm('right') //true , якщо один з confirm -> OK
confirm('left') && confirm('right') //false , якщо один з confirm -> Cancel
//null, undefined, so on
null || 2 //2
undefined && 1 //indefined

alert("Hello") && confirm('Are you sexy?');
alert("Hello") || confirm('Are you drunk?'); 

//brackets and complex expressions
(undefined || 2) && (3 || 0) //3
    (2 && 1) || (null && 0) //1
        (2 > 1) && "greater" //"greater"
        (2 < 1) && null //false
null && (2 < 1)  //null
// ternary operator
1 ? "one" : "not one" //"one"
0 ? "zero" : "not zero" //"not zero"
"0" ? "\"zero\"" : "not `zero`" //"zero"
parseInt("0") ? 'true' : 'false' //'false'
    ("" || 2) && (3 || "3.5") || (4 && 5) // 3
        (-1 + 1) && "zero" //0

"-1" + 1 && "oups" //OUPS

    (typeof null === 'object') ? "null is object" : "null is null" //"null is object"
// ternary && ||
Math.random() < 0.5 && 'less' || 'more' //Math.random(), якщо значення <0.5 або 'less' - якщо >=0.5

    (a = Math.random()) < 0.5 && 'less: ' + a || 'more: ' + a //якщо менше то перше правило, якщо більше то друге.
    //in for array
    [2, 3, 5, 7, 11].indexOf(7) > -1 ? 'prime' : 'not found' //'prime'

//Prompt: or
//Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert) 
//якщо користувач не введе вік або натисне скасування (тобто prompt видасть порожній рядок або null, 
//що інтерпретується як false).
{
    let year = prompt('Вкажіть поточний рік:');
    let age = prompt('Укажіть свій вік:');
    let isBirthdayAlready = confirm('У Вас вже було День Народження цього року?');

    if ((age === '') || (age === null)) {
        alert('Error! Ви не вказали свій вік!');
    } else {
        if (isBirthdayAlready) {
            let birthYear = year - age;
            alert(`Ваш рік народження: ${birthYear}`);
        } else {
            let birthYear = year - age - 1;
            alert(`Ваш рік народження: ${birthYear}`);
        }
    }
}

//Confirm: or this days
{
    ((confirm('Шопінг?')) && !(alert('Гоу купляти!'))) || (alert('Ти бяка'));
}

//Confirm: if this days
{
    let shopping = confirm('Шопінг?');
    ((shopping === false) || (shopping === null)) ? alert('Ти бяка') : alert('Гоу купляти!');
}

//Default: or
{
    let surname = (prompt('Введіть прізвище')) || ('Іваненко');
    let name = (prompt('Введіть ім\'я')) || ('Петро');
    let middleName = (prompt('Введіть по-батькові')) || ('Юхимович');

    alert(`${surname} ${name} ${middleName}`);
}

//Default: if
{
    let surname = prompt('Введіть прізвище');
    let name = prompt('Введіть ім\'я');
    let middleName = prompt('Введіть по-батькові');

    if ((surname === '') || (surname === null)) {
        surname = 'Іваненко';
    }
    if ((name === '') || (name === null)) {
        name = 'Петро';
    }
    if ((middleName === '') || (middleName === null)) {
        middleName = 'Юхимович';
    }

    alert(`${surname} ${name} ${middleName}`);
}

//Login and password
{
    let login = 'admin';
    let pass = 'qwerty';

    let inputLogin = prompt('Введіть Ваш логін:');
    if (inputLogin === login) {
        let inputPass = prompt('Введіть Ваш пароль:');
        if (inputPass === pass) {
            alert('Вітаємо, користувач!');
        } else {
            alert('Ви ввели невірний пароль');
        }
    } else {
        alert('Ви ввели невірний логін')
    }
}

//Currency exchange 
{
    const text = 'Введіть валюту у скороченому форматі (3 літери):';
    let [curr1, curr2, curr3] = [prompt(text).toLowerCase(), prompt(text).toLowerCase(), prompt(text).toLowerCase()];

    let confirm = confirm('Якщо Ви бажаєте купити валюту, натисніть ОК, а якщо ні - Cancel:');
}

