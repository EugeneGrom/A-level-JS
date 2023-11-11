//Temperature
const Temperature = (temp) => {
    if (confirm('if °C to °F, press OK')) {
        return (temp * 1.8 + 32);
    } else {
        return ((temp - 32) / 1.8);
    };
}

Temperature(prompt('Введіть температуру'));

//RGB
{
    const RGB = (red, green, blue) => {
        let rgb = [red, green, blue]
        let newRgb = ['#'];

        rgb.forEach((element) => {
            element = +element;
            element = element.toString(16);
            (element.length === 1)
                ? newRgb.push(`0${element}`)
                : newRgb.push(element);
        })
        return (newRgb.join(''));
    }
    RGB(prompt('RED (від 0 до 255):'), prompt('GREEN (від 0 до 255):'), prompt('BLUE (від 0 до 255):'));
};

//Flats
{
    let resultObj = {};
    let flats = (floorCount, flatCount, flatNumber) => {
        let flatsInEntrance = floorCount * flatCount;
        let whichEntrance = Math.ceil(flatNumber / flatsInEntrance);
        let whichFloor = Math.ceil((flatNumber % flatsInEntrance) / flatCount);
        let flatInFloor = flatNumber % flatCount;
        if (flatInFloor == 0) {
            flatInFloor = flatCount;
        }
        resultObj[whichEntrance] = whichFloor;
        console.log(resultObj);
    }
    flats(
        +prompt('Введіть кількість поверхів у Вашому будинку:'),
        +prompt("Введіть кількість квартир на одному поверсі:"),
        +prompt("Введіть номер Вашої квартири:")
    );
}

//Credentials
{
    const credentials = function () {
        let arr = [
            prompt('Введіть своє прізвище :').trim(),
            prompt('Введіть своє ім\'я :').trim(),
            prompt('Введіть своє по-батькові :').trim()
        ];
        let result
        const capitalize = str => {
            let firstLetter = str.charAt(0);
            result = firstLetter.toUpperCase() + str.slice(1).toLowerCase();
            return result;
        }
        arr = arr.map(item => capitalize(item));

        let totalNames = {};
        totalNames['name'] = arr[0];
        totalNames['surname'] = arr[1];
        totalNames['fatherName'] = arr[2];
        totalNames['fullName'] = arr.join(' ');

        console.log(totalNames);
    };
    credentials();
}

//New line
{
    const newLine = function (str) {
        let splittedStr = str.split('\\n');
        let result = splittedStr.join('\n');
        console.log(result);
    }
    newLine(prompt('Введіть текст, і в тих місцях, де ви хочете перенести текст на нову строку - напишіть \\n'));
    //!!!!! Переносы должны быть настоящими? Или только при отображении?
}

//prompt or
{
    const or = (year, age) => ((age === '') || (age === null)) ? alert('Error! Ви не вказали свій вік!') : confirm('У Вас вже було День Народження цього року?') && `Ваш рік народження: ${year - age}` || `Ваш рік народження: ${year - age - 1}`;
    alert(or(prompt('Вкажіть поточний рік:'), prompt('Укажіть свій вік:')));
}

//Login And Password
{
    const logAndPass = function (inputLogin, inputPass) {
        let login = 'admin';
        let pass = 'qwerty';

        if (inputLogin === login) {
            if (inputPass === pass) {
                return ('Вітаємо, користувач!');
            } else {
                alert('Ви ввели невірний пароль');
                return false;
            }
        } else {
            alert('Ви ввели невірний логін');
            return false;
        }
    }
    logAndPass(prompt('Введіть Ваш логін:'), prompt('Введіть Ваш пароль:'));
}

//For Table
{
    const tableFn = (array) => {
        let str = "<table style='border-collapse: collapse; text-align: center'>";
        for (const row of array) { //цикл створює рядки
            // Одна ітерація циклу створює ОДНИЙ РЯДОК
            (array.indexOf(row) % 2)
                ? str += `<tr style='background: pink;'>`
                : str += `<tr style='background: greenyellow;'>`;
            if (array.indexOf(row) === 0) {
                for (const elem of row) {
                    //одна ітерація циклу створює ОДИН осередок
                    str += `<th style='border: 1px solid grey; padding: 10px;  background-color: lightgrey;'> ${elem} </th>`;
                }
            } else {
                for (const elem of row) {
                    //одна ітерація циклу створює ОДИН осередок
                    str += `<td style='border: 1px solid grey; padding: 10px;'> ${elem} </td>`;
                }
            }
        }
        str += "</table>"
        document.write(str) //document.write відобразить ваш HTML на сторінці
    }
    const arr = [[1, 2, 3], ['a', 'b', 23], [true, false, NaN], [5 > 2, undefined, console.log(1)]]

    tableFn(arr);
}

//Filter Lexics
{
    const filterFn = (string) => {
        const incorrectWord = ['as', 'jek', 'fagot'];
        let someWords = string.toLowerCase().split(' ');
        let kindWords = someWords.filter((word) => !(incorrectWord.includes(word)));
        return (kindWords.join(' '));
    }
    filterFn(prompt('Напишіть декілька слів про щось, що вам не дуже до вподоби:'));
}

//Currency Table

//Form
{
    const formFn = function (obj) {
        let form = `<form>`;
        for (const props in obj) {
            form += `<label>${props}: <input type="${typeof obj[props]}" value="${obj[props]}"/></label> <br /><br />`

            if (obj[props] === true) {
                form = form.replace(`<input type="${typeof obj[props]}"`, `<input type="checkbox" checked`);
            } else if (obj[props] === false) {
                form = form.replace(`<input type="${typeof obj[props]}"`, `<input type="checkbox"`);
            }
        }
        form += `</form>`;

        document.write(form);
    }
    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
    }
    formFn(car);
}

//Array of objects sort
{
    var persons = [
        { name: "Іван", age: 17 },
        { name: "Марія", age: 35 },
        { name: "Олексій", age: 73 },
        { name: "Яків", age: 12 },
    ]

    const sort = function (array, sortKey, bool = true) {
        array.sort((a, b) => {
            if (typeof a[sortKey] === 'number') {
                if (bool) {
                    return a.age - b.age;
                } else if (!bool) {
                    return b.age - a.age;
                }
            } else if (typeof a[sortKey] === 'string' || typeof a[sortKey] === 'boolean') {
                if (bool) {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    else return 0;
                } else {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    else return 0;
                }
            }
            return array;
        })
    }

    sort(persons, "age"); //сортує за віком за зростанням
    sort(persons, "name", false); //сортує на ім'я за спаданням
}

//Table
{
    {
        const persons2 = [
            {
                name: 'Марія',
                fatherName: 'Іванівна',
                surname: 'Іванова',
                sex: 'female',
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
                married: true,
                sex: 'male'
            },
        ];

        const tableFn = function (array, sortKey, bool = true) {
            array.sort((a, b) => {
                if (typeof a[sortKey] === 'number') {
                    if (bool) {
                        return a[sortKey] - b[sortKey];
                    } else if (!bool) {
                        return b[sortKey] - a[sortKey];
                    }
                } else if (typeof a[sortKey] === 'string') {
                    if (bool) {
                        if (a[sortKey] > b[sortKey]) return 1;
                        if (a[sortKey] < b[sortKey]) return -1;
                        // else return 0; 
                    } else {
                        if (a[sortKey] < b[sortKey]) return 1;
                        if (a[sortKey] > b[sortKey]) return -1;
                        // else return 0; 
                    }
                } else return 0;
                return array;
            })
        }
        const persons = [...persons2]
        tableFn(persons, "age"); //сортує за віком за зростанням

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
}

//Calc Func
{
    const publicService = function (gas, gasRate, electric, electricRate, internetRate, water, waterRate) {
        let gasTotal = gas * gasRate;
        console.log(gasTotal)
        let electricityTotal = electric * electricRate;
        console.log(electricityTotal)
        console.log(internetRate)
        let waterTotal = water * waterRate;
        console.log(waterTotal)

        let total = gasTotal + electricityTotal + internetRate + waterTotal;
        return (`Ваші місячні витрати за комунальні послуги складають: ${total} грн.`);
    }

    publicService(+prompt('газ , кубів'), +prompt('вартість кубу газу'), +prompt('світло, кВт/год'), +prompt('вартість 1 кВт/год'), +prompt('ваша щомісячна абонплата інтернету'), +prompt('вода, кубів'), +prompt('тариф 1 кубу води'));
}