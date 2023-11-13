//while confirm
{
    while (!confirm('Ok or Cancel?')) {
        alert('Тисни Cancel, щоб карусель алертів продовжувався...')
    }
}

//array fill
{
    const arr = [];
    while (text = prompt('Введіть щось, не вводьте нічого та натисніть ОК, або тисніть Cancel:')) {
        arr.push(text);
    }
    console.log(arr);
}

//array fill nopush
{
    let i = 0;
    const arr = [];
    while (text = prompt('Введіть щось, не вводьте нічого та натисніть ОК, або тисніть Cancel:')) {
        arr[i] = text;
        i++;
    }
    console.log(arr);
}

//infinite probability
{
    //через continue:
    let i = 0;
    while (Math.random() <= 0.9) {
        alert('Ще коло!');
        i++;
        continue;
    }
    alert(`Ви вийшли з кола після ${i} спроб =)`);

    //через break:
    let j = 0;
    let lastMathRandom = Math.random();
    while (lastMathRandom <= 0.9) {
        alert('Ще коло!');
        j++;
        lastMathRandom = Math.random();
    }
    alert(`Ви вийшли з кола після ${j} спроб =)`);
    console.log(lastMathRandom);
}

//empty loop
{
    while (!confirm('Ще раз!')) {
        ;
    }
}

//progression sum
{
    let sum = 0;
    let N = +prompt('Введіть число від 1 до нескінченності:')
    console.log(N);

    if (isNaN(N) || N <= 0) {
        alert('Ви не виконали умову з числом');
    } else {
        for (let i = 1; i <= N; i += 3) {
            sum += i;
        }
        alert(`Сума арифметичної прогресії від 1 до ${N} дорівнює ${sum}`);
    }
}

//chess one line
{
    let str = '';
    let length = prompt('Введіть довжину рядка, який ви хочете сформувати:')
    for (; str.length < length; str += ' ') {
        str += '#';
    }
    console.log(str);
}

//numbers
{
    let str = '';
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            str += i;
        }
        str += '\n'
    }
    console.log(str);
}

//chess
{
    let [width, height] = [+prompt('довжина дошки'), +prompt('висота дошки')];
    let chess = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            ((i + j) % 2 === 0)
                ? chess += '.'
                : chess += '#';
        }
        chess += '\n';
    }
    console.log(chess);
}

//Вариант чередования в одном ряду, без изменения последовательности в следующем:
// {
//     let [width, height] = [+prompt('довжина дошки'), +prompt('висота дошки')];

//     let chess = '';
//     for (let i = 0; i < height; i++) {
//         let j = 0;
//         if (width !== 1) {
//             while (j < width && width - j > 1) {
//                 chess += '.#';
//                 j += 2;
//                 if (width - j === 1) {
//                     chess += '.';
//                     break;
//                 }
//             }
//         } else {
//             chess += '.';
//         }
//         chess += '\n';
//     }
//     console.log(chess);
// }

//cubes
//Сформуйте масив з N(вводиться користувачем за допомогою prompt) елементів , 
//що містить в собі куби індексів, тобто:
//[0,1,8,27,64...]
{
    let arr = [];
    let N = prompt('Введіть кількість значень у кубі, яку ви хочете побачити у масиві:');

    for (let i = 0; i < N; i++) {
        arr[i] = i ** 3;
        //або 
        //arr.push(i**3);
    }
    console.log(arr);
}

//multiply table
{
    let [one, two] = [
        prompt('перший множувач таблиці множення:'),
        prompt('другий множувач таблиці множення:')
    ]
    const arr = [];

    for (let i = 0; i <= 9; i++) {
        arr[i] = [];
        for (let j = 0; j <= 9; j++) {
            arr[i][j] = i * j;
        };
    };
    alert(arr[one][two]); // ??
}

//read array of objects
{
    const arr = [];

    const readArrayOfObjects = function (array) {

        let conf = confirm("Ви хочете вводити новий об'єкт масиву?");
        for (let i = 0; conf; i++) {
            let obj = {};
            let key, value;

            do {
                key = prompt('Введіть ключ');
                if (key !== null) {
                    value = prompt('Введіть значення');
                    if (value !== null) {
                        obj[key] = value;
                    } else {
                        obj[key] = null;
                        break;
                    }
                } else {
                    break;
                }
            } while (key !== null || value !== null);

            array[i] = obj;
            console.log(obj);

            conf = confirm("Ви хочете вводити новий об'єкт масиву?");
        }
        console.log(array);
    }
    readArrayOfObjects(arr);
}

//Ромбік
{
    let picture = '';
    let size = {
        width: +prompt('довжина візерунку'),
        height: +prompt('висота візерунку')
    }
    let [halfWidth, halfHeight] = [
        Math.floor(size.width / 2),
        Math.floor(size.height / 2)
    ]

    let k = 0;
    for (let i = 0; i < size.height; i++) {
        for (let j = 0; j < size.width; j++) {
            (j < halfWidth - k || j > halfWidth + k)
                ? picture += '.'
                : picture += '#';
        }
        picture += '\n';
        (i < halfHeight)
            ? k += 1
            : k -= 1;
    }
    console.log(picture);
}

//DOM: multiply table
//DOM: highlight cell
{
    const table = document.createElement('table');
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            cell.style.cssText = `
                border: 1px solid grey; 
                width: 50px; height: 50px; 
                text-align: center; font-size: 20px; 
                transition: background-color 0.4s ease-in`;
            (i % 2)
                ? cell.style.backgroundColor = '#e0e0e0'
                : cell.style.color = 'green';
            cell.innerText = i === 0 ? j : (j === 0 ? i : i * j);

            //або:
            // if (i === 0) {
            //     cell.innerText = `${j}`;
            // } else if (j === 0) {
            //     cell.innerText = `${i}`;
            // } else {
            //     cell.innerText = `${i * j}`;
            // }

            row.append(cell);
            cell.onmouseover = function () {
                cell.style.backgroundColor = `purple`;
                cell.style.color = `white`;
                cell.style.fontWeight = `bold`;

            }
            cell.onmouseout = function () {
                cell.style.backgroundColor = i % 2 ? '#e0e0e0' : 'inherit';
                cell.style.color = i % 2 ? 'inherit' : 'green';
                cell.style.fontWeight = `inherit`;
            }
        }
        table.append(row);
    }
    document.body.append(table);
}

//DOM: Highlight cross
{
    const table = document.createElement('table');
    const cells = []; 

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        cells[i] = [];

        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            cell.style.cssText = `
                border: 1px solid grey; 
                width: 50px; height: 50px; 
                text-align: center; font-size: 20px; 
                transition: background-color 0.4s ease-in`;
            (i % 2)
                ? cell.style.backgroundColor = '#e0e0e0'
                : cell.style.color = 'green';
            cell.innerText = i === 0 ? j : (j === 0 ? i : i * j);

            row.append(cell);
            cells[i][j] = cell;

            cell.onmouseover = function () {
                for (let c = 0; c < 10; c++) {
                    cells[i][c].style.backgroundColor = 'purple';
                    cells[i][c].style.color = 'white';
                    cells[i][c].style.fontWeight = 'bold';
                }
                for (let r = 0; r < 10; r++) {
                    cells[r][j].style.backgroundColor = 'purple';
                    cells[r][j].style.color = 'white';
                    cells[r][j].style.fontWeight = 'bold';
                }
            };

            cell.onmouseout = function () {
                for (let c = 0; c < 10; c++) {
                    cells[i][c].style.backgroundColor = (i % 2 === 0) ? '#e0e0e0' : '';
                    cells[i][c].style.color = (i % 2 === 0) ? 'green' : '';
                    cells[i][c].style.fontWeight = '';
                }
                for (let r = 0; r < 10; r++) {
                    cells[r][j].style.backgroundColor = (r % 2 === 0) ? '#e0e0e0' : '';
                    cells[r][j].style.color = (r % 2 === 0) ? 'green' : '';
                    cells[r][j].style.fontWeight = '';
                }
            };
        }
        table.append(row);
    }
    document.body.append(table);
}