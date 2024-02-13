//Person Constructor
//Переделайте задание createPerson на функцию конструктор Person.
{
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.fatherName = '';
        this.getFullName = function () {
            return (!this.fatherName)
                ? `${this.name} ${this.surname}`
                : `${this.name} ${this.fatherName} ${this.surname}`;
        }
    }

    const a = new Person("Вася", "Пупкин")
    const b = new Person("Анна", "Иванова")
    const c = new Person("Елизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкин
    a.fatherName = 'Иванович'    //Вася Иванович Пупкин

    console.log(b.getFullName()) //Анна Иванова
}

//Person Prototype
/*
Переробіть попереднє завдання, винісши методи у прототип. 
Для цього замість присвоєння в this занесіть їх у об'єкт Person.prototype. 
Після цієї змiни все має працювати по старому:
*/
{
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.fatherName = '';
    }

    Person.prototype.getFullName = function () {
        return (!this.fatherName)
            ? `${this.name} ${this.surname}`
            : `${this.name} ${this.fatherName} ${this.surname}`;
    }

    const a = new Person("Вася", "Пупкін")
    const b = new Person("Ганна", "Іванова")
    const c = new Person("Єлизавета", "Петрова")

    console.log(a.getFullName()) // Василь Пупкін
    a.fatherName = 'Іванович'
    console.log(a.getFullName()) // Василь Іванович Пупкін
    console.log(c.getFullName()) //Єлизавета Петрова
    console.log(b.getFullName()) // Ганна Іванова
}
//Store
//Переделайте функцию createStore (та, которая хранилище Redux) на конструктор Store. 
//Прототип не используйте; оставьте переменные state, cbs и reducer замкнутыми. 
//Соответственно методы subscribe, dispatch и getState должны быть объявлены внутри функции-конструктора 
//и не могут быть в прототипе. Проверьте переделанный конструктор на вашем ДЗ по ларьку;
function Store(reducer) {
    // const store = (function () {
    //     let state = reducer(undefined, {})
    //     const cbs = [];
    //     return (state, cbs);
    // })
    this.state = () => reducer(undefined, {}) //стартова ініціалізація стану, запуск редьюсера со state === undefined
    this.cbs = () => [];
    this.reducer = () => reducer;

    this.getState = function () {
        return this.state;
    }

    this.dispatch = function (action) {
        const newState = this.reducer(this.state, action) //пробуємо запустити редьюсер
        if (newState !== this.state) { //перевіряємо, чи зміг ред'юсер обробити action
            this.state = newState //якщо зміг, то оновлюємо state 
            for (let cb of this.cbs) cb() //та запускаємо пiдписникiв
        }
    }

    this.subscribe = function (cb) {
        (this.cbs.push(cb),   //запам'ятовуємо пiдписникiв у масиві
            () => this.cbs = this.cbs.filter(c => c !== cb))
    }//повертаємо функцію unsubscribe, яка видаляє пiдписника зі списку
}

//Password
/*
Напишіть функцію конструктор Password, яка буде в батьківському елементі (parent) створювати поле введення для пароля 
та 
кнопку/іконку/чекбокс, який перемикатиме режим перегляду пароля в полі введення. 
(видимий пароль чи ні, input type='text' або input type='password')
Параметри:
    parent - батьківський елемент
    open - стартовий стан
Методи:
    setValue/getValue - задають/читають значення
    setOpen/getOpen - задають/читають відкритість тексту у полі введення
Колбеки (функції зворотного виклику, що можливо, будуть задані зовні конструктора):
    onChange - запускається за подією oninput у полі введення, передає текст у колбек
    onOpenChange - запускається зі зміни стану відкритості пароля
Цi колбеки стануться в нагодi в наступних завданнях.
Для Password Verify додайте, також, метод setStyle, щоби мати можливiсть задати стиль input не втручаючись в код Password
*/
function Password(parent, open) {
    this.passElem = document.createElement('input');
    this.passElem.setAttribute('type', open ? 'text' : 'password');
    this.passElem.setAttribute('placeholder', 'Введіть пароль...');
    this.checkBox = document.createElement('input');
    this.checkBox.setAttribute('type', 'checkbox');
    this.checkBox.checked = open;

    this.getValue = function () {
        return this.passElem.value
    }
    this.setValue = function (value) {
        this.passElem.value = value
    }

    this.getOpen = function () {
        return this.passElem.type === 'text';
    }
    this.setOpen = function (isOpen) {
        this.passElem.type = isOpen ? 'text' : 'password';
        this.checkBox.checked = isOpen;
    };
    this.setStyle = function (addedStyles) {
        Object.assign(this.passElem.style, addedStyles);
    };

    this.checkBox.addEventListener('change', () => {
        this.passElem.setAttribute('type', this.checkBox.checked ? 'text' : 'password')
        if (this.onOpenChange) {
            this.onOpenChange(this.checkBox.checked);
        }
    })
    this.passElem.addEventListener('input', () => {
        //умова, при якій показуємо у консолі змінений пароль, якщо він відкритий
        if (this.onChange && this.checkBox.checked) {
            this.onChange(this.passElem.value);
        }
    })

    parent.appendChild(this.passElem);
    parent.appendChild(this.checkBox);
}

let p = new Password(document.body, true)

p.onChange = data => console.log('Поточний пароль: ', data)  //буде корисно при виконаннi LoginForm та Password Verify
p.onOpenChange = open => console.log('Пароль показаний: ', open)

p.setValue('qwerty')
console.log(p.getValue())

p.setOpen(false)
console.log(p.getOpen())

//LoginForm
/*
За допомогою попереднього коду Password зробіть форму логіна, 
кнопка в якій буде активна лише якщо логин та пароль не порожні.

P.S. "За допомогою попереднього коду" означає, що в коді форми логіну ви використовуєте об'єкт, 
сконструйований конструктором Password - const password = new Password(........)
*/

function LoginForm(parent) {
    const loginElem = document.createElement('input');
    loginElem.type = 'text';
    loginElem.placeholder = 'Введіть логін...'
    parent.appendChild(loginElem);

    const password = new Password(parent, true);

    password.onChange = (data) => {
        console.log(`Пароль: ${data}`)
    }

    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.setAttribute('disabled', 'true');
    parent.appendChild(submitButton);

    loginElem.addEventListener('input', () => {
        if (this.onChange) {
            this.onChange(loginElem.value);
        }
    });

    this.submitFunction = function () {
        loginElem.addEventListener('input', () => {
            submitButton.disabled = (loginElem.value == '' || password.getValue() === '');
        });
        password.passElem.addEventListener('input', () => {
            submitButton.disabled = (loginElem.value == '' || password.getValue() === '');
        });
    };

    submitButton.addEventListener('click', () => result = (console.log(`Login: ${loginElem.value}, password: ${password.getValue()}`)))
}

let loginForCheck = new LoginForm(document.body);
loginForCheck.onChange = (data) => console.log(`Логін: ${data}`)
loginForCheck.submitFunction();

//LoginForm Constructor
//оформите предыдущую задачу как функцию-конструктор. Продумайте и предусмотрите геттеры, сеттеры и колбэки.

function LoginFormConstructor(parent) {

    const self = this; //контекст this для об'єкта методів getValue() та setValue()

    this.loginElem = document.createElement('input');
    this.loginElem.type = 'text';
    this.loginElem.placeholder = 'Введіть логін...'
    parent.appendChild(this.loginElem);

    this.password = new Password(parent, false);

    this.password.onChange = (data) => {
        console.log(`Пароль: ${data}`)
    }

    this.submitButton = document.createElement('button');
    this.submitButton.innerText = 'Submit';
    this.submitButton.setAttribute('disabled', 'true');
    parent.appendChild(this.submitButton);

    this.loginElem.addEventListener('input', () => {
        if (this.onChange) {
            this.onChange(this.loginElem.value);
        }
    });

    this.submitFunction = function () {
        this.loginElem.addEventListener('input', () => {
            this.submitButton.disabled = (this.loginElem.value == '' || this.password.getValue() === '');
        });
        this.password.passElem.addEventListener('input', () => {
            this.submitButton.disabled = (this.loginElem.value == '' || this.password.getValue() === '');
        });
    };

    this.submitButton.addEventListener('click', () => result = (console.log(`Login: ${this.loginElem.value}, password: ${this.password.getValue()}`)))

    this.loginMethods = {
        getValue: function () {
            return self.loginElem.value;
        },
        setValue: function (value) {
            return self.loginElem.value = value;
        },
    }
}

let loginForCheck2 = new LoginFormConstructor(document.body);
loginForCheck2.submitFunction();
loginForCheck2.onChange = (data) => console.log(`Логін: ${data}`);
loginForCheck2.loginMethods.setValue('абырвалг');
loginForCheck2.loginMethods.getValue();

//Password Verify
/*
За допомогою Password зробіть пару інпутів, які перевіряють введений пароль (у двох полях введення) на збіг. 
Підсвічуйте поля червоним кольором/бордером, коли паролі не збігаються 
При відкритому паролі у першому полі введення (яке реалізується за допомогою об'єкта класу Password),
друге поле введення має пропадати з екрану Таким чином:
    Коли Password у прихованому режимі - з'являється другий інпут (<input type='password'>) з паролем у прихованому режимі
    Коли Password у відкритому режимі – другий інпут зникає
*/
function Password(parent, open) {

    this.passElem = document.createElement('input');
    this.passElem.setAttribute('type', open ? 'text' : 'password');
    this.passElem.setAttribute('placeholder', 'Введіть пароль...');
    this.checkBox = document.createElement('input');
    this.checkBox.setAttribute('type', 'checkbox');
    this.checkBox.checked = open;

    this.getValue = function () {
        return this.passElem.value
    }
    this.setValue = function (value) {
        this.passElem.value = value
    }

    this.getOpen = function () {
        return this.passElem.type === 'text';
    }
    this.setOpen = function (isOpen) {
        this.passElem.type = isOpen ? 'text' : 'password';
        this.checkBox.checked = isOpen;
    };
    this.setStyle = function (addedStyles) {
        Object.assign(this.passElem.style, addedStyles);
    };

    this.checkBox.addEventListener('change', () => {
        this.passElem.setAttribute('type', this.checkBox.checked ? 'text' : 'password')
        if (this.onOpenChange) {
            this.onOpenChange(this.checkBox.checked);
        }
    })
    this.passElem.addEventListener('input', () => {
        //умова, при якій показуємо у консолі змінений пароль, якщо він відкритий
        if (this.onChange && this.checkBox.checked) {
            this.onChange(this.passElem.value);
        }
    })

    parent.appendChild(this.passElem);
    parent.appendChild(this.checkBox);

}

function PasswordVerify(parent, open) {
    const self = this;

    this.pass1 = new Password(parent, open);
    const pass2 = document.createElement('input');
    pass2.setAttribute('type', 'password');
    pass2.setAttribute('placeholder', 'Підтвердіть пароль');
    pass2.style.visibility = open ? 'hidden' : 'visible';

    open === false && parent.appendChild(pass2);

    function handleInputChange() {
        if (self.pass1.passElem.value !== pass2.value) {
            self.pass1.passElem.style.cssText = 'color: red; border: 1px solid red;';
            pass2.style.cssText = 'color: red; border: 1px solid red;';
        } else {
            self.pass1.passElem.style.cssText = '';
            pass2.style.cssText = '';
        }
    }

    this.pass1.passElem.addEventListener('input', handleInputChange);
    pass2.addEventListener('input', handleInputChange);

    this.pass1.onOpenChange = (isChecked) => {
        isChecked
            ? parent.removeChild(pass2)
            : parent.appendChild(pass2);
    }
}

let passwordVerify = new PasswordVerify(document.body, false);