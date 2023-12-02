//makeProfileTimer
//Напишіть функцію makeProfileTimer, яка служить для виміру часу виконання іншого коду і працює наступним чином:
{
    function makeProfileTimer() {
        const start = performance.now();
        return function () {
            return performance.now() - start;
        }
    }

    const timer = makeProfileTimer()
    alert('Вимiрюємо час роботи цього alert');  //якийсь код, час виконання якого ми хочемо виміряти з високою точністю
    alert(timer()); //alert повинен вивести час у мілiсекундах від виконання makeProfileTimer до моменту виклику timer(), 
    // тобто виміряти час виконання alert
    const timer2 = makeProfileTimer()
    prompt('')
    alert(`Час роботи двух аlert та одного prompt ${timer()}`)
    alert(`Час роботи prompt та попереднього alert ${timer2()}`)
    //Використовуйте performance.now() для того, щоб запам'ятати момент часу. 
    //Ця функцiя повертає час у мiлiсекундах вiд моменту завантаження сторiнки.
}


//makeSaver
//Напишіть функцію makeSaver, яка:
{
    const makeSaver = function (param) {
        let savedValue;
        return () => {
            // if (typeof savedValue === 'undefined') {
            if (savedValue === undefined) {
                savedValue = param(); 
            }
            return savedValue; 
        };
    };

    let saver = makeSaver(Math.random)
    //створює функцію-сховище результату переданої як параметр функції (Math.random у прикладі). 
    //На цьому етапі Math.random НЕ ВИКЛИКАЄТЬСЯ
    let value1 = saver()              //saver викликає передану в makeSaver функцію, запам'ятовує результат і повертає його
    let value2 = saver()              //saver надалі просто зберігає результат функції, і більше НЕ викликає передану 
    //в makeSaver функцію;
    alert(`Random: ${value1} === ${value2}`)

    let saver2 = makeSaver(() => {
        console.log('saved function called');
        return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)]
    })
    let value3 = saver2()
    let value4 = saver2()
    value3 === value4 // теж має бути true

    let namePrompt = prompt.bind(window, 'Як тебе звуть?')
    let nameSaver = makeSaver(namePrompt)
    alert(`Привіт! Prompt ще не було!`)
    alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
    alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)
}

//myBind
//Вивчіть вбудовану функцію bind, і зробіть свою версію, яка дозволить визначити "значення за замовчуванням" 
//не тільки для перших параметрів, але для будь-яких інших, наприклад для ступеня в Math.pow:
{
    const myBind = function (mathFn, thisParam = null, arrOfArgs) {
        return (...missedArr) => {
            const missedArgs = [...missedArr];
            let totalArgs = [...arrOfArgs];
            //Перший спосіб через цикл for:  
            for (let i = 0; i < totalArgs.length; i++) {
                if (totalArgs[i] === undefined) {
                    totalArgs[i] = missedArgs.shift();
                }
            }
            //Другий спосіб через forEach:
            // totalArgs.forEach(function(item, index) {
            //     if (item === undefined) {
            //         totalArgs[index] = missedArgs.shift();
            //     }
            // }, totalArgs); 
            return mathFn.apply(thisParam, totalArgs);
        };
    };

    //Варіант, коли пропущені параметри у аргумента arrOfArgs функції myBind - через один!
    // const myBind = function (mathFn, thisParam, arrOfArgs) {
    //     let emptyArr = [];
    //     return (...missedArr) => {
    //         console.log(missedArr);
    //         let args = arrOfArgs.filter(elem => elem !== undefined)
    //         console.log(args);
    //         for (let i = 0; i < missedArr.length; i++) {
    //             emptyArr.push(missedArr[i]);
    //             emptyArr.push(args[i]);
    //         }
    //         arrOfArgs = emptyArr;
    //         return mathFn(thisParam, arrOfArgs);
    //     }
    // }

    let pow5 = myBind(Math.pow, Math, [, 5])
    // перший параметр - функція для біндингу значень за замовчуванням, 
    // другий - this для цієї функції, третій - масив, в якому undefined означає
    // параметри, які мають передаватися під час виклику,
    // інші значення є значеннями за замовчуванням:
    let cube = myBind(Math.pow, Math, [, 3]) // cube зводить число в куб

    pow5(2) // => 32, викликає Math.pow(2,5), співвіднесіть з [undefined, 5]
    pow5(4) // => 1024, викликає Math.pow(4,5), співвіднесіть з [undefined, 5]
    cube(3) // => 27

    let chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9])
    chessMin(-1, -5, 3, 15) // викликає Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5

    let zeroPrompt = myBind(prompt, window, [undefined, "0"])
    // аналогічно, тільки тепер задається "0" як текст за замовчанням в prompt,
    // а текст запрошення користувача задається під час виклику zeroPrompt
    let someNumber = zeroPrompt("Введіть число") // викликає prompt("Введіть число","0")

    const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])
    //('a','c','d') === 'abcdef'
    bindedJoiner('a', 'c', 'd') === 'abcdef'
    bindedJoiner('1', '2', '3') === '1b23ef'
}

//checkResult
//Напишіть декоратор checkResult, який:
//1) приймає функцію для запуску (оригінал)
//2) приймає функцію для перевірки результату (валідатор)
//3) повертає обгортку, яка запускає оригінал доти, доки оригінал не поверне значення, що задовольняє функції-валідатору. 
//У валідатор передається результат оригінальної функції. 
//Якщо валідатор повертає true, то обгортка повертає результат. оригінальної функції. 
//Якщо валідатор повертає щось інше, то оригінал запускається ще, доти, доки валідатор не поверне true.
function checkResult(original, validator) {
    function wrapper(...params) {
        let result = original(...params); 

        while (!validator(result)) { 
            result = original(...params); 
        }

        return result; 
    }

    return wrapper; 
}

//numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
const numberPrompt = checkResult(prompt, x => !isNaN(+x))
let number = +numberPrompt("Введіть число", "0")  //параметри передаються наскрізь до оригіналу. Не забудьте передати це, використовуючи call або apply

//gamePrompt - це функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
const gamePrompt = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase()))
const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")

//Використовуючи checkResult зробіть функції, які:
//RandomHigh. Повертає будь-яке число в діапазоні від 0.5 до 1 завдяки Math.random
const randomHigh = checkResult(Math.random, random => random >= 0.5)
//AlwaysSayYes. Дістає користувача вікном confirm поки він не погодиться (не натисне OK)
const alwaysSayYes = checkResult(confirm, confirm => confirm === true)
//respectMe. Дістає користувача запуском цієї функції, поки якесь із полів не введено
const credentials = function () {
    let arr = [
        (prompt('Введіть своє прізвище :') || '').trim(),
        (prompt('Введіть своє ім\'я :') || '').trim(),
        (prompt('Введіть своє по-батькові :') || '').trim()
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

    // console.log(totalNames);
    return totalNames;
};
credentials();

const respectMe = checkResult(credentials, (credentials) => {
    const values = Object.values(credentials);
    console.log(values);
    return values.every(value => value !== undefined && value.length > 0);
});

let example = respectMe();