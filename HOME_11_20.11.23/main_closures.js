//makeProfileTimer
//Напишіть функцію makeProfileTimer, яка служить для виміру часу виконання іншого коду і працює наступним чином:

function makeProfileTimer() {
    const start = performance.now();
    return function () {
        return performance.now() - start;
    }
}

const timer = makeProfileTimer()
alert('Вимiрюємо час роботи цього alert');  //якийсь код, час виконання якого ми хочемо виміряти з високою точністю
alert(timer()); //alert повинен вивести час у мілiсекундах від виконання makeProfileTimer до моменту виклику timer(), 
// тобто виміряти час виконання alert
const timer2 = makeProfileTimer()
prompt('')
alert(`Час роботи двух аlert та одного prompt ${timer()}`)
alert(`Час роботи prompt та попереднього alert ${timer2()}`)
//Використовуйте performance.now() для того, щоб запам'ятати момент часу. 
//Ця функцiя повертає час у мiлiсекундах вiд моменту завантаження сторiнки.


//makeSaver
//Напишіть функцію makeSaver, яка:


const makeSaver = (param) => {
    let savedValue;
    return () => {
        if (typeof savedValue === 'undefined') {
            savedValue = param(); // вызываем переданное выражение только если значение еще не сохранено
        }
        return savedValue; // возвращаем сохраненное значение
    };
};


let saver = makeSaver(Math.random)
//створює функцію-сховище результату переданої як параметр функції (Math.random у прикладі). 
//На цьому етапі Math.random НЕ ВИКЛИКАЄТЬСЯ
let value1 = saver()              //saver викликає передану в makeSaver функцію, запам'ятовує результат і повертає його
let value2 = saver()              //saver надалі просто зберігає результат функції, і більше НЕ викликає передану 
//в makeSaver функцію;
alert(`Random: ${value1} === ${value2}`)

let saver2 = makeSaver(() => {
    console.log('saved function called');
    return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)]
})
let value3 = saver2()
let value4 = saver2()

value3 === value4 // теж має бути true


let namePrompt = prompt.bind(window, 'Як тебе звуть?')
let nameSaver = makeSaver(namePrompt)
alert(`Привіт! Prompt ще не було!`)
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)

//