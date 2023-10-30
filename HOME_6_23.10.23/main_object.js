//Literals
const cat = {
    name: 'Mars',
    age: 3,
    sex: 'male',
    hair: {
        color: 'grey',
        length: 'short',
    }
}

const car = {
    brand: 'Toyota',
    model: 'Land Cruiser 200',
    engine: 'Diesel',
    capacity: 3500,
}

const console = {
    brand: 'PlayStation',
    series: 5,
    shortName: 'PS4',
    version: 'blu-ray',
}

//Literals expand
{
    let brand2 = prompt('Введіть марку авто:')

    const car = {
        brand: brand2,
        model: 'Land Cruiser 200',
        engine: 'Diesel',
        capacity: 3500,
        [prompt('')]: prompt(''),
    }

    console.log(car);


    //Literals copy

    const car2 = { ...car }
    car2.madeIn = prompt('Введіть країну збірки авто:');
    console.log(car);
    console.log(car2);
}

//Html tree

const bodyData = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ['Enter a data please'],
                    nextElementSibling: { tagName: 'br' },
                },
                {
                    tagName: 'input',
                    attrs: { type: 'text', id: 'name', },
                },
                {
                    tagName: 'input',
                    attrs: { type: 'text', id: 'surname', },
                }
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'button',
                    children: ['OK'],
                    attrs: { id: 'ok', },
                },
                {
                    tagName: 'button',
                    children: ['Cancel'],
                    attrs: { id: 'cancel', },
                }
            ]
        }
    ]
}

console.log(bodyData);
//Виведіть значення тексту в другій кнопці, використовуючи . та [].
document.write(bodyData.children[1].children[1].children);
//Виведіть значення атрибуту id у другому input, використовуючи . та [].
document.write(bodyData.children[0].children[2].attrs.id);

//Parent
//Додайте кожному об'єкту тега з попереднього завдання зв'язок з батьком,
//використовуючи властивість parent та присвоєння
bodyData.children[0].parent = bodyData;
bodyData.children[1].parent = bodyData;

bodyData.children[0].children[0].parent = bodyData.children[0];
bodyData.children[0].children[1].parent = bodyData.children[0];
bodyData.children[0].children[2].parent = bodyData.children[0];

bodyData.children[0].children[0].nextElementSibling.parent = bodyData.children[0].children[0];
bodyData.children[0].children[1].attrs.parent = bodyData.children[0].children[1];
bodyData.children[0].children[2].attrs.parent = bodyData.children[0].children[2];

bodyData.children[1].children[0].parent = bodyData.children[1];
bodyData.children[1].children[1].parent = bodyData.children[1];

bodyData.children[1].children[0].attrs.parent = bodyData.children[1].children[0];
bodyData.children[1].children[1].attrs.parent = bodyData.children[1].children[1];

console.log(bodyData);

//Change OK
const propertyName = prompt('Введіть властивість, яке хочете додати або змінити');
const propertyValue = prompt('Введіть значення');
bodyData.children[1].children[1][propertyName] = propertyValue;
console.log(bodyData.children[1].children[1]);

//Destructure
//Використовуючи деструктуризацію структури із завдання HTML Tree:
//Виведіть значення тексту у тезі span,
const [textSpan] = bodyData.children[0].children[0].children
console.log(textSpan);
//Виведіть значення тексту в другій кнопці та
const [textButton2] = bodyData.children[1].children[1].children
console.log(textButton2);
//Виведіть значення атрибуту id у другому input.
const { id: idInput2 } = bodyData.children[0].children[2].attrs
console.log(idInput2);

//Destruct array
{
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
    //напишіть код, який використовуючи деструктуризацію покладе:
    //парні числа в змінні even1, even2,
    //непарні в odd1, odd2, odd3,
    //Букви в окремий масив
    const arrNumbersPair = arr.filter(item => typeof item === 'number' && item % 2 === 0);
    const arrNumbersNotPair = arr.filter(item => typeof item === 'number' && item % 2 === 1);
    const arrLetters = arr.filter(item => typeof item === 'string');

    const [even1, even2] = arrNumbersPair;
    const [odd1, odd2, odd3] = arrNumbersNotPair;

    console.log("Even numbers:", even1, even2);
    console.log("Odd numbers:", odd1, odd2, odd3);
    console.log("Letters:", arrLetters);
}
//Destruct string
{
    let arr = [1, "abc"];
    const [number, [s1, s2, s3]] = arr;
    console.log(number, s1, s2, s3);
}
//Destruct 2
{
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{ name: 'Maria' }, { name: 'Nikolay' }]
    }
    //вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2
    const {children: [{name: name1}, {name: name2}]} = obj;
    console.log(name1, name2);
}

//Destruct 3
{
    let arr = [1,2,3,4, 5,6,7,10];
    //вийміть використовуючи деструктуризацію об'єктів два перші елементи 
    //та довжину масиву в змінні a, b та length
    const [[a, b], length] = [arr, arr.length];
    console.log(a, b, length);
}

