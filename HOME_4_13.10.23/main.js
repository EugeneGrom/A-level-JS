//Додаткове завдання
let whatTaskIs = prompt('Введіть назву або номер завдання, яке ви хочете виконати:').toLowerCase();

if (+whatTaskIs === 1 || whatTaskIs === 'number' || whatTaskIs.includes('odd')) {
    //Number: odd
    let request = +prompt('Введіть число:');
    if (typeof (request) === 'number' && !(isNaN(request))) {
        alert('Ви молодець, здолали задачу');

        (request % 2 === 0)
            ? alert('Ви ввели парне число')
            : alert('Ви ввели непарне число');
    } else {
        alert('Error');
    }
}

if (+whatTaskIs === 2 || whatTaskIs === 'string' || whatTaskIs.includes('lexics')) {
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
}

if (+whatTaskIs === 3 || whatTaskIs === 'boolean' || whatTaskIs.includes('if'))
//Boolean, //Boolean: if
{
    let age = confirm('Вам за 30 років?');
    if (age) {
        alert('Вам більше 30 років');
    } else {
        alert('Вам 30 або менше років');
    }

    let sex = confirm('Ви чоловік?');
    if (sex) {
        alert('Ви таки чоловік');
    } else {
        alert('Ви таки жінка');
    }
}

if (+whatTaskIs === 4 || whatTaskIs === 'comparison' || whatTaskIs.includes('size'))
//Comparison: sizes
{
    let size = prompt('Введіть розмір панчох за європейською або британською системою:');

    if ((size === '') || (size === null)) {
        alert('Ви не ввели розмір');
    } else {
        if ((size >= 0) && (size <= 6)) {
            alert(`Ваш євророзмір у Британії буде: ${8 + (size * 0.5)}`);
        } else if ((size >= 8) && (size <= 11)) {
            alert(`Ваш бриторозмір у Європі буде ${(size - 8) / 0.5}`);
        } else {
            alert('Ви ввели невірний розмір');
        }
    }
}
if (+whatTaskIs === 5 || whatTaskIs === 'ternary' || whatTaskIs.includes('tern'))
//Ternary
{
    let sex = confirm('Якщо ви чоловік, натисніть ОК, а якщо жінка - Cancel');
    (sex === true)
        ? alert('Ви таки чоловік')
        : alert('Ви таки жінка');
}

if (+whatTaskIs === 6 || whatTaskIs === 'training' || whatTaskIs.includes('train')) {
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
}

if (+whatTaskIs === 7 || whatTaskIs === 'prom' || whatTaskIs.includes('or')) {
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
}

if (+whatTaskIs === 8 || whatTaskIs === 'confirm' || whatTaskIs.includes('or')) {
    //Confirm: or this days
    {
        ((confirm('Шопінг?')) && !(alert('Гоу купляти!'))) || (alert('Ти бяка'));
    }
}
if (+whatTaskIs === 9 || whatTaskIs === 'confirm' || whatTaskIs.includes('if')) {
    //Confirm: if this days
    {
        let shopping = confirm('Шопінг?');
        ((shopping === false) || (shopping === null)) ? alert('Ти бяка') : alert('Гоу купляти!');
    }
}

if (+whatTaskIs === 10 || whatTaskIs === 'default' || whatTaskIs.includes('or')) {
    //Default: or
    {
        let surname = prompt('Введіть прізвище') || 'Іваненко';
        let name = prompt('Введіть ім\'я') || 'Петро';
        let middleName = prompt('Введіть по-батькові') || 'Юхимович';

        alert(`${surname} ${name} ${middleName}`);
    }
}
if (+whatTaskIs === 11 || whatTaskIs === 'default' || whatTaskIs.includes('if')) {
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
}
if (+whatTaskIs === 12 || whatTaskIs.includes('login') || whatTaskIs.includes('pass')) {
    //Login and password
    {
        const login = 'admin';
        const pass = 'qwerty';

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
}

if (+whatTaskIs === 13 || whatTaskIs.includes('curr') || whatTaskIs.includes('exch'))
//Currency exchange 
{
    const [usd, eur, gbp, pln, cad, uah] = [38, 40, 46, 8.8, 27, 1];

    const text = 'Введіть валюту у скороченому форматі (3 літери):';
    let curr1 = prompt(text);
    if ((curr1 === '') || (curr1 === null)) {
        alert('Ви ввели невірне значення');
    } else {
        curr1 = curr1.toLowerCase();

        let value = function (currency) {
            if (currency === 'usd') {
                return usd;
            } else if (currency === 'eur') {
                return eur;
            } else if (currency === 'gbp') {
                return gbp;
            } else if (currency === 'pln') {
                return pln;
            } else if (currency === 'cad') {
                return cad;
            } else if (currency === 'uah') {
                return uah;
            } else {
                alert('Ви ввели невірне значення');
            }
        }

        let rate = value(curr1);
        let result;

        let confirmed = confirm('Якщо Ви бажаєте купити валюту, натисніть ОК, а якщо продати - Cancel:');
        if (confirmed) {
            let count = prompt(`Введіть кількість грн., за яку ви хочете купити ${curr1}:`);
            if ((count !== '') || (count !== null)) {
                result = (+count / rate).toFixed(2);
                alert(`Ви купили ${result} ${curr1}!`)
            } else {
                alert('Ви ввели невірне значення або не ввели його зовсім');
            }
        } else {
            let count = prompt(`Введіть кількість ${curr1}, яку ви хочете продати:`);
            if ((count !== '') || (count !== null)) {
                result = (+count * rate).toFixed(2);
                alert(`Ви отримали ${result} грн.`)
            } else {
                alert('Ви ввели невірне значення або не ввели його зовсім');
            }
        }
    }
}
if (+whatTaskIs === 14 || whatTaskIs === 'scissors' || whatTaskIs.includes('sci')) {
    //Scissors
    let yourVar = prompt('Введіть "камінь", "ножиці" або "папір"').toLowerCase();
    let compVar = Math.random();
    if (compVar <= 0.33) {
        compVar = 'У мене камінь';
        alert(compVar);

        if (yourVar === 'камінь') {
            alert('Нічия, давай ще!');
        } else if (yourVar === 'ножиці') {
            alert('Ви програли, спробуй ще раз!');
        } else {
            alert('Ви виграли!!! Давай ще!');
        }

    } else if (compVar > 0.33 && compVar <= 0.66) {
        compVar = 'У мене ножиці';
        alert(compVar);

        if (yourVar === 'камінь') {
            alert('Ви виграли!!! Давай ще!');
        } else if (yourVar === 'ножиці') {
            alert('Нічия, давай ще!');
        } else {
            alert('Ви програли, спробуй ще раз!');
        }

    } else {
        compVar = 'У мене папір';
        alert(compVar);

        if (yourVar === 'камінь') {
            alert('Ви програли, спробуй ще раз!');
        } else if (yourVar === 'ножиці') {
            alert('Ви виграли!!! Давай ще!');
        } else {
            alert('Нічия, давай ще!');
        }
    }
}

if (+whatTaskIs === 15 || whatTaskIs.includes('завд') || whatTaskIs.includes('чорний') || whatTaskIs.includes('пояс')) {
    //Завдання на чорний пояс
    {
        let yV = prompt('Введіть "камінь", "ножиці" або "папір"').toLowerCase();
        let cV = Math.random();
        alert(cV);

        if ((yV === 'камінь' && cV <= 0.33) || (yV === 'ножиці' && cV > 0.33 && cV <= 0.66) || (yV === 'папір' && cV > 0.66)) alert('Нічия')
        else if ((yV === 'камінь' && cV > 0.33 && cV <= 0.66) || (yV === 'ножиці' && cV > 0.66) || (yV === 'папір' && cV <= 0.33)) alert('Виграш')
        else alert('Програш')

        // (yV === 'камінь') && ((cV <= 0.33 && alert('Нічия')) || (cV > 0.33 && cV <= 0.66 && alert('Виграш!')) || (cV >= 0.66 && alert('Програш!'))) ||
        // (yV === 'ножиці') && ((cV <= 0.33 && alert('Програш!')) || (cV > 0.33 && cV <= 0.66 && alert('Нічия')) || (cV >= 0.66 && alert('Виграш!'))) ||
        // (yV === 'папір') && ((cV <= 0.33 && alert('Виграш!')) || (cV > 0.33 && cV <= 0.66 && alert('Програш!')) || (cV >= 0.66 && alert('Нічия')));
    }
}

if (+whatTaskIs > 15 || whatTaskIs == false)
//АБО whatTaskIs === null || isNaN(+whatTaskIs) || whatTaskIs === 0 || whatTaskIs === ''
{
    alert('Тут нема вказаного завдання або некоректно введена назва');
} 