/*
задача 3:

Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
*/

function Worker(name, surname, rate, days){
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
    this.getName = () =>  name;
    this.getSurname = () =>  this._surname;
    this.getRate = () =>  this._rate;
    this.setRate = (rate) => {
        if(rate < 0){
            throw new Error('Incorrect number')
        }
        this._rate = rate;
    }
    this.getDays = () =>  this._days;
    this.setDays = (days) => {
        if(days < 0){
            throw new Error('Incorrect number')
        }
        this._days = days;
    }
    this.getSalary = () => this._rate*this._days;
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10