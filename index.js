let homePts = 0;
let homePtsEl = document.getElementById("homePoints");
homePtsEl.textContent = homePts;

let awayPts = 0;
let awayPtsEl = document.getElementById("awayPoints");
awayPtsEl.textContent = awayPts;

let period = 0;
let periodEl = document.getElementById("period");
periodEl.textContent = period;

// HOME SCORE
function add3Home() {
  let homeScore = (homePts += 3);
  homePtsEl.textContent = homeScore;
  console.log(homeScore);
}

function add2Home() {
  let homeScore = (homePts += 2);
  homePtsEl.textContent = homeScore;
  console.log(homeScore);
}

function add1Home() {
  let homeScore = (homePts += 1);
  homePtsEl.textContent = homeScore;
  console.log(homeScore);
}

function resetHome() {
  let homeScore = (homePts *= 0);
  homePtsEl.textContent = homeScore;
  console.log(homeScore);
}

// AWAY SCORE
function add3Away() {
  let awayScore = (awayPts += 3);
  awayPtsEl.textContent = awayScore;
  console.log(awayScore);
}

function add2Away() {
  let awayScore = (awayPts += 2);
  awayPtsEl.textContent = awayScore;
  console.log(awayScore);
}

function add1Away() {
  let awayScore = (awayPts += 1);
  awayPtsEl.textContent = awayScore;
  console.log(awayScore);
}

function resetAway() {
  let awayScore = (awayPts *= 0);
  awayPtsEl.textContent = awayScore;
  console.log(awayScore);
}

function reset() {
  let homeScore = (homePts *= 0);
  homePtsEl.textContent = homeScore;
  console.log(homeScore);

  let awayScore = (awayPts *= 0);
  awayPtsEl.textContent = awayScore;
  console.log(awayScore);

  period *= 0;
  periodEl.textContent = period;
}

// PERIOD
function nextPeriod() {
  if (period < 4) {
    period += 1;
    periodEl.textContent = period;
    console.log(period);
  } else {
    period = 4;
    periodEl.textContent = period;
    console.log(period);
  }
}
