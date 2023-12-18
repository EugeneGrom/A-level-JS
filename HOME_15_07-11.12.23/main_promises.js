//fetch basic
//Дослідіть сайт swapi.dev, розгляньте JSON-и, які надаються цим сервісом 
//(наприклад: 
//https://swapi.dev/api/people/1/, 
//https://swapi.dev/api/people/2/, 
//https://swapi.dev/api/starships/12/
//За допомогою наступного коду отримати та вивести інформацію про Люка Скайвокера:
{
    function displayJSONasTable(domElement, jsonData) {
        const table = document.createElement('table');
        table.setAttribute('border', 1);

        for (const key in jsonData) {
            if (jsonData.hasOwnProperty(key)) {
                const row = table.insertRow();
                const cell1 = row.insertCell();
                const cell2 = row.insertCell();
                cell1.textContent = key;
                cell2.textContent = jsonData[key];
            }
        }

        domElement.innerHTML = '';
        domElement.appendChild(table);
    }

    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => {
            displayJSONasTable(document.body, luke);
        })
        .catch(err => {
            console.error('Ошибка получения данных:', err);
        });
}

//fetch improved
//Розширити функцію відображення:
//Якщо одне з полів рядок чи масив.
//Якщо рядки у масивi чи рядок містять у собі https://swapi.dev/api/
//То виводити замість тексту рядки кнопку, при натисканні на яку:
//робиться fetch даних за цим посиланням
//функція відображення запускає сама себе (рекурсивно) для відображення нових даних у тому елементі.

//З callbackHell-ом!!!
{
    function displayJSONasTable(domElement, jsonData) {
        const table = document.createElement('table');
        table.setAttribute('border', 1);

        for (const key in jsonData) {
            if (jsonData.hasOwnProperty(key)) {
                const row = table.insertRow();
                const cell1 = row.insertCell();
                const cell2 = row.insertCell();
                cell1.textContent = key;
                if (!Array.isArray(jsonData[key])) {
                    cell2.textContent = jsonData[key]
                } else {
                    for (const elem of jsonData[key]) {
                        const btn = document.createElement('button');
                        const link = elem.split('api/')[1];
                        btn.value = link;
                        cell2.append(btn);

                        btn.addEventListener('click', function () {
                            fetch(`https://swapi.dev/api/${link}`)
                                .then(res => res.json())
                                .then(data => {
                                    displayJSONasTable(domElement, data);
                                })
                                .catch(err => {
                                    console.error('Ошибка получения данных:', err);
                                });
                        })
                    }
                }
            }
        }
        domElement.innerHTML = '';
        domElement.appendChild(table);
    }

    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => {
            displayJSONasTable(document.body, luke);
        })
        .catch(err => {
            console.error('Ошибка получения данных:', err);
        });
}

//Без callbackHell!!!
{
    function fetchPersonData(url) {
        return fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function createButton(link, cell, domElement) {
        const btn = document.createElement('button');
        btn.textContent = link;
        btn.addEventListener('click', function () {
            fetchPersonData(`https://swapi.dev/api/${link}`)
                .then(data => {
                    displayJSONasTable(domElement, data);
                });
        });
        cell.appendChild(btn);
    }

    function displayJSONasTable(domElement, jsonData) {
        const table = document.createElement('table');
        table.setAttribute('border', 1);

        for (const key in jsonData) {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            cell1.textContent = key;

            if (!Array.isArray(jsonData[key])) {
                cell2.textContent = jsonData[key];
            } else {
                for (const elem of jsonData[key]) {
                    const buttonName = elem.split('api/')[1];
                    createButton(buttonName, cell2, domElement);
                }
            }
        }

        domElement.innerHTML = '';
        domElement.appendChild(table);
    }

    fetchPersonData('https://swapi.dev/api/people/1/')
        .then(luke => {
            displayJSONasTable(document.body, luke);
        });
}

//race
//Використовуючи Promise.race, запустіть запит на API (swapi.dev) паралельно з delay. 
//За результатом визначте, що було швидше, запит по мережі або певний інтервал часу. 
//Підберіть параметр delay так, щоб результат був невідомий спочатку, 
//і при багаторазових запусках швидше був то delay, то myfetch.
function delay(ms) {
    function executor(fulfill, reject) {
        setTimeout(() => fulfill(ms), ms);
    }
    return new Promise(executor);
}

function myFetch(url) {
    return fetch(url)
        .then(res => res.json())
        .then(luke => {
            displayJSONasTable(document.body, luke);
            return luke; // возвращаем полученные данные для промиса
        })
        .catch(err => {
            console.error('Ошибка получения данных:', err);
            throw err; // перебрасываем ошибку для обработки в гонке промисов
        });
}

Promise.race([myFetch('https://swapi.dev/api/people/1/'), delay(1100)])
    .then((result) => {
        console.log('Перший завершений проміс:', result);
    })
    .catch((error) => {
        console.error('Еррор №2:', error);
    });

//Promisify: confirm
//Промісифікуйте confirm. 
//Напишіть функцію, яка повертає проміс, який переходить у стан fulfilled при натисканні "OK" 
//та редагується при натисканні "Cancel". Функція повинна приймати рядок для confirm:
function confirmPromise(text) {
    const promise1 = new Promise((resolve, reject) => {
        if (confirm(text)) {
            resolve('OK'); // Разрешаем промис, если пользователь нажал "OK"
        } else {
            reject('Cancel'); // Разрешаем промис с другим значением при нажатии на "Cancel"
        }
    });
    return promise1;
}

confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
    () => console.log('respect за посидючість і уважність'))

//Promisify: prompt
//Аналогічно до попереднього завдання промісифікуйте prompt. 
//У разі натискання "ОК" проміс резолвиться та його результатом стає текст, 
//введений користувачем у вікні 'prompt'. У разі натискання "Скасування" - проміс реджектиться. 
//Параметром функції буде текст повідомлення в prompt
function promptPromise(text) {
    const promise2 = new Promise((resolve, reject) => {
        const nameOrNone = prompt(text);
        if (nameOrNone) {
            resolve(nameOrNone);
        } else {
            reject('None');
        }
    })
    return promise2;
}

promptPromise("Як тебе звуть?").then(name => console.log(`Тебе звуть ${name}`),
    () => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))