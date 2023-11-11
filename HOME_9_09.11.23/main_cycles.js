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
    let [width, height] = [prompt('довжина дошки'), prompt('висота дошки')];

    let chess = '';
    for (let i = 0; i < height; i++) {
        let j = 0;
        while (j < width) {
            chess += '.#';
            j += 2;
            if (width - j === 1) {
                chess += '.';
                break;
            }
        }
        chess += '\n';
    }
    console.log(chess);
}

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

//Ромбік
{
    let picture = '';
    let size = {
        width: prompt('довжина візерунку'),
        height: prompt('висота візерунку')
    }
    for (let i = 0; i < size.height; i++) {

    }
}
