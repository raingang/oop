/*
задача 4:
Реализуйте класс MyString, который будет иметь методы reverse(), ucFirst() и метод ucWords()
    . которые были реализованы на практическом задании по структурам данных
*/

class MyString{

    reverse(string) {
        return string.split('').reverse().join('');
    }

    ucFirst(string) {
        return string[0].toUpperCase() + string.substring(1, string.length);
    }

    ucWords(string) {
        const arr = string.split(' ');
        return arr.map(item => item[0].toUpperCase() + item.substring(1, item.length)).join(' ')
    }

}


const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

/*
Реализуйте класс Validator, который будет проверять строки. Он будет иметь методы isEmail(), isUrl(), isDate() и метод isPhone()
    . которые были реализованы на практическом задании по сруктурам данных

*/

class Validator{

    isEmail(string) {
        return (/^[\d\w]{3,}@[\d\w]{3,}\.[\d\w]{2,}$/).test(string);
    }

    isDomain(string) {
        return /(http:\/\/|https:\/\/){0,1}([\d\w]{2,}).([\d\w]{2,})(\/[\d\w]{1,}){0,}/.test(string);
    }

    isDate(string) {
        return /^\d{1, 2}[./-]\d{1, 2}[./-]\d{2, 4}/.test(string);
    }

    isPhone(string) {
        return /^\+*(\d{3}){0,1}(\d{2})\d{7}$/.test(string)
    }
}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+380989817689')); //тут можете валидировать наличия плюса в начале номера и код страны
