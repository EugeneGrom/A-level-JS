//Світлофор
{
    const delay = ms => new Promise(ok => setTimeout(ok, ms));

    // async function trafficLight(time, timeReset) {
    //     while (true) {
    //         green.classList.add('green');
    //         await delay(time);

    //         green.classList.remove('green');
    //         yellow.classList.add('yellow');
    //         await delay(time);

    //         yellow.classList.remove('yellow');
    //         red.classList.add('red');
    //         await delay(timeReset);
    //         red.classList.remove('red');
    //     }
    // }
    // trafficLight(3000, 4000);

    //Stage2
    function domEventPromise(element, eventName, delayedTime) {
        return new Promise(resolve => {
            function eventHandler(event) {
                setTimeout(() => {
                    element.removeEventListener(eventName, eventHandler);
                    resolve(event);
                }, delayedTime);
            }
            element.addEventListener(eventName, eventHandler, { once: true });
        });
    }

    const button = document.getElementById('btnForPedestrian');

    async function pedestrianTrafficLight(time1, time2, noActionTime) {
        while (true) {
            green.classList.add('green');

            red2.classList.add('red');
            // await delay(time);
            await Promise.race([delay(time1), domEventPromise(button, 'click', 1000)])
            green.classList.remove('green');
            yellow.classList.add('yellow');
            await delay(time2);
            yellow.classList.remove('yellow');
            red.classList.add('red');

            red2.classList.remove('red');
            green2.classList.add('green');
            await delay(time2);
            yellow.classList.add('yellow');
            await delay(time2);
            red.classList.remove('red');
            yellow.classList.remove('yellow');
            green.classList.add('green');

            green2.classList.remove('green');
            red2.classList.add('red');
            await delay(noActionTime);
        }
    }

    pedestrianTrafficLight(7000, 3000, 1000)
}

//speedtest
{
    const delay = ms => new Promise(ok => setTimeout(ok, ms));

    async function speedtest(getPromise, count, parallel = 1) {

        const timeStart = performance.now();

        for (let c = 0; c < count; c++) {
            const promiseArr = Array.from({ length: parallel }, getPromise);
            await Promise.all(promiseArr);
        }
        // for (let i = 0; i < promiseArr.length; i ++) {
        //     await Promise.all([...promiseArr[i]])
        // }
        const timeEnd = performance.now();
        const duration = timeEnd - timeStart;

        const querySpeed = count / duration;
        const queryDuration = duration / count;
        const parallelSpeed = (count * parallel) / duration;
        const parallelDuration = duration / (count * parallel)

        return {
            duration,
            querySpeed, //середня швидкість одного запиту
            queryDuration, //
            parallelSpeed,
            parallelDuration
        }
    }

    speedtest(() => delay(1000), 10, 10).then(result => console.log(result))
    // {duration: 10000, 
    // querySpeed: 0.001, //1 тисячна запита за мілісекунду
    // queryDuration: 1000, //1000 мілісекунд на один реальний запит у середньому
    // parallelSpeed: 0.01  // 100 запитів за 10000 мілісекунд
    // parallelDuration: 100 // 100 запитів за 10000 мілісекунд
    let num = 0;
    speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()).then(r => console.log(++num, r)), 10, 5).then(result => console.log(result))
    num = 0;
}

//gql
//Напишіть функцію gql, яка здійснює GraphQL запит. Функція приймає три параметри:
//1. Ендпоінт - адреса сервера. Наприклад "http://shop-roles.node.ed.asmer.org.ua/graphql"
//2. Текст запиту (query). Наприклад:
//    query cats($q: String){
//        CategoryFind(query: $q){
//            _id name
//        }
//    }
//3. Параметри(змінні) (variables) запиту об'єктом. Наприклад:
//    {
//       q: "[{}]"
//    }
//Функція повинна повертати проміс, створений fetch з наступними налаштуваннями:
//    Метод POST
//    Заголовки:
//        Content-Type - application/json
//        Accept - application/json
//    Тіло - JSON, об'єкт з двома ключами - query (текст запиту) та variables

async function gql(endpoint, query, variables) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ query, variables })
        });

        if (!response.ok) {
            throw new Error('Response error, status ' + response.status);
        } else {
            return response.json();
        }
        // const result = await response.json().then(result => {
        //     console.log('Response of GraphQL request: ', result);
        // })
        // return result;
    } catch (error) {
        console.error('Error', error);
        return Promise.reject(error);
    }
}

const url = "http://shop-roles.node.ed.asmer.org.ua/graphql";
const queryCode = `query cats($q: String){
    CategoryFind(query: $q){
        _id name
    }
}`;

const vars = {
    q: "[{}]"
};

gql(url, queryCode, vars)

    //приклад для перевірки
    ; (async () => {
        const catQuery = `query cats($q: String){
                                        CategoryFind(query: $q){
                                            _id name
                                        }
                                    }`
        const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", catQuery, { q: "[{}]" })
        console.log(cats) //список категорій з _id name та всім таким іншим


        const loginQuery = `query login($login:String, $password:String){
                            login(login:$login, password:$password)
                        }`

        const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery, { login: "test457", password: "123123" })
        console.log(token)
    })()

//jwtDecode 
/*
Напишете функцію jwtDecode, яка приймає єдиний параметр token і повертає інформацію з переданого JWT токена.
Алгоритм розкодування:
Розбити токен на три частини. Розділювач - . (крапка)
Виділити середню частину.
Використовуючи функцію atob розкодувати середню частину з кодування Base64, отримавши JSON
Розкодувати JSON
Повернути розкодовані дані з JSON
Врахуйте, що як токен може бути передана якась дичина. У такому разі розкодування не вийде, і функція:
Не повинна сипати червоними матюками (помилками) у консоль
Повинна просто повернути undefined
*/
function jwtDecode(token) {
    try {
        const mainElemOfToken = token.split('.')[1];
        console.log(mainElemOfToken);

        const decodedToken = atob(mainElemOfToken);
        const disparsedToken = JSON.parse(decodedToken);
        return disparsedToken;

    } catch (error) {
        console.log('Error decoding JWT: ' + error);
        return undefined;
    }
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
console.log(jwtDecode(token)) 
//{
//  "sub": {
//    "id": "632205aeb74e1f5f2ec1a320",
//    "login": "test457",
//    "acl": [
//      "632205aeb74e1f5f2ec1a320",
//      "user"
//    ]
//  },
//  "iat": 1668272163
//}

try {
    console.log(jwtDecode())         //undefined
    console.log(jwtDecode("дічь"))   //undefined
    console.log(jwtDecode("ey.ey.ey"))   //undefined
    
    console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором')
}
finally{
    console.log('ДЗ, мабуть, закінчено')
}
