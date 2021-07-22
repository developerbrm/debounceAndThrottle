export class Throttle {
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
