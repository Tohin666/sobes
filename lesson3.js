// 1. Что выведет alert(typeof NaN); ?
// Выведет number.

// 2. Что выведет alert(NaN === NaN); ?
// Выведет false.

// 3. 0.1 + 0.2 == 0.3 ?
// Нет, 0.1 + 0.2 == 0.30000000000000004.

// 4. Какой тип будет иметь переменная a, если она создается при помощи следующего кода: var a = "a,b".split(',');
// Тип массива - объект.

// 5. Сделать так, чтобы при нажатии на элемент <а> алертом выводилось «Hello world!».
document.getElementById('task5').onclick = function () {
    alert('Hello world!');
};

// 6. Найти все элементы div с классом one, а также все элементы p с классом two. Затем добавить им всем класс three и
// визуально плавно спустить вниз.
const css = '.three { transform: translate(0, 100px); transition: 2s; }',
    head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);
style.appendChild(document.createTextNode(css));
const divElements = document.querySelectorAll("div.one, p.two");
divElements.forEach(function (value) {
    value.className = "three";
});

// 7. Выбрать видимый div с именем red, который содержит тег span.
const redDivs = document.querySelector("div.red span");
console.log(redDivs.parentElement);

// 8. Привести пример замыкания.
function counter() {
    let counter = 0;
    return function () {
        return ++counter;
    }
}

let counter1 = counter();
console.log(counter1());
console.log(counter1());
let counter2 = counter();
console.log(counter2());

// 9. Написать функцию, которая уменьшает или увеличивает указанное время на заданное количество минут, например:
changeTime('10:00', 1); //return '10:01'
changeTime('10:00', -1); //return '09:59'
changeTime('23:59', 1); //return '00:00'
changeTime('00:00', -1); //return '23:59'
function changeTime(time, range) {
    const timeArray = time.split(':');
    const minutesTime = +timeArray[0] * 60 + +timeArray[1];
    let resultMinutesTime = minutesTime + range;
    if (resultMinutesTime < 0) {
        resultMinutesTime = 1440 + range;
    }
    if (resultMinutesTime > 1439) {
        resultMinutesTime = -1 + range;
    }
    let hour = Math.floor(resultMinutesTime / 60);
    if (hour < 10) {
        hour = '0' + hour;
    }
    let minute = resultMinutesTime % 60;
    if (minute < 10) {
        minute = '0' + minute;
    }
    return hour + ':' + minute;
}

// 10. Написать функцию, возвращающую градус, на который указывают часовая и минутная стрелки в зависимости от времени, например:
clock_degree("00:00"); // returns : "360:360"
clock_degree("01:01"); // returns : "30:6"
clock_degree("00:01"); // returns : "360:6"
clock_degree("01:00"); // returns : "30:360"
clock_degree("01:30"); // returns : "30:180"
clock_degree("24:00"); // returns : "Check your time !"
clock_degree("13:60"); // returns : "Check your time !"
clock_degree("20:34"); // returns : "240:204"
function clock_degree(time) {
    const timeArray = time.split(':');
    if (timeArray[0] > 23 || timeArray[1] > 59) {
        return alert("Check your time !");
    }
    if (timeArray[0] === '00') {
        timeArray[0] = 12;
    }
    if (timeArray[1] === '00') {
        timeArray[1] = 60;
    }
    if (timeArray[0] > 12) {
        timeArray[0] = timeArray[0] - 12;
    }
    const hourDegree = timeArray[0] * 30;
    const minuteDegree = timeArray[1] * 6;
    return hourDegree + ':' + minuteDegree;
}

// 11. Написать простую игру «Угадай число». Программа загадывает случайное число от 0 до 100. Игрок должен вводить 
// предположения и получать ответы «Больше», «Меньше» или «Число угадано».
function guessNumber() {
    const number = Math.round(Math.random() * 100);
    let attempt;
    do {
        attempt = +prompt();
        if (number > attempt) {
            alert('Больше');
        }
        if (number < attempt) {
            alert('Меньше');
        }
    }
    while (attempt !== number);
    alert('Число угадано');
}

guessNumber();