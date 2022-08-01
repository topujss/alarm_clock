const count_form = document.querySelector('#counter-form');
const count_down = document.querySelector('#countdown');
const stop_btn = document.querySelector('.stop-btn');
const bar = document.querySelector('.bar');

// audio setup
const audio = document.querySelector('audio');

const timer = null;

// countdown default
count_down.innerHTML += `
<div id="tiles">
    <span>0</span>
    <span>0</span>
    <span>00</span>
    <span>00</span>
</div>
<div class="labels">
    <li>Days</li>
    <li>Hours</li>
    <li>Mins</li>
    <li>Secs</li>
</div>`;


// submit form
count_form.onsubmit = (e) => {
  e.preventDefault();

  clearInterval(timer);

  // get form data
  const { date, time } = Object.fromEntries(new FormData(e.target).entries());

  if (!date || !time) {
    alert('all fields required!');
  } else {
    e.target.reset();

    // get time
    const start = Date.now();
    const end = new Date(date + ' ' + time);

    // timer function interval
    const timer = setInterval(() => {
      alertMe(date, time, timer, count_down, audio);

      // progress bar
      const barLength = pBar(start, end);
      bar.style.width = `${100 - barLength}%`;

      if ((barLength) => 0 && barLength < 33) {
        bar.style.background = 'red';
      } else if ((barLength) => 33 && barLength <= 66) {
        bar.style.background = 'aqua';
      } else {
        bar.style.background = 'green';
      }
    }, 1000);
  }
};

// stop all sound
stop_btn.onclick = (e) => {
  e.preventDefault();
  audio.pause();
};
