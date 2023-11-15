//Arrow to Functions
{
    //Перша
    function temperature(temp = prompt('Введіть температуру:')) {
        if (confirm('if °C to °F, press OK')) {
            return (temp * 1.8 + 32);
        } else {
            return ((temp - 32) / 1.8);
        };
    }
    temperature();
    //Друга
    function newLine(str = prompt('Введіть текст, і в тих місцях, де ви хочете перенести текст на нову строку - напишіть \\n')) {
        let splittedStr = str.split('\\n');
        let result = splittedStr.join('\n');
        console.log(result);
    }
    newLine();
    //!!!!! Переносы должны быть настоящими? Или только при отображении?
    //Третя
    function or(year = prompt('Вкажіть поточний рік:'), age = prompt('Укажіть свій вік:')) {
        if ((age === '') || (age === null)) {
            alert('Error! Ви не вказали свій вік!');
        } else {
            return confirm('У Вас вже було День Народження цього року?')
                ? `Ваш рік народження: ${year - age}`
                : `Ваш рік народження: ${year - age - 1}`;
        }
    }
    alert(or());
    //Четверта
    function filterFn(string = prompt('Напишіть декілька слів про щось, що вам не дуже до вподоби:')) {
        const incorrectWord = ['as', 'jek', 'fagot'];
        let someWords = string.toLowerCase().split(' ');
        let kindWords = someWords.filter((word) => !(incorrectWord.includes(word)));
        return (kindWords.join(' '));
    }
    filterFn();
    //П'ята, остання
    function logAndPass([inputLogin, inputPass] = [prompt('Введіть Ваш логін:'), prompt('Введіть Ваш пароль:')]) {
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
    logAndPass();
}

//createPerson
{
    const createPerson = function (name, surname) {
        function getFullName() {
            return `${this.name} ${this.surname} ${this.fatherName || ''}`
        }
        return { name, surname, getFullName };
    };

    const a = createPerson("Вася", "Пупкін")
    const b = createPerson("Ганна", "Іванова")
    const c = createPerson("Єлизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкін
    a.fatherName = 'Іванович'
    console.log(a.getFullName()) //Вася Іванович Пупкін

    console.log(b.getFullName()) //Ганна Іванова
}

//createPersonClosure
{
    const createPersonClosure = function (name, surname) {
        let age, fatherName;
        const getName = () => name;
        const getSurname = () => surname;
        const getFatherName = () => fatherName || '';
        const getAge = () => age;
        const getFullName = () => `${getName()} ${getSurname()} ${getFatherName()}`;

        const setName = (newName) => {
            (newName[0] === newName[0].toUpperCase())
                ? newName
                : name;
        };
        const setSurname = (newSurname) => {
            (newSurname[0] === newSurname[0].toUpperCase())
                ? newSurname
                : name;
        };
        const setFatherName = (newFatherName) => {
            (newFatherName[0] === newFatherName[0].toUpperCase())
                ? newFatherName
                : fatherName;
        };;
        const setAge = (newAge) => {
            (typeof newAge === 'number')
                ? (newAge >= 0 && newAge <= 100)
                    ? newAge
                    : age
                : age;
        };
        const setFullName = (newFullName) => {
            let tempArr = newFullName.split(' ');
            
            for (let i = 0; i < tempArr.length; i++) {
                if (tempArr[i][0] === tempArr[i][0].toUpperCase()) {
                    (i === 0 && (surname = tempArr[i])) || 
                    (i === 1 && (name = tempArr[i])) || 
                    (i === 2 && (fatherName = tempArr[i]));
                }
            }
        }

        return { 
            getName, 
            getSurname, 
            getFatherName, 
            getAge, 
            getFullName, 
            setName, 
            setSurname, 
            setFatherName,
            setAge,
            setFullName
        };
    };

    const a = createPersonClosure("Вася", "Пупкін")
    const b = createPersonClosure("Ганна", "Іванова")
    console.log(a.getName())
    a.setAge(15)
    a.setAge(150) //не працює

    b.setFullName("Петрова Ганна Миколаївна")
    console.log(b.getFatherName()) //Миколаївна
}

//isSorted, TEST isSorted
//Напишіть функцію isSorted, яка приймає набір параметрів будь-якого розміру, 
//та повертає true, коли всі параметри - це числа, і кожeн з них більше за попередній параметр.
{
    const arrayOfParam = [];
    while (parameter = prompt('Введіть параметр функції:')) {
        (isNaN(+parameter))
            ? arrayOfParam.push(parameter)
            : arrayOfParam.push(+parameter);
    }
    console.log(arrayOfParam)

    function isSorted(arrOfParam) {

        for (let i = 0; i < arrOfParam.length; i++) {
            if (typeof arrOfParam[i] === 'number') {
                if (i === 0) { continue; }
                if (arrOfParam[i] > arrOfParam[i - 1]) {
                    continue;
                } else {
                    return `Ваш массив має ${i + 1}-й елемент ${arrOfParam[i]}, що не відповідає умові чисел за зростанням`;
                }
            } else {
                return `Ваш массив має ${i + 1}-й елемент ${arrOfParam[i]}, що не є числом`;
            }
        }
        return `Вітаю! Всі ваші параметри - числа, перелічені за зростанням!`;
    }
    isSorted(arrayOfParam);
}