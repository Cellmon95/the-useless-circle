const body = document.querySelector('body');
const btnClock = document.querySelector('#btn-clock');
btnClock.addEventListener('click', onClickBtnClock);
const btnEmojis = document.querySelector('#btn-emojis');
const btnDots = document.querySelector('#btn-dots');
document.addEventListener('mousemove', onMouseMove);
window.onresize = windowResize;
centerX = window.innerWidth / 2;
centerY = window.innerHeight / 2;
const circlePoints = [];
const type = {
  clock: 0,
  emojis: 1,
  dots: 2,
};

const emojisList = [
  '🍉',
  '🙂',
  '😊',
  '😀',
  '😁',
  '❤',
  '💙',
  '💛',
  '💜',
  '💥',
  '💬',
  '🤚',
  '🐌',
  '🦋',
  '🐛',
  '🌷',
  '🌼',
  '🌺',
  '🌹',
  '🌱',
  '🌲',
  '🌳',
  '☘',
];

randEmojisClock = [];

function initCirclePoints() {
  for (let i = 0; i < 12; i++) {
    const point = document.createElement('span');
    body.appendChild(point);
    circlePoints.push(point);
  }
}

function windowResize(e) {
  centerX = window.innerWidth / 2;
  centerY = window.innerHeight / 2;
}

function onMouseMove(e) {
  const distanceX = e.offsetX - centerX;
  const distanceY = e.offsetY - centerY;
  const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
  const radius = distance - 20;
  drawCirclePoints(centerX, centerY, radius, type.emojis);
}

function drawCirclePoints(posX, posY, radius, circleType) {
  for (let i = 0; i < circlePoints.length; i++) {
    const radian = (i * 30 * Math.PI) / 180;
    const clockPoint = circlePoints[i];
    clockPoint.classList.add('clock-number');
    clockPoint.style.left =
      (Math.cos(radian) * radius + posX).toString() + 'px';
    clockPoint.style.top = (Math.sin(radian) * radius + posY).toString() + 'px';

    switch (circleType) {
      case type.clock:
        clockPoint.innerHTML = clockPointsType(i);
        break;

      case type.emojis:
        clockPoint.innerHTML = emojiPointsType(i);
        break;

      default:
        break;
    }

    body.appendChild(clockPoint);
  }
}

function clockPointsType(i) {
  return ((i + 2) % 12) + 1;
}

function emojiPointsType(i) {}

function onClickBtnClock(e) {
  currentType = type.clock;
}

function onClickBtnEmojis(e) {
  currentType = type.emojis;
  randEmojisClock = [];

  for (let i = 0; i < 12; i++) {
    randEmojisClock.push(emojisList[Math.floor(Math.random() * emojis.length)]);
  }
}

function onClickBtnClock(e) {
  currentType = type.clock;
}

initCirclePoints();
drawCirclePoints(centerX, centerY, 150, type.emojis);
