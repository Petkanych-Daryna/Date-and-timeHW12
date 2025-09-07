class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.container = document.querySelector(selector);
    this.targetDate = targetDate;
    this.refs = {
      days: this.container.querySelector('[data-value="days"]'),
      hours: this.container.querySelector('[data-value="hours"]'),
      mins: this.container.querySelector('[data-value="mins"]'),
      secs: this.container.querySelector('[data-value="secs"]'),
    };
    this.start();
  }

  start() {
    this.update();
    this.interval = setInterval(() => this.update(), 1000); 
  }

  update() {
    const now = new Date();
    const time = this.targetDate - now;

    if (time <= 0) {
      clearInterval(this.interval);
      this.refs.days.textContent = '00';
      this.refs.hours.textContent = '00';
      this.refs.mins.textContent = '00';
      this.refs.secs.textContent = '00';
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.refs.days.textContent = days.toString().padStart(2, '0');
    this.refs.hours.textContent = hours.toString().padStart(2, '0');
    this.refs.mins.textContent = mins.toString().padStart(2, '0');
    this.refs.secs.textContent = secs.toString().padStart(2, '0');
  }
}


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2025 23:59:59'),
});