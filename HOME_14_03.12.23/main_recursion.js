const factorial = digit => digit <= 1 ? 1 : digit * factorial(digit - 1);

console.log(factorial(4))

//Рекурсія: HTML tree
//Використовуючи рішення цього завдання зробіть функцію, 
//яка рекурсивно створює HTML-рядок із деревоподібної структури даних Javascript будь-якої вкладеності. 
//Перевірте результат роботи функції виводячи HTML-рядок використовуючи 
//document.write або ж який-то_элемент.innerHTML

const object = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
}

function htmlTree(element) {
    let htmlString = '';
    if (typeof element === 'string') {
        return element;
    }
    htmlString += `<${element.tagName}`
    if ('attrs' in element) {
        const attributes = element.attrs;
        for (const attr in attributes) {
            htmlString += ` ${attr}='${attributes[attr]}'`
        }
    }
    htmlString += '>';

    if (element.hasOwnProperty('children')) {
        for (const child of element['children']) {
            htmlString += htmlTree(child);
            //должно добавиться "2x2"
        }
    }
    htmlString += `</${element.tagName}>`;
    return htmlString;
}

document.write(htmlTree(object)); //поверне <table border='1' ....

//Рекурсія: DOM tree
function domTree(parent, obj) {
    if (typeof obj === 'string') {
        return parent.innerText = obj;
    }
    const newDiv = document.createElement(obj.tagName);
    if ('attrs' in obj) {
        const attributes = obj.attrs;
        for (const attr in attributes) {
            newDiv.setAttribute(attr, attributes[attr]);
        }
    }
    parent.append(newDiv);
    if (obj.hasOwnProperty('children')) {
        for (const child of obj.children) {
            domTree(newDiv, child);
        }
    }
}
domTree(document.body, object);


//Рекурсія: Deep Copy
{
    function deepCopy(obj) {
        if (typeof obj !== 'object' || obj === undefined || obj === null) {
            return obj;
        }

        const clone = Array.isArray(obj) ? [] : {};

        for (const key in obj) {
            //if (Object.prototype.hasOwnProperty.call(obj, key))
            if (obj.hasOwnProperty(key)) {
                clone[key] = deepCopy(obj[key]);
            }
        }
        return clone;
    }

    const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
    const arr2 = deepCopy(arr); //arr2 та всі його вкладені масиви та об'єкти - інші об'єкти, які можна змінювати без ризику поміняти щось у arr
    const table2 = deepCopy(object); // Аналогічно
}

//Рекурсия: My Stringify
//Напишите аналог JSON.stringify
// function stringify(object) {
//     // let JSON_Str = "'";
//     let JSON_Str = "";
//     let arrOrObj;
//     (typeof object !== 'object')
//         ? JSON_Str += `"${object}"`
//         : Array.isArray(object)
//             ? (JSON_Str += `[`, arrOrObj = true)
//             : (JSON_Str += `{`, arrOrObj = false);
//     for (const key in object) {
//         const value = object[key];
//         if (arrOrObj) {
//             (typeof value !== 'object' || value === null)
//                 ? JSON_Str += `"${value}",`
//                 : JSON_Str += `${stringify(value)},`;
//         } else {
//             (typeof value !== 'object' || value === null)
//                 ? JSON_Str += `"${key}":"${value}",`
//                 : JSON_Str += `${stringify(value)},`
//         }
//     }
//     JSON_Str = JSON_Str.slice(0, -1);
//     JSON_Str += (arrOrObj) ? `]` : `}`;
//     return JSON_Str;
// }

function stringify(object) {
    let JSON_Str = "";
    let arrOrObj;

    if (typeof object !== 'object' || object === null) {
        return object; // Если объект простой тип или null, используем JSON.stringify
    } else {
        Array.isArray(object) ? (JSON_Str += '[', arrOrObj = true) : (JSON_Str += '{', arrOrObj = false);

        const keys = Object.keys(object);
        keys.forEach((key, index) => {
            let value = object[key];

            if (arrOrObj) {
                if (value === undefined) { value = null; JSON_Str += value } else {
                    JSON_Str += (typeof value !== 'object' || value === null)
                        ? (typeof value === 'string') ? `"${value}"` : `${value}`
                        : stringify(value);
                }
            } else {
                if (value === undefined) { JSON_Str = JSON_Str } else {
                    JSON_Str += (typeof value !== 'object' || value === null)
                        ? (typeof value === 'string') ? `"${key}":"${value}"` : `"${key}":${value}`
                        : `"${key}":${stringify(value)}`;
                }
            }

            if (index !== keys.length - 1 && value !== undefined) {
                JSON_Str += ",";
            }
        });

        JSON_Str += (arrOrObj) ? ']' : '}';
        return JSON_Str;
    }
}
const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
const jsonString = stringify(arr) //Напишіть функцію stringify без використання JSON.stringify
console.log(JSON.parse(jsonString)) //не повинно поламатися і повернути структуру, у всьому схожу з оригінальним arr або table

//Рекурсія: getElementById throw
function getElementById(idToFind) {
    let foundElement;
    function walker(parent = document.body) {
        for (const child of parent.children) {
            if (child.id === idToFind) {
                foundElement = child;
                console.log('ID знайдено');
                throw foundElement;
            } else {
                walker(child);
            }
        }
    }
    try {
        walker();
        console.error('error', error); // Выбрасываем ошибку, если элемент не был найден
    } catch (result) {
        return result = result instanceof Error
            ? console.error('ID was not found')
            : console.log('Found Element: ', result);
    }
}

/*
function getElementById(idToFind) {
    let foundElement;
    function walker(parent = document.body) {
        for (const child of parent.children) {
            if (child.id === idToFind) {
                foundElement = child;
                break;
            } else {
                walker(child);
            }
        }
    }
    walker();
    return foundElement;
}
*/ 