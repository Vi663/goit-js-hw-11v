const delay = (ms) => {
  let time = null;
  return new Promise((resolve) => {
    setTimeout(() => { }, ms);
    resolve(time = ms);
    return time;
  });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

// Виклич функції для перевірки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
