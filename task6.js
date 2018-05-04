/*
задача 6 на замыкания

Сделайте функцию, которая считает и выводит количество своих вызовов.
*/


function deco(calls = 0){
    return () =>{
        console.log(++calls);
        return calls;
    }
}

const func = deco();

func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func(); //выведет 4
