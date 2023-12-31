//REDUX
const baseState = {
    пиво: { howMuch: 100, priceItem: 30 },
    чіпси: { howMuch: 100, priceItem: 50 },
    сіги: { howMuch: 100, priceItem: 80 },
    каса: 0,
}

function reducer(state, { type, ЩО, СКОКА, КОШТИ }) { //об'єкт action деструктуризується на три змінні
    if (!state) { //початкове прибирання в кіоску:
        return baseState;
    }
    if (СКОКА <= 0) {
        alert('Ви не можете купити ніскільки або в мінус =)');
        return state;
    }
    if (КОШТИ < СКОКА * state[ЩО].priceItem) {
        alert('Недостатньо коштів для купівлі!');
        return state;
    }
    if (type === 'КУПИТИ' && СКОКА <= state[ЩО].howMuch) { //якщо тип action - КУПИТИ, то:
        return {
            ...state,
            [ЩО]: {
                ...state[ЩО],
                howMuch: state[ЩО].howMuch - СКОКА,
            },
            каса: state.каса + ([СКОКА] * state[ЩО].priceItem),
        };
    } else {
        alert('Ви намагаєтеся купити дуже багато, в нас стільки нема...');
    }
    return state; //якщо ми не зрозуміли, що від нас просять в `action` - залишаємо все як є
}

function createStore(reducer) {
    let state = reducer(undefined, {}) //стартова ініціалізація стану, запуск редьюсера со state === undefined
    const cbs = [];
    const getState = () => state

    const subscribe = cb => (cbs.push(cb),   //запам'ятовуємо пiдписникiв у масиві
        () => cbs = cbs.filter(c => c !== cb)) //повертаємо функцію unsubscribe, яка видаляє пiдписника зі списку

    const dispatch = action => {
        const newState = reducer(state, action) //пробуємо запустити редьюсер
        if (newState !== state) { //перевіряємо, чи зміг ред'юсер обробити action
            state = newState //якщо зміг, то оновлюємо state 
            for (let cb of cbs) cb() //та запускаємо пiдписникiв
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

const menu = document.querySelector('.list');
for (const position in baseState) {
    const li = document.createElement('li');

    li.textContent = (position !== 'каса')
        ? `${position}: залишок ${baseState[position].howMuch} од., ціна: ${baseState[position].priceItem} грн.`
        : `${position}: ${baseState[position]}`;
    menu.appendChild(li);
}

const myList = document.getElementById('sho');
for (const key in baseState) {
    if (key !== 'каса') {
        const option = document.createElement('option');
        option.innerText = key;
        myList.appendChild(option);
    }
}

const kiosk = createStore(reducer);

function updateStock() {
    const list = document.querySelector('.list');
    list.innerHTML = '';
    const stateNow = kiosk.getState();

    for (const commodity in stateNow) {
        const li = document.createElement('li');
        li.textContent = (commodity !== 'каса')
            ? `${commodity}: залишок ${stateNow[commodity].howMuch}од., ціна: ${stateNow[commodity].priceItem} грн.`
            : `${commodity}: ${stateNow[commodity]}`
        list.appendChild(li);
    };
    // const cash = stateNow['каса'];
    // document.title = `Каса: ${cash} грн`;
}
const unsubscribe = kiosk.subscribe(updateStock);

function updateTitle() {
    const stateNow = kiosk.getState();
    const cash = stateNow['каса'];
    document.title = `Каса: ${cash} грн`;
}
const unsubscribeTitle = kiosk.subscribe(updateTitle);
// document.addEventListener('keyup', event => {
//     if (event.code === 'Enter') {
//          ...
//     }
// })

document.getElementById('buy').addEventListener('click', () => {
    const commodity = document.getElementById('sho');
    const quantityInput = document.getElementById('skoka');
    const costs = document.getElementById('money');
    const selectedCommodity = commodity.value;
    const quantity = quantityInput.value;
    const costsValue = costs.value;

    console.log(selectedCommodity, quantity);

    kiosk.dispatch({ type: 'КУПИТИ', ЩО: selectedCommodity, СКОКА: quantity, КОШТИ: costsValue });

    quantityInput.value = '';
    costs.value = '';
});



// let state = reducer(undefined, {}) //перший виклик
// console.log(state)
// state = reducer(state, { type: 'КУПИТИ', ЩО: 'пиво', СКОКА: 5 })
// console.log(state)