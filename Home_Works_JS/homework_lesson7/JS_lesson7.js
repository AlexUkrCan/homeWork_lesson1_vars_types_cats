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