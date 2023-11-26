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
                ? name = newName
                : name;
        };
        const setSurname = (newSurname) => {
            (newSurname[0] === newSurname[0].toUpperCase())
                ? name = newSurname
                : name;
        };
        const setFatherName = (newFatherName) => {
            (newFatherName[0] === newFatherName[0].toUpperCase())
                ? name = newFatherName
                : fatherName;
        };;
        const setAge = (newAge) => {
            (typeof newAge === 'number')
                ? (newAge >= 0 && newAge <= 100)
                    ? age = newAge
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

//createPersonClosureDestruct
//Зробіть набір параметрів функції попереднього завдання об'єктом, використовуйте деструктуризацію для вилучення параметрів.
//Вкажіть значення за замовчуванням
{
    const createPerson = function (name, surname) {
        function getFullName() {
            return `${name} ${surname} ${fatherName || ''}`;
        }
        return { name, surname, getFullName };
    };

    const createPersonClosureDestruct = function ({ name = 'Ізабелла', surname = 'Бананова', fatherName = 'Ананасовна', age = 86 }) {
        function getFullName() {
            return `${name} ${surname} ${fatherName || ''}`;
        }
        return { name, surname, age, getFullName };
    }

    const a = createPersonClosureDestruct(createPerson("Вася", "Пупкін"));
    console.log(a);
    const b = createPersonClosureDestruct({ name: 'Миколай', age: 75 });
    console.log(b);
    console.log(b.getFullName());
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
    console.log(arrayOfParam);

    function isSorted(arrOfParam) {

        for (let i = 0; i < arrOfParam.length; i++) {
            if (typeof arrOfParam[i] === 'number') {
                if (i === 0) { continue; };
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

//personForm

{
    const createPersonClosure = function (name, surname) {
        let age, fatherName;
        const getName = () => name || '';
        const getSurname = () => surname || '';
        const getFatherName = () => fatherName || '';
        const getAge = () => age || 0;
        const getFullName = () => `${getSurname()} ${getName()} ${getFatherName()}` || '';

        const setName = (newName) => {
            (newName && typeof newName === 'string' && newName.length > 0 && newName[0] === newName[0].toUpperCase())
                ? name = newName
                : name;
            return name;
        };
        const setSurname = (newSurname) => {
            (newSurname && typeof newSurname === 'string' && newSurname.length > 0 && newSurname[0] === newSurname[0].toUpperCase())
                ? surname = newSurname
                : surname;
            return surname;
        };
        const setFatherName = (newFatherName) => {
            (newFatherName && typeof newFatherName === 'string' && newFatherName.length > 0 && newFatherName[0] === newFatherName[0].toUpperCase())
                ? fatherName = newFatherName
                : fatherName;
            return fatherName;
        };
        const setAge = (newAge) => {
            (newAge && typeof newAge === 'number' && newAge.toString().length > 0)
                ? (newAge >= 0 && newAge <= 100)
                    ? age = newAge
                    : age
                : age;
            return age;
        };
        const setFullName = (newFullName) => {
            if (newFullName && typeof newFullName === 'string' && newFullName.length > 0) {
                let tempArr = newFullName.split(' ');

                for (let i = 0; i < tempArr.length; i++) {
                    if (tempArr[i][0] === tempArr[i][0].toUpperCase()) {
                        (i === 0 && (surname = tempArr[i])) ||
                            (i === 1 && (name = tempArr[i])) ||
                            (i === 2 && (fatherName = tempArr[i]));
                    }
                }
            }
            return surname, name, fatherName;
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

    const b = createPersonClosure("Ганна", "Іванова");
    b.setAge(65);
    b.setFullName("Петрова Ганна Миколаївна");

    function personForm(parent, person) {
        const objKeys = [];

        for (const key in person) {
            let elem = key.slice(3);
            elem = elem[0].toLowerCase() + elem.slice(1);
            if (!objKeys.includes(elem)) {
                objKeys.push(elem);
            }
        }
        console.log(objKeys);
        // arrs.forEach(elem => {
        //     const setMethod = `set${elem[0].toUpperCase}${elem.slice(1)}`;
        //     const getMethod = `get${elem[0].toUpperCase}${elem.slice(1)}`;
        //     person[setMethod](); 
        //     person[getMethod]();
        // })

        objKeys.forEach(elem => {
            const getMethod = `get${elem[0].toUpperCase()}${elem.slice(1)}`;
            const setMethod = `set${elem[0].toUpperCase()}${elem.slice(1)}`;

            const newInput = document.createElement('input');
            newInput.setAttribute('placeholder', `${elem}`);
            newInput.value = person[getMethod]();
            parent.append(newInput);

            const br = document.createElement('br');
            parent.append(br);

            newInput.oninput = () => {
                let lastValue = person[getMethod]();

                if (elem.includes('age')) {
                    const inputValue = parseInt(newInput.value);
                    lastValue = person[setMethod](inputValue);
                    newInput.value = lastValue;
                } else {
                    const inputValue = newInput.value;
                    if (inputValue !== undefined && inputValue.length > 0 && inputValue[0] === inputValue[0].toString()) {
                        lastValue = person[setMethod](newInput.value);
                        newInput.innerText = lastValue;
                        console.log('STRING YES!!!!')
                    } else {
                        console.log('STRING NO!!!!')
                        newInput.value = lastValue;
                    }
                }
            }
        })
    }
    const parend = document.body;
    personForm(parend, b);
}

//getSetForm
{
    const createPersonClosure = function (name, surname) {
        let age, fatherName;
        const getName = () => name || '';
        const getSurname = () => surname || '';
        const getFatherName = () => fatherName || '';
        const getAge = () => age || 0;
        const getFullName = () => `${getSurname()} ${getName()} ${getFatherName()}` || '';

        const regExp = /^[A-Za-zА-Яа-я]+$/;

        const setName = (newName) => {
            (newName && typeof newName === 'string' && newName[0] === newName[0].toUpperCase() && regExp.test(newName))
                ? name = newName
                : name;
            return name;
        };
        const setSurname = (newSurname) => {
            (newSurname && typeof newSurname === 'string' && newSurname[0] === newSurname[0].toUpperCase() && regExp.test(newSurname))
                ? surname = newSurname
                : surname;
            return surname;
        };
        const setFatherName = (newFatherName) => {
            (newFatherName && typeof newFatherName === 'string' && newFatherName[0] === newFatherName[0].toUpperCase() && regExp.test(newFatherName))
                ? fatherName = newFatherName
                : fatherName;
            return fatherName;
        };
        const setAge = (newAge) => {
            (!isNaN(newAge))
                ? (newAge >= 0 && newAge <= 100)
                    ? age = newAge
                    : age
                : console.log('age');
            return age;
        };
        const setFullName = (newFullName) => {
            if (newFullName && typeof newFullName === 'string' && newFullName.length > 0) {
                let tempArr = newFullName.split(' ');

                for (let i = 0; i < tempArr.length; i++) {
                    if (tempArr[i][0] === tempArr[i][0].toUpperCase()) {
                        (i === 0 && (surname = tempArr[i])) ||
                            (i === 1 && (name = tempArr[i])) ||
                            (i === 2 && (fatherName = tempArr[i]));
                    }
                }
            }
            return surname, name, fatherName;
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

    let car;
    {
        let brand = 'BMW', model = 'X5', volume = 2.4
        car = {
            getBrand() {
                return brand
            },
            setBrand(newBrand) {
                (newBrand && typeof newBrand === 'string')
                    ? brand = newBrand
                    : brand;
            },

            getModel() {
                return model
            },
            setModel(newModel) {
                (newModel && typeof newModel === 'string')
                    ? model = newModel
                    : model;
            },

            getVolume() {
                return volume
            },
            setVolume(newVolume) {
                newVolume = +newVolume;
                (newVolume && newVolume > 0 && newVolume < 20)
                    ? volume = newVolume
                    : volume;
            },

            getTax() {
                return volume * 100
            }
        }
    }


    function getSetForm(parent, getSet) {
        const inputs = {} //реєстр

        const updateInputs = () => {
            for (const key in inputs) {
                const methodGet = `get${key}`;
                if (getSet.hasOwnProperty(methodGet)) {
                    inputs[key].value = getSet[methodGet]();
                }
            }
        }

        for (const getSetName in getSet) {
            const getOrSet = getSetName.slice(0, 3);//перші три літери змінної getSetName. Також можна використовувати прапор isGet, який дорівнюватиме true або false
            const fieldName = getSetName.slice(3);// Інші літери getSetName - типу "Name" або "FullName"
            const setKey = 'set' + fieldName;
            const getKey = 'get' + fieldName;

            if (getOrSet === 'get') {
                const newInput = document.createElement('input');

                newInput.setAttribute('placeholder', `${fieldName}`);
                const newVal = getSet[getKey]();
                if (typeof newVal === 'number') {
                    newInput.setAttribute('type', 'number');
                    newInput.value = newVal;
                } else if (typeof newVal === (true || false)){
                    newInput.setAttribute('type', 'checkbox');
                    newInput.checked = newVal;
                } else if (typeof newVal === 'string') {
                    newInput.value = newVal;
                }
                inputs[fieldName] = newInput;

                if (!getSet.hasOwnProperty(setKey)) {
                    newInput.setAttribute('disabled', 'disabled');
                }
                parent.append(newInput);

                newInput.addEventListener('input', (event) => {
                    let value = event.target.value;
                    if (newInput.type === 'number') {
                        getSet[setKey](+value); // Викликаємо відповідний метод set... зі значенням зміненого поля
                    } else if (newInput.type === 'checkbox') {
                        getSet[setKey](event.target.checked); // Викликаємо відповідний метод set... зі значенням зміненого поля
                    } else if (newInput.type === 'text') {
                        getSet[setKey](value); // Викликаємо відповідний метод set... зі значенням зміненого поля
                    }
                    updateInputs(); // Оновлюємо всі інші поля
                });
            }
            const br = document.createElement('br');
            parent.append(br);
        }
        console.log(inputs);
        updateInputs()
    }
    getSetForm(document.body, car);
    getSetForm(document.body, createPersonClosure('Анон', "Анонов"))
}