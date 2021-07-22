export class Debounce {
  debounceTimer;
  debounce(cb, delay) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(cb, delay);
  }
}