//Confirms
{
    let arr = [confirm('Так чи ні?'), confirm('Велике чи ні?'), confirm('Ти жінка?')];
    console.log(arr);
}

//Prompts
{
    let arr = [];
    arr[0] = prompt('1');
    arr[1] = prompt('2');
    arr[2] = prompt('3');
    console.log(arr);
}

//Item access
{
    const arr = [1, 'abc', 1 > 2, 2 > 1];
    console.log(arr[prompt('Введіть індекс у масиві arr:')]);
    console.log(arr[arr.length]); //undefined
}

//Item change
{
    const arr = [1, 'abc', 1 > 2, 2 > 1];
    arr[prompt('Введіть індекс у масиві arr:')] = prompt('Введіть значення для елементу за цим індексом');
    console.log(arr);
}

//Multiply table

const table = [];
const newTable = [];
{
    table.push([0, 0, 0, 0, 0, 0]);
    table.push([0, 1, 2, 3, 4, 5]);
    table.push([0, 2, 4, 6, 8, 10]);
    table.push([0, 3, 6, 9, 12, 15]);
    table.push([0, 4, 8, 12, 16, 20]);
    table.push([0, 5, 10, 15, 20, 25]);
    console.log(table);
    let result = (table[prompt('Введіть перший множувач')][prompt('Введіть другий множувач')]);
    alert(`Ваш добуток дорівнює ${result}`);
    //Multiply table slice
    let i

    for (i = 0; i < table.length; i++) {
        const allZero = table[i].every((element) => element === 0);
        if (allZero) {
            table.shift();
            i--;
        } else {
            if (table[i].includes(0)) {
                newTable[i] = table[i].slice(table[i].indexOf(0) + 1);
            }
        }
    }
    console.log(newTable);
}

//IndexOf Word
{
    let someWords = prompt('Напишіть декілька слів про себе:').toLowerCase();
    let word = prompt('Напишіть слово, яке ви шукаєте').toLowerCase();

    let numberOfWord = someWords.split(' ').indexOf(word) + 1;
    (numberOfWord > 0) ? alert(`Ваше слово - ${numberOfWord} у реченні`) : alert(`Вашого слова "${word}" немає у реченні`);
}

//Reverse
{
    const prompts = [];
    for (i = 0; i < 5; i++) {
        prompts.push(prompt('Введіть 5 елементів'));
    }
    console.log(prompts);

    const reversePrompts = [];
    for (j = 0; j < 5; j++) {
        reversePrompts.push(prompts.pop());
        //aбо reversePrompts[j] = prompts.pop();
    }
    console.log(prompts);
    console.log(reversePrompts);

    //Reverse 2
    for (k = 0; k < 5; k++) {
        prompts.unshift(reversePrompts.shift());
    }
    console.log(prompts);
    console.log(reversePrompts);
}

//Copy
{
    const newTable = table.slice();
    //або
    const newTable2 = [...table];
    newTable2[0] = 2;
    console.log(newTable);
    console.log(table);
}

//Deep Copy
{
    const newTable2 = structuredClone(table);
    newTable2[2][2][1] = 100500;
    console.log(table, newTable2);
}
//Array Equals
{
    let arr = [1, 2, true, 'abc']
    let arr2 = arr;
    console.log(arr === arr2);
}

//Flat
{
    const arrOfArray = [...newTable[0], ...newTable[1], ...newTable[2], ...newTable[3], ...newTable[4]]
    console.log(arrOfArray, arrOfArray.length);
}

//Destruct
{
    let [first, fifth, ninth] = [1, 5, 9];
    let text = prompt('Введіть рядок більше 9 символів');
    (text.length < 9)
        ? alert('Ви ввели менше 9 символів')
        : alert([first, fifth, ninth] = [text[first - 1], text[fifth - 1], text[ninth - 1]]);
}

//Destruct default
{
    let text = prompt('Введіть рядок');
    let textArray = [text[1], text[3], text[4]];
    let newTextArray = [];

    let i = 0;
    for (const elem of textArray) {
        (elem === ' ' || elem === undefined)
            ? newTextArray[i] = '!'
            : newTextArray[i] = elem;
        i++
    }
    alert(newTextArray);
}

//Multiply table rest
{
    const table = [];
    let newTable = [];
    let rest;
    let zero;
    table.push([0, 0, 0, 0, 0, 0]);
    table.push([0, 1, 2, 3, 4, 5]);
    table.push([0, 2, 4, 6, 8, 10]);
    table.push([0, 3, 6, 9, 12, 15]);
    table.push([0, 4, 8, 12, 16, 20]);
    table.push([0, 5, 10, 15, 20, 25]);
    console.log(table);
    let result = (table[prompt('Введіть перший множувач')][prompt('Введіть другий множувач')]);
    alert(`Ваш добуток дорівнює ${result}`);

    newTable = table.map(elem => {
        const allZero = elem.every(element => element === 0);
        if (allZero) {
            elem.shift();
        } else {
            [zero, ...rest] = elem;
            return rest
        }
    })
    console.log(newTable);
}

//For Alert
{
    const names = ["John", "Paul", "George", "Ringo"];

    let i = 0;
    for (const name of names) {
        alert(name);
        i++;
    }
}

//For Select Option
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    for (const currency of currencies) {
        str += `<option> -- ${currency} -- </option>`;
    }
    str += "</select>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

//For Table Horizontal
{
    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table style='border-collapse: collapse;'>"
    for (const name of names) {
        str += `<td style='border: 1px solid black; padding: 10px;'> ${name} </td>`;
    }
    str += "</table>"
    document.write(str) //document.write отобразит ваш HTML на странице
}

//For Table Vertical
{
    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table style='border-collapse: collapse;'>"
    for (const name of names) {
        if (names.indexOf(name === 0)) {
            str += "<tr>";
        }
        str += `<td style='border: 1px solid black; padding: 10px; text-align: center;'> ${name} </td>`;
        // if (names.indexOf(name === names.length-1)) {
        //     str += "</tr>";
        // }
    }
    str += "</table>"
    document.write(str) //document.write отобразит ваш HTML на странице
}

//For Table Letters
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<table style='border-collapse: collapse;'>"
    str += `<tr>`;
    for (let i = 0; i < currencies[0].length; i++) {
        str += `<th style='border: 1px solid black; padding: 10px; background-color: lightgrey;'> </th>`
    }
    for (const currency of currencies) { //цикл створює рядки
        // Одна ітерація циклу створює ОДНИЙ РЯДОК
        str += "<tr>";
        console.log(currency)
        for (const letter of currency) { //цикл створює осередки в одному рядку
            str += `<td style='border: 1px solid black; padding: 10px;'> ${letter} </td>`;
            //одна ітерація циклу створює ОДИН осередок
            console.log(letter)
        }
    }
    str += "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}
//For Multiply Table
{
    const table = [];
    table.push([0, 0, 0, 0, 0]);
    table.push([0, 1, 2, 3, 4]);
    table.push([0, 2, 4, 6, 8]);
    table.push([0, 3, 6, 9, 12]);
    table.push([0, 4, 8, 12, 16]);

    console.log(table);

    let str = "<table style='border-collapse: collapse; text-align: center'>";
    for (const row of table) { //цикл створює рядки
        // Одна ітерація циклу створює ОДНИЙ РЯДОК
        (table.indexOf(row) % 2)
            ? str += `<tr style='background: pink;'>`
            : str += `<tr style='background: greenyellow;'>`;
        console.log(row);
        if (table.indexOf(row) === 0) {
            for (const number of row) {
                //одна ітерація циклу створює ОДИН осередок
                str += `<th style='border: 1px solid grey; padding: 10px;  background-color: lightgrey;'> ${number} </th>`;
                console.log(number);
            }
        } else {
            for (const number of row) {
                //одна ітерація циклу створює ОДИН осередок
                str += `<td style='border: 1px solid grey; padding: 10px;'> ${number} </td>`;
                console.log(number);
            }
        }
    }
    str += "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

//Function Capitalize
{
    const capitalize = str => {
        let result
        str = "cANBerRa";
        let firstLetter = str.charAt(0);
        result = firstLetter.toUpperCase() + str.slice(1).toLowerCase();
        return result //саме цей код забезпечить повернення результату функції
    }
    console.log(capitalize("cANBerRa")) //Canberra
}

//Map Capitalize
{
    const capitalize = str => {
        let result;
        let firstLetter = str.charAt(0);
        result = firstLetter.toUpperCase() + str.slice(1).toLowerCase();
        return result //саме цей код забезпечить повернення результату функції
    }

    let sentence = prompt('Введіть речення');
    let sentArray = sentence.split(' ');
    sentArray = sentArray.map(element => capitalize(element));
    console.log(sentArray.join(' '));
}

//Filter Lexics
{
    const incorrectWord = ['as', 'jek', 'fagot'];

    let someWords = prompt('Напишіть декілька слів про щось, що вам не дуже до вподоби:').toLowerCase().split(' ');
    let kindWords = someWords.filter((word) => !(incorrectWord.includes(word)));
    let badWords = someWords.filter((word) => incorrectWord.includes(word));
    console.log(badWords);
    console.log(kindWords.join(' '));
}

//Beep Lexics

{
    const incorrectWord = ['as', 'jek', 'fagot'];

    let someWords = prompt('Напишіть декілька слів про щось, що вам не дуже до вподоби:').toLowerCase().split(' ');
    let censoredWord = someWords.map((word) => (incorrectWord.includes(word)) ? 'BEEP' : word);

    console.log(censoredWord.join(' '));
}

//Reduce HTML
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    str += currencies.reduce((a, b) => `-- ${a} --<option>-- ${b} --</option>`, '');
    str += "</select>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

//For Brackets Hell Check
{
    const line = prompt();
    const bracketsStack = [];
    let i = 0
    for (const character of line) {
        const first = character === ']' && bracketsStack[bracketsStack.length - 1] === '[';
        const firstNo = character === ']' && bracketsStack[bracketsStack.length - 1] !== '[';
        const second = character === ')' && bracketsStack[bracketsStack.length - 1] === '(';
        const secondNo = character === ')' && bracketsStack[bracketsStack.length - 1] !== '(';
        const third = character === '}' && bracketsStack[bracketsStack.length - 1] === '{';
        const thirdNo = character === '}' && bracketsStack[bracketsStack.length - 1] !== '{';

        if (character === '[' || character === '(' || character === '{') {
            bracketsStack.push(character);
        }
        if (first || second || third) {
            bracketsStack.pop();
        }
        //не звертайте уваги на символи, крім трьох видів дужок
        if (firstNo || secondNo || thirdNo) {
            alert(`У вас помилка на ${i + 1} літералі`);
            break; //оператор break перериває цикл передчасно
        }
        i++ //iндекс поточної лiтери
    }
    if ((bracketsStack.length === 0) && (i === line.length)) {
        alert('Всі скобки написані відповідно до коду!');
    } else if (bracketsStack.length > 0) {
        alert('У вас є незачинені скобки');
    }
}