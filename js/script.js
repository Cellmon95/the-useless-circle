//global const
const body = document.querySelector('body');
const btnClock = document.querySelector('#btn-clock');
const btnEmojis = document.querySelector('#btn-emojis');

const circlePoints = [];
const type = {
  clock: 0,
  emojis: 1,
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

//event listeners
btnClock.addEventListener('click', onClickBtnClock);
btnEmojis.addEventListener('click', onClickBtnEmojis);

document.addEventListener('mousemove', onMouseMove);
window.onresize = windowResize;

//global variables
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let currentType = type.clock;

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
  drawCirclePoints(centerX, centerY, radius, currentType);
}

function drawCirclePoints(posX, posY, radius, circleType) {
  for (let i = 0; i < circlePoints.length; i++) {
    const radian = (i * 30 * Math.PI) / 180;
    const clockPoint = circlePoints[i];
    clockPoint.classList.add('circle-point');
    clockPoint.style.left =
      (Math.cos(radian) * radius + posX).toString() + 'px';
    clockPoint.style.top = (Math.sin(radian) * radius + posY).toString() + 'px';

    switch (circleType) {
      case type.clock:
        clockPoint.innerHTML = clockPointsType(i);
        break;

      case type.emojis:
        clockPoint.innerHTML = randEmojisClock[i];
        break;
    }

    body.appendChild(clockPoint);
  }
}

function clockPointsType(i) {
  return ((i + 2) % 12) + 1;
}

function emojiPointsType(i) {
  return randEmojisClock[i];
}

function onClickBtnClock(e) {
  currentType = type.clock;
}

function onClickBtnEmojis(e) {
  currentType = type.emojis;
  randEmojisClock = [];
  randomiseEmojiList();
}

function onClickBtnClock(e) {
  currentType = type.clock;
}

function randomiseEmojiList() {
  for (let i = 0; i < 12; i++) {
    randEmojisClock.push(
      emojisList[Math.floor(Math.random() * emojisList.length)]
    );
  }
}

initCirclePoints();
drawCirclePoints(centerX, centerY, 150, currentType);
