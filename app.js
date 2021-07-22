import { Throttle } from "./throttle.js";
import { Debounce } from "./debounce.js";

const updateInfo = (selector, data) => {
  document.querySelector(selector).textContent = data;
};
const myThrottle = new Throttle();
const myDebounce = new Debounce();

document.body.onmousemove = (e) => {
  const { clientX: x, clientY: y } = e;
  const delay = 200;
  const data = `X: ${x} Y:${y}`;

  updateInfo(".normal-log span", data);

  myThrottle.throttle(() => {
    updateInfo(".throttled-log span", data);
  }, delay);

  myDebounce.debounce(() => {
    updateInfo(".debounced-log span", data);
  }, delay);
};
