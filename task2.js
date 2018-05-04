/*
задача 2:

Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
*/

function Worker(name, surname, rate, days){
    this.getName = () =>  name;
    this.getSurname = () =>  surname;
    this.getRate = () =>  rate;
    this.getDays = () =>  days;
    this.getSalary = () => rate*days;
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
