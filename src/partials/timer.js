import Swal from 'sweetalert2';
const dateInput = document.getElementById('date-selector');
const startBtn = document.querySelector('[data-start]');
const daysContainer = document.querySelector('[data-days]');
const hoursContainer = document.querySelector('[data-hours]');
const minutesContainer = document.querySelector('[data-minutes]');
const secondsContainer = document.querySelector('[data-seconds]');
const currentDate = new Date(Date.now());
dateInput.addEventListener('input', onInput);
startBtn.addEventListener('click', onClick);
const countdownDate = new Date(dateInput.value);

function onInput() {
  const diff = convertMs(countdownDate - currentDate);
  if (diff.days
    && diff.hours
    && diff.minutes
    && diff.seconds <= 0) {
    daysContainer.innerHTML = 00;
    hoursContainer.innerHTML = 00;
    minutesContainer.innerHTML = 00;
    secondsContainer.innerHTML = 00;
    startBtn.disabled = true;
  }
}
function onClick() {
  const timerId = setInterval(() => {
    const countdownDate = new Date(dateInput.value);
    const currentDate = new Date(Date.now());
    const diff = convertMs(countdownDate - currentDate);
    if (diff.days
      && diff.hours
      && diff.minutes
      && diff.seconds <= 0) {
      daysContainer.innerHTML = 00;
      hoursContainer.innerHTML = 00;
      minutesContainer.innerHTML = 00;
      secondsContainer.innerHTML = 00;
      clearInterval(timerId);
    } else {
      daysContainer.innerHTML = diff.days.toString().padStart(2, "0");
      hoursContainer.innerHTML = diff.hours.toString().padStart(2, "0");
      minutesContainer.innerHTML = diff.minutes.toString().padStart(2, "0");
      secondsContainer.innerHTML = diff.seconds.toString().padStart(2, "0");
    };
    console.log(diff);
    console.log(countdownDate);
    console.log(currentDate);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(24140000));
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