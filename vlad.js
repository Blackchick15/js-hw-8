// Задача №1
// Баланс користувача зберігається у змінній balanse
// Сума покупки зберігається у змінній payment

// Перед перевіркою вивсти повідомлення:
// - "Загальна вартість товару замовлення [число] кредитів.
//     Перевіряєм кількість доступних коштів на рахунку"

// - Ящо сума покупки не перевищує баланс:
//      - Вирахувати із баланмса суму покупки
//      - Вивести повідомлення
//      "На рахунку залишилось [число] кредитів"

// - Якщо сума покупки перевищує баланс:
//      -Вивести повідомлення
//      "На рахунку не достатньо коштів для проведення операції!"

// - В кінці вивести повідомлення
//      "Операція завершена"

// let balanse = 25000;
// const payment = 5000;

// console.log(`Загальна вартість товару замовлення ${payment}  кредитів.
//     Перевіряєм кількість доступних коштів на рахунку`)

//     if(balanse >= payment){
//         balanse -= payment
//         console.log(`На рахунку залишилось ${balanse} кредитів`)
//     }else{
//         console.log('На рахунку не достатньо коштів для проведення операції!')
//     }
//     console.log('Операція завершена')
// .....................
// Задача№ 2
// спочатку if else
// потым switch ()

// Напишіть скрипт вибору вартості готелю по кількості зірок
// 1 - 20$, 2 - 30$, 3 - 50$,  4- 70$, 5 -120$
//Якщо у змінній stars щось інше від чисел 1-5,
// виведи строку
// "Такої кількості зірок немає"

// const stars = 1;
// let price;

// switch(stars){
//     case 1:
//         price = 20;
//         break

//         case 2:
//             price = 30;
//             break

//              case 3:
//             price = 50;
//             break

//             case 4:
//                 price = 70;
//                 break

//                 case 5:
//                     price = 120;
//                     break

//                     default:
//                         console.log("Такої кількості зірок немає")
// }

// console.log(price)

// if(stars === 1 ){
//     price = 20;
// }else if(stars === 2){
//     price = 30;

// }else if(stars === 3){
//     price = 50;
    
// }else if(stars === 4){
//     price = 70;
    
// }else if(stars === 5){
//     price = 120;
    
// }else{
//     console.log("Такої кількості зірок немає")
// }

// console.log("price")




// ..............................
// Задача № 3
// Напиши скрипт вибору оцінки доставки товару
// Опція зберігається у змінній
// option: 1 - самовивіз, 2 - курєр, 3 - пошта

// У змінну message записати повідломлення
//  в залежності від опції
// - "Ви можете забрати товар завтра з 12:00 у нашому офісі"
// - "Курєр доставить замовлення завтра з 9:00 до 18:00"
// - "Посилка буде відправлена сьогодні"
// - "Вам передзвонить менеджер"
// const option = 1;
// let message

// switch(option){
//     case 1:
//         message = "Ви можете забрати товар завтра з 12:00 у нашому офісі";
//         break;

//     case 2:
//       message = "Курєр доставить замовлення завтра з 9:00 до 18:00";
//          break;
//     case 3:
//       message = "Посилка буде відправлена сьогодні";
//          break;
//          default:
//             console.log("Вам передзвонить менеджер")

// }
// console.log(message)
// .........................
// Задача №4 робимо разом

// Напиши код який шукає найменше число в масиві
// const numbers = [2, 17, 94, 1, 23, 37];
// let smallNumber = numbers [0]
// for (const number of numbers) {
//     if(smallNumber > number){
//         smallNumber = number
//     console.log(number)
    
//     }
       
    
// }

// .......................
// Задача № 5
// Напиши цикл for який виводить в консоль
// браузера числа по збільшенню від min до max.
// const max = 100;
// const min = 20;
// for( let i =min;i <=max;i +=1){
//     console.log(i)
// }

// ...................
// Методи масивів

// split() join() reverse()
// Задача  № 6
// Перевірити чи наша строка являється – паліндромом.
// const str = "ротатор";
// const newString = "коробка";

// const palinDrop = str.split("").reverse().join("")
// console.log(palinDrop)

// const array = str.split("")
// array.reverse()
// const joinString = array.join("")
// console.log(joinString === str)