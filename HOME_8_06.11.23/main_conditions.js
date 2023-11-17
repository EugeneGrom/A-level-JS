//blocks
let a = 10
{
    let b = 20
    {
        let c = 30
        //які тут будуть значення змінних a, b, c, d

        b++
        a *= 10
        console.log(a, b, c, d);
        //a = 100; b = 21; c = 30; d - undefined
    }
    {
        let c = 50
        //які тут будуть значення змінних a, b, c, d
        b += 500
        //a = 100, b = 521, c = 50, d - undefined
    }
    {
        const a = 100500
        const d = "value"
        //які тут будуть значення змінних a, b, c, d
        //a = 100500; b = 520; c - undefined; d = 'value'
        {
            let a = -50
            b = 1000
            //які тут будуть значення змінних a, b, c, d
            //a = -50; b = 1000; c = undefined; d = 'value'
        }
        //які тут будуть значення змінних a, b, c, d
        //a = 100500; b = 1000; c = undefined; d = 'value'
    }
    //які тут будуть значення змінних a, b, c, d
    //a = 100; b = 1000; c = undefined; d = undefined
}
//які тут будуть значення змінних a, b, c, d;
// a = 100;

//comparison if
{
    var age = + prompt("Скільки вам років?");

    if (age < 0) {
        alert('Ви ще не народилися');
    } else {
        if (age >= 0 && age < 6) {
            alert('ще не школяр');
        } else {
            if (age >= 6 && age < 18) {
                alert("школяр");
            } else {
                if (age > 18 && age < 30) {
                    alert("молодь");
                } else {
                    if (age > 30 && age < 45) {
                        alert("зрілість");
                    } else {
                        if (age > 45 && age < 60) {
                            alert("захід сонця");
                        } else {
                            if (age > 60) {
                                alert("як пенсія?");
                            } else {
                                alert("чи кіборг, чи KERNESS");
                            }
                        }
                    }
                }
            }
        }
    }

}

//switch: sizes
{
    let size = +prompt('Введіть розмір панчох за європейською або британською системою:');

    switch (size) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            alert(`Ваш євророзмір у Британії буде: ${8 + (size * 0.5)}`)
            break;
        case 8:
        case 8.5:
        case 9:
        case 9.5:
        case 10:
        case 10.5:
        case 11:
            alert(`Ваш бриторозмір у Європі буде ${(size - 8) / 0.5}`)
            break;
        default:
            alert('Ви ввели невірний розмір')
    }
}

//let color = prompt("Введіть колір","");
let color = prompt();
if (['red', 'black', 'blue', 'green'].includes(color)) {
    if (color === 'red') {
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    if (color === 'black') {
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } else if (color === 'blue') {
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    if (color === 'green') {
        document.write("<div style='background-color: green;'>зелений</div>");
    }
} else {
    document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}

//noswitch
{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (key in cases) {
            console.log((cases[key]).toString()); //дістаємо значення по ключу
            return (cases[key]());                 //запуск функції
        } else if (!(key in cases)) {
            console.log((cases[defaultKey]).toString()); //дістаємо значення по ключу
            return (cases[defaultKey]());                 //запуск функції
        }
        return cases['чай'](); ////Нехай функція noSwitch повертає те, що повертає одна з функцій з об'єкта про всяк випадок
    }

    const drink = prompt("Що ви любите пити")
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай() {
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function () {
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
        },
        default() {
            console.log('шото я не зрозумів')
        }
    })
}

//closure calc
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            const mainDiv = document.createElement('div');
            mainDiv.id = 'mainDIV';

            const objKeys = Object.keys(data.rates);
            const objValues = Object.values(data.rates);

            for (let i = 0; i < objKeys.length; i++) {
                const divWrapper = document.createElement('div');
                const res = document.createElement('span');

                const button = document.createElement('button');
                button.innerHTML = objKeys[i];

                button.onclick = () => {
                    let value = +prompt('Введіть суму, яку хочете конвертувати у USD:');

                    if (isNaN(value) || value === null) {
                        return `У вас помилка у написанні суми ${value}`;
                    } else {

                        let result = (value / objValues[i]).toFixed(2);
                        res.innerHTML = ` Отримано ${result} ${data.base_code} за ${value} ${objKeys[i]};`
                        divWrapper.appendChild(res);
                    }
                }
                divWrapper.appendChild(button);
                divWrapper.appendChild(res);

                mainDiv.append(divWrapper);

                const br = document.createElement('br');
                mainDiv.appendChild(br);
            }
            document.body.appendChild(mainDiv);
            console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
        })
}