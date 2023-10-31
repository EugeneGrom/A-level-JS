//Literals
const cat = {
    name: 'Mars',
    age: 3,
    sex: 'male',
    hair: {
        color: 'grey',
        length: 'short',
    }
}

const car = {
    brand: 'Toyota',
    model: 'Land Cruiser 200',
    engine: 'Diesel',
    capacity: 3500,
}

const console = {
    brand: 'PlayStation',
    series: 5,
    shortName: 'PS4',
    version: 'blu-ray',
}

//Literals expand
{
    let brand2 = prompt('Введіть марку авто:')

    const car = {
        brand: brand2,
        model: 'Land Cruiser 200',
        engine: 'Diesel',
        capacity: 3500,
        [prompt('')]: prompt(''),
    }

    console.log(car);


    //Literals copy

    const car2 = { ...car }
    car2.madeIn = prompt('Введіть країну збірки авто:');
    console.log(car);
    console.log(car2);
}

//Html tree

const bodyData = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ['Enter a data please'],
                    nextElementSibling: { tagName: 'br' },
                },
                {
                    tagName: 'input',
                    attrs: { type: 'text', id: 'name', },
                },
                {
                    tagName: 'input',
                    attrs: { type: 'text', id: 'surname', },
                }
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'button',
                    children: ['OK'],
                    attrs: { id: 'ok', },
                },
                {
                    tagName: 'button',
                    children: ['Cancel'],
                    attrs: { id: 'cancel', },
                }
            ]
        }
    ]
}

console.log(bodyData);
//Виведіть значення тексту в другій кнопці, використовуючи . та [].
document.write(bodyData.children[1].children[1].children);
//Виведіть значення атрибуту id у другому input, використовуючи . та [].
document.write(bodyData.children[0].children[2].attrs.id);

//Parent
//Додайте кожному об'єкту тега з попереднього завдання зв'язок з батьком,
//використовуючи властивість parent та присвоєння
bodyData.children[0].parent = bodyData;
bodyData.children[1].parent = bodyData;

bodyData.children[0].children[0].parent = bodyData.children[0];
bodyData.children[0].children[1].parent = bodyData.children[0];
bodyData.children[0].children[2].parent = bodyData.children[0];

bodyData.children[0].children[0].nextElementSibling.parent = bodyData.children[0].children[0];
bodyData.children[0].children[1].attrs.parent = bodyData.children[0].children[1];
bodyData.children[0].children[2].attrs.parent = bodyData.children[0].children[2];

bodyData.children[1].children[0].parent = bodyData.children[1];
bodyData.children[1].children[1].parent = bodyData.children[1];

bodyData.children[1].children[0].attrs.parent = bodyData.children[1].children[0];
bodyData.children[1].children[1].attrs.parent = bodyData.children[1].children[1];

console.log(bodyData);

//Change OK
const propertyName = prompt('Введіть властивість, яке хочете додати або змінити');
const propertyValue = prompt('Введіть значення');
bodyData.children[1].children[1][propertyName] = propertyValue;
console.log(bodyData.children[1].children[1]);

//Destructure
//Використовуючи деструктуризацію структури із завдання HTML Tree:
//Виведіть значення тексту у тезі span,
const [textSpan] = bodyData.children[0].children[0].children
console.log(textSpan);
//Виведіть значення тексту в другій кнопці та
const [textButton2] = bodyData.children[1].children[1].children
console.log(textButton2);
//Виведіть значення атрибуту id у другому input.
const { id: idInput2 } = bodyData.children[0].children[2].attrs
console.log(idInput2);

//Destruct array
{
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
    //напишіть код, який використовуючи деструктуризацію покладе:

    const arrNumbersPair = arr.filter(item => typeof item === 'number' && item % 2 === 0);
    const arrNumbersNotPair = arr.filter(item => typeof item === 'number' && item % 2 === 1);
    //Букви в окремий масив
    const arrLetters = arr.filter(item => typeof item === 'string');
    //парні числа в змінні even1, even2,
    const [even1, even2] = arrNumbersPair;
    //непарні в odd1, odd2, odd3,
    const [odd1, odd2, odd3] = arrNumbersNotPair;

    console.log("Even numbers:", even1, even2);
    console.log("Odd numbers:", odd1, odd2, odd3);
    console.log("Letters:", arrLetters);
}
//Destruct string
{
    let arr = [1, "abc"];
    const [number, [s1, s2, s3]] = arr;
    console.log(number, s1, s2, s3);
}
//Destruct 2
{
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{ name: 'Maria' }, { name: 'Nikolay' }]
    }
    //вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2
    const { children: [{ name: name1 }, { name: name2 }] } = obj;
    console.log(name1, name2);
}

//Destruct 3
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 10];
    //вийміть використовуючи деструктуризацію об'єктів два перші елементи та довжину масиву в змінні a, b та length
    const [[a, b], length] = [arr, arr.length];
    console.log(a, b, length);
}

//Copy delete
{
    const cat = {
        name: 'Mars',
        age: 3,
        sex: 'male',
        hair: {
            color: 'grey',
            length: 'short',
        }
    }

    let a = prompt('Введіть ключ, який ви не хочете копіювати:');
    let { [a]: key, ...otherInfo } = cat;

    console.log(otherInfo);
}

//Currency real rate
{
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            let [a, b, c] = [
                prompt('Користувач вводить вхідну валюту:').toUpperCase(),
                prompt('Користувач вводить валюту, в яку відбувається конвертація').toUpperCase(),
                +prompt('Користувач вводить суму у вхідній валюті')];

            if (a in data.rates) { a1 = data.rates[a] } else { return console.log('Невірно введена поточна валюта') };
            if (b in data.rates) { b1 = data.rates[b] } else { return console.log('Невірно введена бажана валюта') };
            c = +c;
            if (isNaN(c)) { return console.log('Невірно введена кількість поточної валюти') }

            const cross = (1 / a1) / (1 / b1);

            // if (typeof c === 'number' && !isNaN(c)) {
            let result = (c * cross);
            console.log(`Вітаємо! Ви придбали ${result.toFixed(2)} ${b} за ${c.toFixed(2)} ${a}!`)
            // } else { console.log('Помилка 3') };
            console.log(data); // Вивчіть структуру, що отримується з сервера в консолі

            //Currency drop down
            let currencies = Object.keys(data.rates);
            let str = "<select>"
            str += currencies.reduce((a, b) => `-- ${a} --<option>-- ${b} --</option>`, '');
            str += "</select>"
            document.write(str) //document.write відобразить ваш HTML на сторінці
        });
}

//Table
{
    const persons = [
        {
            name: 'Марія',
            fatherName: 'Іванівна',
            surname: 'Іванова',
            sex: 'female'
        },
        {
            name: 'Миколай',
            fatherName: 'Іванович',
            surname: 'Іванов',
            age: 15
        },
        {
            name: 'Петро',
            fatherName: 'Іванович',
            surname: 'Іванов',
            married: true
        },
    ]
    //Перший прохід - пошук колонок
    const columnArr = [];
    for (const pers of persons) {
        for (const key in pers) {
            if (!(columnArr.includes(key))) {
                columnArr.push(key)
            };
        }
    }
    //Заголовок
    let str = `<table style='border-collapse: collapse;'>`;
    str += `<tr>`;
    for (let i = 0; i < columnArr.length; i++) {
        str += `<th style='border: 1px solid black; padding: 10px; background-color: lightgrey; font-weight: bold;'>${columnArr[i]}</th>`;
    }
    str += `</tr></table>`;
    document.write(str);
}






