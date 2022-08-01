// alert message
const alertMe = (date, time, timer, count_down, audio) => {
  // timestamp
  const start = Date.now();
  const end = new Date(date + ' ' + time);
  const alert_time = Math.floor(Math.abs(end.getTime() - start));

  // get value from time
  const total_sec = Math.floor(alert_time / 1000);
  const total_min = Math.floor(total_sec / 60);
  const total_hr = Math.floor(total_min / 60);
  const total_day = Math.floor(total_hr / 24);

  // separate time to there designated area
  const hr = total_hr - total_day * 24,
    min = total_min - total_day * 24 * 60 - hr * 60,
    sec = total_sec - total_day * 24 * 60 * 60 - hr * 60 * 60 - min * 60;

  // clear the timer
  if (total_sec <= 0) {
    clearInterval(timer);
    audio.play();
  }
  count_down.innerHTML = `
  <div id="tiles">
      <span>${total_day}</span>
      <span>${hr}</span>
      <span>${min}</span>
      <span>${sec}</span>
  </div>
  <div class="labels">
      <li>Days</li>
      <li>Hours</li>
      <li>Mins</li>
      <li>Secs</li>
  </div>`;
};

// progress bar
const pBar = (start, end) => {
  const duration = end.getTime() - start;
  const change = end - Date.now();

  return Math.floor((100 * change) / duration);
};
