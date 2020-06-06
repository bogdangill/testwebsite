let firstContainer = document.querySelector('.variableContainer');
let containerWide = document.querySelector('.containerWide');
let containerNarrow = document.querySelector('.containerNarrow');
let historySections = document.querySelectorAll('.history-section');

let bottles = document.querySelector('.bottles');
let newThings = document.querySelectorAll('.new-thing');
let advantagesList = document.querySelector('.advantagesList');
let advantagesItems = document.querySelectorAll('.advantagesItem');

// for (let historySection of historySections) {
//     console.log('высота содержимого вместе с полями padding, но без полосы прокрутки: '+historySection.clientHeight);
// }
// console.log('ыыы: '+bottles.clientWidth);

// пытаюсь убрать лишние border-left у элементов new-thing
if (bottles.clientWidth > 484){
  for (var i=0; i < newThings.length; i++) {
    if (i > 0 && i < newThings.length-1) {
      // newThings[i].style.backgroundColor = 'red';
      newThings[i].style.borderLeft = 'none';
    }
  }
}
//аналогично с контейнерами у преимуществ
console.log('высота содержимого вместе с полями padding, но без полосы прокрутки: '+advantagesList.clientHeight);

if (advantagesList.clientHeight < 400) {
  for (var i=0; i < advantagesItems.length; i++) {
    if (i == advantagesItems.length-1) {
      advantagesItems[i].style.borderRight = 'none';
      // console.log('работает, но..');
    }
  }
} else if (advantagesList.clientHeight > 400 && advantagesList.clientHeight < 650) {
  for (var i=0; i < advantagesItems.length; i++) {
    if (i != 0) {
      advantagesItems[i].style.borderRight = 'none';
      // console.log('работает, но..');
    }
  }
} else {
  for (var i=0; i < advantagesItems.length; i++) {
     advantagesItems[i].style.borderRight = 'none';
     // console.log('it works!');
  }
}

//меняю контейнеры по разной ширине экрана
//знаю, что проще создать отдельный класс-контейнер со своими особыми паддингами под медиазапросы, да и если даже javascipt отвалится, то по приницпу graceful degradation.. потом сделаю, а сейчас - вот:
// if (window.matchMedia("(max-width: 991.98px)").matches) {
//   // firstContainer.classList.remove('containerNarrow');
//   firstContainer.classList.toggle('containerWide');
//   console.log('включен широкий контейнер');
//   firstContainer.classList.toggle('containerNarrow');
//   console.log('включен узкий контейнер');
// } upd. код свое отжил, пусть как раритет останется..
