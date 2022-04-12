console.clear();

// Задание 1
console.log('Задание 1');
for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log('0 - это ноль');
    } else {
        if (i % 2 === 0) {
            console.log(`${i} – четное число`);
        } else {
            console.log(`${i} – нечетное число`);
        }
    }
}
console.log('');

// Задание 2
console.log('Задание 2');
const array2 = [1, 2, 3, 4, 5, 6, 7];
array2.splice(3, 2);
console.log(array2);
console.log('');

// Задание 3
console.log('Задание 3');
const array3 = [];
for (let i = 0; i < 5; i++) {
    array3.push(Math.floor(Math.random() * 11));
}
console.log(array3);
const array3New = array3.map(item => item ** 2);
console.log(array3New);
console.log('');

// Задание 4
console.log('Задание 4');
const array4 = [];
for (let i = 0; i < 5; i++) {
    array4.push(Math.floor(Math.random() * 11));
}
console.log(array4);
const array4New = array4
    .filter(item => item !== 3)
    .map(item => Math.floor((item * 1.1) * 10) / 10); // a + a * 0.1 = a * (1 + 0.1)
console.log(array4New);
console.log();

// Задание 5
console.log('Задание 5');
for (let i = 0; i < 10; console.log(i), i++) { /* здесь пусто */ }
console.log('');

// Необязательное задание
console.log('Необязательное задание');
let str = '*';
for (let i = 0; i < 20; i++) {
    console.log(str);
    str += '*';
}