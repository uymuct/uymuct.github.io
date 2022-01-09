"use strict";

// 414x694
var text = "Привет........ ты самое лучшее что произошло со мной в этом году........ и я хочу сказать тебе спасибо за то тепло которое ты мне подарила и продолжаешь дарить........ за твои очаровательные глаза........ взгляд........ милые щечки........ улыбку........ голос........ смех который вызывает искреннее чувство счастья........ запах твоих волос........ твоего дыхания........ твои волосы которые остаются на постели........ твои формы тела которыми я не устану любоваться........ теплые объятия и поцелуи которых зачастую так не хватает........ твою заботу........ чувство юмора........ образ мышления........ способность смотреть на проблемы с разных сторон........ понимание и поддержку........ за моменты проведенные вместе с тобой........ в такие моменты я по-настоящему счастлив........ спасибо тебе........ я................ тебя................ люблю................";
var words = text.split(' ');
var time = [0.3, 0.3, 0.3, 0.3, 0.3, 0.4, 0.5, 0.5, 0.6, 0.7, 0.7, 0.8, 0.9, 0.9, 1, 1.1, 1.1, 1.2, 1.3, 1.3, 1.4, 1.5, 1.5, 1.6, 1.6];
var textBlock = document.querySelector('#text');
var wordNum = 0;

function appendWord() {
  textBlock.innerText = words[wordNum].replace(/\./g, '');
  ;

  if (wordNum < words.length - 1) {
    wordNum++;
    setTimeout(appendWord, time[words[wordNum - 1].length - 1] * 1000);
  } else {
    setTimeout(function () {
      var heart = document.querySelector('.heart-container');
      heart.classList.toggle('heart-container--scaled', false);
      wordNum = 0;
      textBlock.innerText = '';
    }, 2000);
  }
}

$('.heart-container').on('click', function () {
  var heart = this;
  heart.classList.toggle('heart-container--scaled', true);
  setTimeout(function () {
    setTimeout(appendWord, 500);
  }, 500);
});
anime({
  targets: '#heart-poly',
  points: [{
    value: '140.06 41.06 193.06 1.06 242.06 10.06 268.06 34.06 280.06 85.06 263.06 131.06 203.06 196.06 140.06 236.06 77.06 195.06 28.06 147.06 1.06 74.06 16.06 30.06 65.06 1.06 109.06 9.06 140.06 41.06'
  }, {
    value: redrawPoints('140.06 41.06 193.06 1.06 242.06 10.06 268.06 34.06 280.06 85.06 263.06 131.06 203.06 196.06 140.06 236.06 77.06 195.06 28.06 147.06 1.06 74.06 16.06 30.06 65.06 1.06 109.06 9.06 140.06 41.06')
  }, {
    value: redrawPoints('140.06 41.06 193.06 1.06 242.06 10.06 268.06 34.06 280.06 85.06 263.06 131.06 203.06 196.06 140.06 236.06 77.06 195.06 28.06 147.06 1.06 74.06 16.06 30.06 65.06 1.06 109.06 9.06 140.06 41.06')
  }, {
    value: redrawPoints('140.06 41.06 193.06 1.06 242.06 10.06 268.06 34.06 280.06 85.06 263.06 131.06 203.06 196.06 140.06 236.06 77.06 195.06 28.06 147.06 1.06 74.06 16.06 30.06 65.06 1.06 109.06 9.06 140.06 41.06')
  }, {
    value: redrawPoints('140.06 41.06 193.06 1.06 242.06 10.06 268.06 34.06 280.06 85.06 263.06 131.06 203.06 196.06 140.06 236.06 77.06 195.06 28.06 147.06 1.06 74.06 16.06 30.06 65.06 1.06 109.06 9.06 140.06 41.06')
  }, {
    value: redrawPoints('140.06 41.06 193.06 1.06 242.06 10.06 268.06 34.06 280.06 85.06 263.06 131.06 203.06 196.06 140.06 236.06 77.06 195.06 28.06 147.06 1.06 74.06 16.06 30.06 65.06 1.06 109.06 9.06 140.06 41.06')
  }, {
    value: redrawPoints('140.06 41.06 193.06 1.06 242.06 10.06 268.06 34.06 280.06 85.06 263.06 131.06 203.06 196.06 140.06 236.06 77.06 195.06 28.06 147.06 1.06 74.06 16.06 30.06 65.06 1.06 109.06 9.06 140.06 41.06')
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line1',
  x1: [{
    value: $('#heart-line1')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line1')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line1')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line1')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line1')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line2',
  x1: [{
    value: $('#heart-line2')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line2')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line2')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line2')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line2')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line3',
  x1: [{
    value: $('#heart-line3')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line3')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line3')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line3')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line3')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line4',
  x1: [{
    value: $('#heart-line4')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line4')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line4')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line4')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line4')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line5',
  x1: [{
    value: $('#heart-line5')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line5')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line5')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line5')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line5')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line6',
  x1: [{
    value: $('#heart-line6')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line6')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line6')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line6')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line6')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line7',
  x1: [{
    value: $('#heart-line7')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line7')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line7')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line7')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line7')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line8',
  x1: [{
    value: $('#heart-line8')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line8')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line8')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line8')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line8')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line9',
  x1: [{
    value: $('#heart-line9')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line9')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line9')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line9')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line9')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});
anime({
  targets: '#heart-line10',
  x1: [{
    value: $('#heart-line10')[0].getAttribute('x1')
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x1'))
  }],
  y1: [{
    value: $('#heart-line10')[0].getAttribute('y1')
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y1'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y1'))
  }],
  x2: [{
    value: $('#heart-line10')[0].getAttribute('x2')
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('x2'))
  }],
  y2: [{
    value: $('#heart-line10')[0].getAttribute('y2')
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y2'))
  }, {
    value: redrawCoor($('#heart-line10')[0].getAttribute('y2'))
  }],
  easing: 'steps(1)',
  duration: 1000,
  loop: true
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function redrawPoints(p) {
  var points = p.split(' ');
  var pointsNew = points.map(function (point) {
    return point = Number(point) + getRandomArbitrary(-4, 4);
  });
  return pointsNew.join(' ');
}

function redrawCoor(c) {
  return c = Number(c) + getRandomArbitrary(-4, 4);
}
//   $('#btn-menu-mob').click(function(e) {
//       e.preventDefault();
//       $('.header__svg-mob').addClass('is-active');
//       $('#menu-mobile').animate({ 
//         right: '0px' 
//         }, 300);
//       $('#menu-mobile').animate({ 
//         right: '0px' 
//         }, 300);
//     $('body').css('overflow', 'hidden');
//     $('.page').animate({ 
//         right: '190px' 
//     }, 200); 
// });
// $('.menu-mobile__svg-close').click(function(e) {
//     e.preventDefault();
//     $('.header__svg-mob').removeClass('is-active');
//     $('#menu-mobile').animate({ 
//       right: '-207px' 
//   }, 300);
//   $('body').css('overflow', 'auto');
//   $('.page').animate({ 
//       right: '0px' 
//   }, 200); 
// });
"use strict";
// // header-swiper
// var swiper = new Swiper('#main-swiper', {
//   fadeEffect: {
//     crossFade: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next--header',
//     prevEl: '.swiper-button-prev--header',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   loop: true,
//   // autoplay: {
//   //   delay: 2300,
//   // },
//   fadeEffect: {
//     crossFade: true
//   },
//   speed: 800,
//   watchSlidesProgress: true,
//   watchVisibility: true,
//   disableOnInteraction: true,
// });
"use strict";