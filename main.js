console.clear();

// Задание 1
const numbers1 = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

for (const key in numbers1) {
    if (numbers1[key] >= 3) {
        console.log(numbers1[key]);
    }
}


// Задание 2
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [{
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2, // вывести это число
        },
    },
    {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
            likes: 3,
            dislikes: 1,
        },
    },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3
const products3 = [{
    id: 3,
    price: 200,
},
{
    id: 4,
    price: 900,
},
{
    id: 1,
    price: 1000,
},
];

products3.forEach(item => item.price *= 0.85);
console.log(products3);

// Задание 4
const products4 = [{
    id: 3,
    price: 127,
    photos: [
        "1.jpg",
        "2.jpg",
    ],
},
{
    id: 5,
    price: 499,
    photos: [],
},
{
    id: 10,
    price: 26,
    photos: [
        "3.jpg",
    ],
},
{
    id: 8,
    price: 78,
},
];

const products4New = products4.filter(item => 'photos' in item && item['photos'].length > 0);
console.log(products4New);

// Задание 5
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const daysOfWeek = {};
for (let i = 0; i < en.length; i++) {
    daysOfWeek[en[i]] = ru[i];
}
console.log(daysOfWeek);

// Необязательное задание
const numbersE = {
    key1: {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
    },
    key2: {
        keyin1: 4,
        keyin2: 5,
        keyin3: 6,
    },
};

// 1.1
let sumOf = 0;
for (key in numbersE) {
    sumOf += Object.values(numbersE[key]).reduce((prev, curr) => prev + curr, 0);
}
console.log(sumOf);