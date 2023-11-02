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

            let result = (c * cross);
            console.log(`Вітаємо! Ви придбали ${result.toFixed(2)} ${b} за ${c.toFixed(2)} ${a}!`)
            console.log(data); // Вивчіть структуру, що отримується з сервера в консолі

            //Currency drop down
            let currencies = Object.keys(data.rates);
            let str = "<select>"
            str += currencies.reduce((a, b) => `-- ${a} --<option>-- ${b} --</option>`, '');
            str += "</select>"
            document.write(str) //document.write відобразить ваш HTML на сторінці
        });
}

//Currency table
{
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            let keys = Object.keys(data.rates);
            let values = Object.values(data.rates);
            let arr = ['', ...keys];
            console.log(values);

            let arrays = [];
            for (let i = 0; i < keys.length; i++) {
                let item = [keys[i]];
                for (let j = 1; j <= keys.length; j++) {
                    let res = (values[i] / values[j - 1]).toFixed(6);
                    if ((values[i] % values[j - 1]) === 0) {
                        res = (values[i] / values[j - 1]).toFixed(0);
                    }
                    item.push(res);
                };
                arrays.push(item);
            }

            let str = `<table style='border-collapse: collapse;'>`;
            str += `<tr>`;
            for (let i = 0; i < arr.length; i++) {
                str += `<th style='border: 1px solid black; padding: 10px; background-color: lightgrey; font-weight: bold;'>${arr[i]}</th>`;
            }
            str += `</tr>`;
            str += `<tr>`;
            for (let j = 0; j < arrays.length; j++) {
                str += `<tr>`;
                for (let k = 0; k < arrays[j].length; k++) {
                    (k === 0)
                        ? str += `<td style='border: 1px solid black; padding: 10px; font-weight: bold;'>${arrays[j][k]}</td>`
                        : str += `<td style='border: 1px solid black; padding: 10px;'>${arrays[j][k]}</td>`;
                }
                str += `</tr>`;
            }
            str += `</tr></table>`;
            document.write(str);

            console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
        })
}

//Form
{
    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
    }

    let form = `<form>`;
    for (const props in car) {
        form += `<label>${props}: <input type="${typeof car[props]}" value="${car[props]}"/></label> <br /><br />`

        if (car[props] === true) {
            form = form.replace(`<input type="${typeof car[props]}"`, `<input type="checkbox" checked`);
        } else if (car[props] === false) {
            form = form.replace(`<input type="${typeof car[props]}"`, `<input type="checkbox"`);
        }
    }
    form += `</form>`;

    document.write(form);
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
    ];
    //Перший прохід - пошук колонок
    const columnArr = [];
    for (const pers of persons) {
        for (const key in pers) {
            if (!(columnArr.includes(key))) {
                columnArr.push(key);
            };
        }
    }

    const persArrays = [];

    for (const pers of persons) {
        const persArray = [];
        for (const key of columnArr) {
            persArray.push(pers[key] || ' ');
        }
        persArrays.push(persArray);
    }
    console.log(persArrays);

    //Заголовок
    let str = `<table style='border-collapse: collapse;'>`;
    str += `<tr>`;
    for (let i = 0; i < columnArr.length; i++) {
        str += `<th style='border: 1px solid black; padding: 10px; background-color: lightgrey; font-weight: bold;'>${columnArr[i]}</th>`;
    }
    str += `</tr>`;

    for (const person of persArrays) {
        str += `<tr>`;
        for (const item of person) {
            str += `<td style='border: 1px solid black; padding: 10px; text-align: center;'>${item}</td>`
        }
        str += `</tr>`;
    }

    str += `</table>`;
    document.write(str);
}

//Тестові дані
{
    const cars = [
        {
            "Name": "chevrolet chevelle malibu",
            "Cylinders": 8,
            "Displacement": 307,
            "Horsepower": 130,
            "Weight_in_lbs": 3504,
            "Origin": "USA"
        },
        {
            "Name": "buick skylark 320",
            "Miles_per_Gallon": 15,
            "Cylinders": 8,
            "Displacement": 350,
            "Horsepower": 165,
            "Weight_in_lbs": 3693,
            "Acceleration": 11.5,
            "Year": "1970-01-01",
        },
        {
            "Miles_per_Gallon": 18,
            "Cylinders": 8,
            "Displacement": 318,
            "Horsepower": 150,
            "Weight_in_lbs": 3436,
            "Year": "1970-01-01",
            "Origin": "USA"
        },
        {
            "Name": "amc rebel sst",
            "Miles_per_Gallon": 16,
            "Cylinders": 8,
            "Displacement": 304,
            "Horsepower": 150,
            "Year": "1970-01-01",
            "Origin": "USA"
        },
    ];

    //Перший прохід - пошук колонок
    const columnArr = [];
    for (const car of cars) {
        for (const key in car) {
            if (!(columnArr.includes(key))) {
                columnArr.push(key);
            };
        }
    }

    const carArrays = [];

    for (const car of cars) {
        const carArray = [];
        for (const key of columnArr) {
            carArray.push(car[key] || ' ');
        }
        carArrays.push(carArray);
    }
    console.log(carArrays);

    //Заголовок
    let str = `<table style='border-collapse: collapse;'>`;
    str += `<tr>`;
    for (let i = 0; i < columnArr.length; i++) {
        str += `<th style='border: 1px solid black; padding: 10px; background-color: lightgrey; font-weight: bold;'>${columnArr[i]}</th>`;
    }
    str += `</tr>`;

    for (const car of carArrays) {
        str += `<tr>`;
        for (const item of car) {
            str += `<td style='border: 1px solid black; padding: 10px; text-align: center;'>${item}</td>`
        }
        str += `</tr>`;
    }

    str += `</table>`;
    document.write(str);
}





