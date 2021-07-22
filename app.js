class Debounce {
  debounceTimer;
  debounce(cb, delay) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(cb, delay);
  }
}

class Throttle {
  throttling = false;
  throttle(cb, delay) {
    if (this.throttling) return;

    cb();
    this.throttling = true;

    setTimeout(() => {
      this.throttling = false;
    }, delay);
  }
}

const updateInfo = (selector, data) => {
  document.querySelector(selector).textContent = data;
};
const myThrottle = new Throttle();
const myThrottle2 = new Throttle();
const myThrottle3 = new Throttle();
const myDebounce = new Debounce();
const myDebounce2 = new Debounce();
const myDebounce3 = new Debounce();

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
