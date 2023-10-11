//String: greeting
{
    let name = prompt('Як Вас звуть?');
    alert(`Вітаю, ${name}`);
}

//String: gopni4ek
{
    let str1 = prompt('Чим ти сьогодні займався?');
    let str2 = str1.split(',');
    let str3 = str2.join(' блін, ');
    alert(str3);
}

//String: capitalize
{
    let str = "cANBerRa"
    let result;
    let lowerCase = str.toLowerCase();
    let splitted = lowerCase.split('');
    splitted[0] = lowerCase[0].toUpperCase();
    result = splitted.join('');
    console.log(result); //Canberra
}

//String: word count
{
    let str = prompt('Напишіть декілька слів про себе:');
    let strArray = str.split(' ');
    let wordCount = strArray.length;
    alert(`У Вашому повідомленні ${wordCount} слів`);
}

//String: credentials
{
    let arr = [];
    arr[0] = prompt('Введіть своє прізвище :').trim();
    arr[1] = prompt('Введіть своє ім\'я :').trim();
    arr[2] = prompt('Введіть своє по-батькові :').trim();
    console.log(arr);

    let result = (array) => {
        for (let i = 0; i < 3; i++) {
            let firstPart = array[i].charAt(0).toUpperCase();
            let secondPart = array[i].toLowerCase().slice(1);
            array[i] = (firstPart + secondPart);
        };
        return array.join(' ');
    };
    result(arr);
}

//String: beer
{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками";
    let result;
    let strArray = str.split(' ');
    strArray[4] = 'чай';
    result = strArray.join(' ');

    console.log(result); //"Було жарко. Василь пив чай уприкуску з креветками"
}

//String: no tag
let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let result;
let tagOpen = str.indexOf('<');
let tagClose = str.indexOf('>');
result = str.slice(0, tagOpen - 1) + str.slice(tagClose + 1, str.length);

console.log(result); //якийсь текст, в якому є один тег і всяке інше

//String: big tag
{
    let str = "якийсь текст у якому є один тег <br /> і всяке інше";
    let result;
    let tagOpen = str.indexOf('<');
    let tagClose = str.indexOf('>');
    let bigTag = str.slice(tagOpen, tagClose + 1).toUpperCase();
    result = str.slice(0, tagOpen) + bigTag + str.slice(tagClose + 1, str.length);

    console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше
}

//String: new line
//Попросіть користувача ввести рядок черезprompt. prompt не дозволяє вводити рядкові рядки. 
//Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
//Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть в консоль або через alert.
{
    let str = prompt('Введіть текст, і в тих місцях, де ви хочете перенести текст на нову строку - напишіть \\n');
    let splittedStr = str.split('\\n');
    let result = splittedStr.join('\n');

    console.log(result);
}