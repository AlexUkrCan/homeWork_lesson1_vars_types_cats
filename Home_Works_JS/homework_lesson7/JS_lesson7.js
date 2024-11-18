// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}
const arrayUsers = [
    new User(1, 'Olena', 'Golovach','golovOl@mail.com', '+380971111111'),
    new User(2, 'Igor', 'Petrov','petrov13@mail.com', '+38097222254'),
    new User(3, 'Viktor', 'Kolesnikov','kolesnik_vik@mail.com', '+38097737426'),
    new User(4, 'Jack', 'Harris','harr19990is_j@mail.com', '+38097457698'),
    new User(5, 'Petro', 'Kozlov','goatPet@mail.com', '+38097324544'),
    new User(6, 'Anton', 'Tymchenko','timoha1997@mail.com', '+3809732456523'),
    new User(7, 'Andriy', 'Vlasov','volosina_andrew@mail.com', '+3809723143'),
    new User(8, 'Maksym', 'Tartach','tarik178@mail.com', '+380978699966'),
    new User(9, 'Willis', 'Glass','wilglas@mail.com', '+3809753572653'),
    new User(10, 'Anastasia', 'Ivanova','ivAnast@mail.com', '+38097241543'),
];
console.log(arrayUsers);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterArray = arrayUsers.filter(value => value.id%2==0);
console.log(filterArray);

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arrayUsers.sort((a, b) => a.id - b.id));

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order =order;
    }
}
const arrayClients = [
    new Client(1, 'Olena', 'Golovach','golovOl@mail.com', '+380971111111',[{item:'Dodge', price:'37000$'},{item:'Samsung', price:'1600$'}]),
    new Client(2, 'Igor', 'Petrov','petrov13@mail.com', '+38097222254', [{item:'Phone', price:'1000$'}]),
    new Client(3, 'Viktor', 'Kolesnikov','kolesnik_vik@mail.com', '+38097737426',[{item:'Watch', price:'400$'},{item:'Bike', price:'270$'},{item:'AppleWatch', price:'390$'}]),
    new Client(4, 'Jack', 'Harris','harr19990is_j@mail.com', '+38097457698',[{item:'Fridge', price:'450$'}]),
    new Client(5, 'Petro', 'Kozlov','goatPet@mail.com', '+38097324544',[{item:'TV', price:'700$'}]),
    new Client(6, 'Anton', 'Tymchenko','timoha1997@mail.com', '+3809732456523',[{item:'Phone', price:'500$'}]),
    new Client(7, 'Andriy', 'Vlasov','volosina_andrew@mail.com', '+3809723143',[{item:'Volkswagen', price:'15000$'}]),
    new Client(8, 'Maksym', 'Tartach','tarik178@mail.com', '+380978699966',[{item:'Iphone', price:'1700$'}]),
    new Client(9, 'Willis', 'Glass','wilglas@mail.com', '+3809753572653',[{item:'Google Pixel', price:'1400$'}]),
    new Client(10, 'Anastasia', 'Ivanova','ivAnast@mail.com', '+38097241543',[{item:'KIA', price:'17000$'}]),
];
console.log(arrayClients);

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arrayClients.sort((a, b) => a.order.length - b.order.length));

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year_of_production, max_speed,volume_of_engine) {
    this.model = model;
    this.producer = producer;
    this.year_of_production = year_of_production;
    this.max_speed = max_speed;
    this.volume_of_engine = volume_of_engine;
    this.info = function () {
        for (const key in car) {
           console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        return this.max_speed + newSpeed;
    }
    this.changeYear = function (newValue) {
        return this.year_of_production = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }


}
let car = new Car('Scenic', 'Renault', 2007, 230 , '2.0L');
console.log(car.info());
Car.prototype.drive = function () {
    return `їдемо зі швидкістю ${this.max_speed} на годину`;
}
console.log(car.drive());
console.log(car.increaseMaxSpeed(40));
console.log(car.changeYear(2012));
console.log(car.addDriver({name:'Alex', experiance:'15 years'}));
console.log(car);

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarWithProperties {
      constructor(model, producer, year_of_production, max_speed, volume_of_engine) {
          this.model = model;
          this.producer = producer;
          this.year_of_production = year_of_production;
          this.max_speed = max_speed;
          this.volume_of_engine = volume_of_engine;
      }
      driveInClass(){
          return `їдемо зі швидкістю ${this.max_speed} на годину`;
      }
      infoInClass () {
        for (const key in carInClass) {
            console.log(key, this[key]);
        }
    }
    increaseMaxSpeedInClass (newSpeed){
        return this.max_speed + newSpeed;
    }
    changeYearInClass (newValue) {
        return this.year_of_production = newValue;
    }
    addDriverInClass (driver) {
        this.driver = driver;
    }
}
let carInClass = new CarWithProperties ('Mustang', 'Ford', 2018, 310, '4.7L');
console.log(carInClass);
console.log(carInClass.driveInClass());
console.log(carInClass.infoInClass());
console.log(carInClass.increaseMaxSpeedInClass(30));
console.log(carInClass.changeYearInClass(2023));
console.log(carInClass.addDriverInClass({name:'Jackie', experiance:'27 years'}));

//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, size_of_foot) {
        this.name = name;
        this.age = age;
        this.size_of_foot = size_of_foot;
    }
}
class Prince {
    constructor(name, age, foundedBoot) {
        this.name = name;
        this.age = age;
        this.foundedBoot = foundedBoot;
    }
}
const prince = new Prince('Artur', 24, 37);

const arrOfCinderellas = [
    new Cinderella('Ahgelica', 19, 39),
    new Cinderella('Arina', 18, 36),
    new Cinderella('Kristina', 23, 35),
    new Cinderella('Veronica', 25, 37),
    new Cinderella('Ahgelica', 26, 38),
    new Cinderella('Janetta', 22, 40),
    new Cinderella('Kobeta', 26, 36),
    new Cinderella('Iryna', 29, 34),
    new Cinderella('Olga', 23, 36),
    new Cinderella('Anastasia', 21, 38),
];

for (const cinderella of arrOfCinderellas) {
    if(cinderella.size_of_foot === prince.foundedBoot) {
         console.log(`I found her. This is ${cinderella.name}`);
    }
}
let find = arrOfCinderellas.find(cinderella => cinderella.size_of_foot === prince.foundedBoot)
console.log(find);

//*Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function(callback) {
    const arr = this;

    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
const arrAnimals = ['собака', 'кіт', 'курка', 'панда'];
arrAnimals.myForEach((item, i, arr) => {
    console.log(`Поточний елемент масиву: ${item} ,поточний індекс: ${i} , масив: ${arr} 
  `);
});

const data = [1, 2, 3, 4, 5];

const arrData = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (fn) {
    const filtered = [];

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            filtered.push(this[i]);
        }
    }
    return filtered;
};

const filteredData = arrData.myFilter(function (element) {
    if (element > 2)
        return element;
});
console.log(filteredData);
