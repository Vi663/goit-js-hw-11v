// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.finalDate = targetDate;
//     this.date = currentDate
//     this.time = targetDate - currentDate;
//   }
// };
// const currentDate = Date.parse(new Date());
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
// console.log(CountdownTimer);
// //time - різниця між targetDate і поточною датою
// /*
//  * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
//  * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
//  * залишку% і ділимо його на кількість мілісекунд в одній годині
//  * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
//  * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// days = days < 10 ? "0" + days : days;
// hours = hours < 10 ? "0" + hours : hours;
// minutes = minutes < 10 ? "0" + minutes : minutes;
// seconds = seconds < 10 ? "0" + seconds : seconds;