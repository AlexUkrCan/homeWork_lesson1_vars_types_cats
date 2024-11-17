//Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
console.log(str.length);
let str1 = 'lorem ipsum';
console.log(str1.length);
let str2 = 'javascript is cool';
console.log(str2.length);

//Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let str3 = 'hello world';
console.log(str3.toUpperCase());
let str4 = 'lorem ipsum';
console.log(str4.toUpperCase());
let str5 = 'javascript is cool'
console.log(str5.toUpperCase());

// Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str6 = 'HELLO WORLD';
console.log(str6.toLowerCase());
let str7 = 'LOREM IPSUM';
console.log(str7.toLowerCase());
let str8 = 'JAVASCRIPT IS COOL'
console.log(str8.toLowerCase());

//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str9 = ' dirty string   ';
console.log(str9.trim());

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strV = 'Ревуть воли як ясла повні';
function stringToArray(str) {
    if(str) {
        const newSplit = str.split(' ');
        return newSplit;
    }
    return [' '];
}
console.log(stringToArray(strV));

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
let arrToString = arr.map(number=>{
    return number.toString();
})
console.log(arrToString);

// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(array, direction) {
    if(direction === 'ascending') {
        const sortedArray = array.sort((a,b) => a - b);
    }else if (direction === 'descending'){
        const sortedArray = array.sort((a,b) => b - a);
    }
    return array;
}
console.log(sortNums(nums, 'ascending'));

//- є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));;

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

let newArrayCourses = coursesAndDurationArray.map(function (value, index) {
    let newCoursesAndDuration = {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration,
    }
    return newCoursesAndDuration;
})
console.log(newArrayCourses);

//описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
let suits = ['spade', 'diamond','heart', 'clubs'];
let valueOfCards = ['6', '7', '8', '9', '10', 'jack','queen','king','ace']
const deckOfCards = [];
for (const suit of suits) {
    for (const value of valueOfCards) {
        const card = {cardSuit:suit, value:value};
        if(suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }else {
            card.color = 'black';
        }
        deckOfCards.push(card);
    }
}
console.log(deckOfCards);

let findSpadeAce = deckOfCards.filter(value => value.value === 'ace' && value.cardSuit === 'spade');
console.log(findSpadeAce);

let findAllSix = deckOfCards.filter(value => value.value === '6');
console.log(findAllSix);

let findAllRedCards = deckOfCards.filter(value => value.color === 'red');
console.log(findAllRedCards);

let findAllDiamond = deckOfCards.filter(value => value.cardSuit === 'diamond');
console.log(findAllDiamond);

let findClubs = deckOfCards.filter(value =>value.cardSuit === 'clubs' && (value.value === '9' || value.value === '10' || value.value === 'jack' || value.value === 'queen' || value.value === 'king' || value.value === 'ace'));
console.log(findClubs);

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(deckOfCards)

let reduceArrays = deckOfCards.reduce((previousValue, card) => {
    if(card.cardSuit === 'clubs') {
        previousValue.clubs.push(card);
    }else if(card.cardSuit === 'spade') {
        previousValue.spades.push(card);
    }else if(card.cardSuit === 'diamond') {
        previousValue.diamonds.push(card);
    }else if(card.cardSuit === 'heart') {
        previousValue.hearts.push(card);
    }

    return previousValue;
},{spades:[], diamonds:[], hearts:[], clubs:[]})
console.log(reduceArrays);

//взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
]

let saasFind = (coursesArray.filter(value => {
   return value.modules.includes('sass');
}))
console.log(saasFind);

let dockerFind = (coursesArray.filter(value => {
    return value.modules.includes('docker');
}))
console.log(dockerFind);
